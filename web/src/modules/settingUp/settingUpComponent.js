import React,{Component} from 'react'
import {connect} from 'react-redux'
// import SpinnerCommponent from '../spinner/SpinnerCommponent'
import './settingUp.scss'
import  {Router,Route,hashHistory,Link,IndexRoute,browserHistory} from 'react-router'


class MemberCenterSet extends Component{
	setExit(){
		sessionStorage.removeItem('phone')
		hashHistory.push('/login')
	}


	render(){
		return(
			<div className='settingUp'>
				<div className="setTop">
	                <p>设置
	                <a className="back" href="javascript:history.go(-1)"><i className="iconfont icon-fanhui"></i></a>
	                <Link to="/" className="homepage"><i className="iconfont icon-shouyeshouye"></i></Link>
	                </p>
           		 </div>					
				<div className="setmain">
					<p className="setTitle">关于名表汇<b>></b></p>
					<p className="setTitle">名表汇协议<b>></b></p>
				</div>
				<div className="setExit" onTouchStart={this.setExit.bind(this) }>
					退出登录
				</div>          	
			</div>
					
		
			)
	}
}

export default MemberCenterSet;