
import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as RegisterActions from './registerAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import './register.scss'


// @connect(
//     state => ({
//         loading: state.login.loading
//     }),
//     loginActions
// )

class RegisterComponent extends React.Component {
  
     constructor(props){
        super(props)
    }

    registerHandler(){
        // console.log(registerActions)
        // this.router.push('register')
        // if(!this.refs.username){
        //     //show up dialog => username cannot empty
        //     return
        // } else if(!this.refs.password){
        //     //show up dialog => password cannot empty
        //     return 
        // }
        
        this.props.register(this.refs.username.value, this.refs.password.value)
       console.log(this.props)
    }
    render(){
        return(
            <div className= 'registerScss'>
                <div className= 'registerTop'><span  className='iconfont  icon-fanhui'></span>名表汇注册</div>
                <div className='registerMesg'>为了你的账户信息安全请填写一个手机号完成验证</div>
                <form>
                	<div>
						<input type="text" className="phone" placeholder="请填写手机号" />
						<input type="password" className="password" placeholder="请填写6-12位密码，包含字母和数字"/>
						<input type="password" className="password2" placeholder="确认密码" />
					</div>
					<p>注册既视为同意<span><a>《用户注册协议》</a></span></p>
					<input type="button" className="register_btn" value="注册"/>
		        </form>             
            </div>
        
        )
    }
}

const mapStateToProps = state => ({
    loading: state.register.loading
})
export default connect(mapStateToProps, RegisterActions)(RegisterComponent)
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
	// javescript:history.go(-1)