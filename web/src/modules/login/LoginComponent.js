
import React, {Component} from 'react'
import {connect} from 'react-redux'

import  {Router,Route,hashHistory,Link,IndexRoute,browserHistory} from 'react-router';
import * as loginActions from './LoginAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
var ReactRouter = require('react-router');
import './Login.scss'


// @connect(
//     state => ({
//         loading: state.login.loading
//     }),
//     loginActions
// )

class LoginComponent extends Component {
    constructor(props){
        super(props);
    }
    loginHandler(){
        if(!this.refs.username.value){
              alert ("用户名不能为空")
            return
        } else if(!this.refs.password.value){
            alert("密码不能为空")
            return 
        }
        this.props.login(this.refs.username.value, this.refs.password.value).then(
            response =>{
            if(!response.body.status){
              alert(response.body.message)
            }else{
                this.props.loading=true;
                var phoneNum = this.refs.username.value;
                window.sessionStorage.setItem('phone',phoneNum)
                hashHistory.push('/memberCenter')
            }
        })
    }
    loginUsername(){
        var len=this.refs.username.value.length;
       if(len<1){
            this.refs.usercha.style.display = "none";
       }else{
         this.refs.usercha.style.display = "block";
       }
    }
    loginPassword(){
        var lenPas = this.refs.password.value.length;
        if(lenPas<1){
              this.refs.showpas.style.display= "none";  
              this.refs.yincang1.style.color= "#DFBF77"       
        }else{
            this.refs.showpas.style.display= "block";        
        }
    }
    eyes(){
        if(this.refs.password.type==="password"){
            this.refs.yincang1.style.color="red";
            this.refs.password.type="text"    
        }else{
            this.refs.yincang1.style.color="#DFBF77";
            this.refs.password.type="password";             
        }
    }
    qingchu(){
        this.refs.username.value="";
        this.refs.usercha.style.display="none";   
    }
    qingkongPas(){
        this.refs.password.value="";
        this.refs.showpas.style.display="none";   
    } 
    skipback(){
        window.location.hash = 'register'
    }  
    render(){
        return(
            <div className= 'loginScss'>
                <div className= 'loginTop'>名表汇登录</div>
                <div className= 'logoImg'><img src={require('../../static/styles/images/watchLogo.jpg')} alt=""/></div>
                <form className="loginForm">
                    <div>
                        <input type="text" id="loginUser"  ref="username" className="phone" placeholder="请填写手机号/用户名" onChange={this.loginUsername.bind(this)} />
                        <i id='Login_cha' ref="usercha" className= 'iconfont icon-cha' onTouchStart={this.qingchu.bind(this)}></i>
                        <hr/>
                        <input type="password" id="loginPas" onChange={this.loginPassword.bind(this)}   ref="password" className="password" placeholder="请填写6-12位密码，包含字母和数字" />
                        <i id='Login_show' ref="yincang1" className= 'iconfont icon-yincang1' onTouchStart={this.eyes.bind(this)}></i>
                        <i id='Login_showpas'  ref="showpas"  className= 'iconfont icon-cha' onTouchStart={this.qingkongPas.bind(this)}></i>
                    </div>
                    <p className="loginCode">验证码登陆</p>
                    <input type="button" className="login_btn" value="登 录" onTouchStart={this.loginHandler.bind(this)} />
                    <p><span className="rapidRegistration" ref='skipRegister' onTouchStart={this.skipback.bind(this)}>手机快速注册</span><span className="findPassword">找回密码</span></p>
                </form>
                <SpinnerComponent show={this.props.loading}/>        
            </div>
        
        )
    }
}

const mapStateToProps = state => ({
    loading: state.login.loading
})
export default connect(mapStateToProps, loginActions)(LoginComponent)
