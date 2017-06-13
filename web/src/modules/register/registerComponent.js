
import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as RegisterActions from './registerAction'
import  {Router,Route,hashHistory,Link,IndexRoute,browserHistory} from 'react-router';
import SpinnerComponent from '../spinner/SpinnerComponent'
import Layer from '../../static/styles/Layui/layui/layui.js'
import LayerCss from '../../static/styles/Layui/layui/css/layui.mobile.css'
import './register.scss'
 

// @connect(
//     state => ({
//         loading: state.login.loading
//     }),
//     loginActions
// )

class RegisterComponent extends Component {
  
     constructor(props){
        super(props)
    }

    registerHandler(){
        // this.router.push('register')
        console.log(this.refs.username)
        if(!this.refs.username.value){
            alert("请输入用户名");
            return
        } else if(!this.refs.password.value||!this.refs.password2.value){
             alert("请输入密码")
            return 
        }else if(!(this.refs.password.value==this.refs.password2.value)){
                alert("两次输入的密码不一样")
        }else{
            this.props.register(this.refs.username.value, this.refs.password.value).then(response => {
                if(response.body.status){
                    hashHistory.push('/login')
                }else{
                    alert('用户名已经注册')
                }
            })
        }
              
    }
    backLogin(){
        window.history.go(-1)
    }
    regUser(){
        console.log(999)
    }
    render(){
        return(
            <div className= 'registerScss'>
                <div className= 'registerTop'><span  className='iconfont  icon-fanhui' onTouchStart={this.backLogin.bind(this)}></span>名表汇注册</div>
                <div className='registerMesg'>为了你的账户信息安全请填写一个手机号完成验证</div>
                <form>
                	<div>
						<input type="text" className="phone" placeholder="请填写手机号" ref='username' onChange={this.regUser.bind(this)}/>
						<input type="password" className="password" placeholder="请填写6-12位密码，包含字母和数字" ref='password' />
						<input type="password" className="password2" placeholder="确认密码" ref='password2'  />
					</div>
					<p>注册既视为同意<span><a>《用户注册协议》</a></span></p>
					<input type="button" className="register_btn" value="注册" onClick={this.registerHandler.bind(this)}/>
		        </form>             
            </div>
        
        )
    }
}

const mapStateToProps = state => ({
    loading: state.register.loading,
    data:state.register.data
})
export default connect(mapStateToProps, RegisterActions)(RegisterComponent)
