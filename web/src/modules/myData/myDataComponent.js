import React,{Component} from 'react'
import {connect} from 'react-redux'
import './myData.scss'
import DialogComponent from '../dialog/dialogComponent'
import  {Router,Route,hashHistory,Link,IndexRoute,browserHistory} from 'react-router'
class Mydata extends Component{
   	 constructor(props){
        super(props);
        this.state={
        	value:"男",
        	nicheng:""
        }
    }
	componentWillMount(){
	 	window.userName = sessionStorage.getItem('phone')
	 	this.setState({nicheng:window.userName})
	}
	openWindow(){
		this.refs.mydataChuang.style.display='block'
	}
	sexnan(event){
		this.setState({value:"男"});
		this.refs.mydataChuang.style.display='none'
	}
	sexnv(event){
		this.setState({value:"女"});
		this.refs.mydataChuang.style.display='none'
	}	
	nicheng(){

	}
	render(){
		return(
			<div className="mydata">
				<div className="setTop">
	                <p>个人中心
	                <a className="back" href="javascript:history.go(-1)"><i className="iconfont icon-fanhui"></i></a>
	                <Link to="/" className="homepage"><i className="iconfont icon-shouyeshouye"></i></Link>
	                </p>
           		 </div>
				<div className="setmain">
					<p className="setTitle">淘宝头像<b></b></p>
					<p className="setTitle">会员名<b>{window.userName}</b></p>
					<p className="setTitle">我的二维码名片<b></b></p>
					<p className="setTitle" onTouchStart={this.nicheng.bind(this)}>淘宝昵称<b>{this.state.nicheng}</b></p>
					<p className="setTitle" onTouchStart={this.openWindow.bind(this)}>性别<b>{this.state.value}</b></p>
					<p className="setTitle" onTouchStart={this.openWindow.bind(this)}>我<b></b></p>
				</div>
				<div className='chuang' ref='mydataChuang'>
					<div>
						<p className='xiu'>修改性别</p>
						<p onTouchStart={this.sexnan.bind(this)}>男</p>
						<p 	onTouchStart={this.sexnv.bind(this)}>女</p>
					</div>	

				</div>           		 				
			</div>

			)
	}
}

export default Mydata;