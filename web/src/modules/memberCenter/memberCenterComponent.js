import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as memberCenterActions from './memberCenterAction'
// import SpinnerCommponent from '../spinner/SpinnerCommponent'
import './memberCenter.scss'
import BackgroundTop from '../../static/styles/images/watchPic.jpg'
import MemberHead from '../../static/styles/images/memberLogo.jpg'

class MemberCenterActions extends Component{
	constructor(props){
        super(props);
       
    }	
	MemberClose(){
		console.log(this.refs.bottom_close.style.display)
		this.refs.bottom_close.style.display="none";
	}
	render(){
		return (
			<div id="container">
				<header className= 'header_main'>
					<div className="title clearfix">
						<img src={BackgroundTop} alt=""/>
						<div className="memberSet">
								设置
						</div>
						<div className= 'headPic'>
							<img src={MemberHead} alt=""/>
						</div>
					</div>
				</header>
				<main className='member_main'>	
					<div className='user-behavior clearfix'>
						<ul>
							<li><a><p>0</p><p>收藏宝贝</p></a></li>
							<li><a ><p>0</p><p>收藏店铺</p></a></li>
							<li><a ><p>0</p><p>我的足迹</p></a></li>
						</ul>
					</div>			
					<div className="myOrder">
						<div className="orderTop clearfix">
							<span>我的订单</span>
							<span>></span>
							<span>查看我的全部订单</span>
						</div>
						<div className="orderTab">
							<div className="daifukuan">
								<span className="iconfont icon-daifukuan"></span>
								<p>待付款</p>
							</div>
							<div className="daifahuo">
								<span className="iconfont icon-ziyuan"></span>
								<p>待发货</p>
							</div>
							<div className="daishouhuo">
								<span className="iconfont icon-jinlingyingcaiwangtubiao59"></span>
								<p>待收货</p>
							</div>
							<div className="daipinjia">
								<span className="iconfont icon-daipingjia"></span>
								<p>待评价</p>
							</div>		
							<div className="daituikuan">
								<span className="iconfont    icon-zhengzaijiazai01"></span>
								<p>退款/售后</p>
							</div>
						</div>
					</div>
					<div className="myData clearfix">
						<div>
							<span className="iconfont icon-wo"></span>
						</div>
						<div>
							<span className="word">我的资料</span>
						</div>
						<div id="gt">
							<span>></span>
						</div>
					</div>
					<div className="carlist">
						<div className="myCarList clearfix">
							<div>
								<span className="iconfont icon-gouwuche"></span>
							</div>
							<div>
								<span className="word">我的购物车</span>
							</div>
							<div id="gt">
								<span>></span>
							</div>
						</div>
					</div>
					<div className="carlist">
						<div className="myCarList clearfix">
							<div>
								<span className="iconfont icon-wodezuji"></span>
							</div>
							<div>
								<span className="word">我的</span>
							</div>
							<div id="gt">
								<span>></span>
							</div>
						</div>
					</div>
					<div className="copyright">
						<p>版权所有 ©名表汇 </p>
					</div>
				</main>
				<footer className= 'footer_main'>
						<div></div>
						<div className="quit"><a href="">退出</a></div>
						<div className="fankui"><a href="">意见反馈</a></div>
						<div className="computer"><a href="">电脑版</a>
						</div>
				</footer>
				<div className='ad' ref='bottom_close'>
					<span><i  id='btnClose' className='iconfont icon-cha' onClick={this.MemberClose.bind(this)}></i><i className='iconfont icon-shoubiao' id='btnLogo'></i></span>
					<span className= 'fontWord'>登录客户端，转领神秘好礼 ！</span>
					<div className= 'lingqu'>立即领取</div>
				</div>
		</div>
		)
	}
}


// const mapStateToProps = state => ({
//     loading: state.register.loading
// })
// export default connect(mapStateToProps, loginActions)(LoginComponent)
export default MemberCenterActions;