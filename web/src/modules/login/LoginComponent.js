
import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as loginActions from './LoginAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import './Login.scss'


// @connect(
//     state => ({
//         loading: state.login.loading
//     }),
//     loginActions
// )

class LoginComponent extends React.Component {
    constructor(props){
        super(props)
    }

    loginHandler(){
        // console.log(loginActions)
        // this.router.push('register')
        // if(!this.refs.username){
        //     //show up dialog => username cannot empty
        //     return
        // } else if(!this.refs.password){
        //     //show up dialog => password cannot empty
        //     return 
        // }
        
        this.props.login(this.refs.username.value, this.refs.password.value)
       console.log(this.props)
    }

    render(){
        return(
            <div className= 'loginScss'>
                <div className= 'loginTop'>名表汇登录</div>
                <div className= 'logoImg'><img src={require('../../static/styles/images/watchLogo.jpg')} alt=""/></div>
                <form>
                    <div>
                        <input type="text" className="phone" placeholder="请填写手机号" />
                        <hr/>
                        <input type="password" className="password" placeholder="请填写6-12位密码，包含字母和数字" />
                    </div>
                    <p className="loginCode">验证码登陆</p>
                    <input type="button" className="login_btn" value="登 录" />
                    <p><span className="rapidRegistration">手机快速注册</span><span className="findPassword">找回密码</span></p>
                </form>             
            </div>
        
        )
    }
}

const mapStateToProps = state => ({
    loading: state.register.loading
})
export default connect(mapStateToProps, loginActions)(LoginComponent)
// export default LoginComponent



                //  <div className="login">
                //     <ul>
                //         <li><input type="text" ref="username"/></li>
                //         <li><input type="text" ref="password"/></li>
                //         <li><input type="button" value="登录" onClick={this.loginHandler.bind(this)}/></li>
                //         <li>{this.props.loading + ''}</li>
                //     </ul>
                //     <SpinnerComponent show={this.props.loading}/>
                // </div>  
