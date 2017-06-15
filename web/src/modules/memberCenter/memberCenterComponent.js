import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as memberCenterActions from './memberCenterAction'
// import SpinnerCommponent from '../spinner/SpinnerCommponent'
import './memberCenter.scss'
import  {Router,Route,hashHistory,Link,IndexRoute,browserHistory} from 'react-router'
import FooterComponent from '../footer/FooterComponent.js'
import BackgroundTop from '../../static/styles/images/watchPic.jpg'
import MemberHead from '../../static/styles/images/memberLogo.jpg'

class MemberCenterActions extends Component{
	constructor(props){
        super(props);
    }	
	MemberClose(){
		this.refs.bottom_close.style.display="none";
	}
	dingdan(){
		  window.location.hash = 'orderpage'
	}
	shopCart(){
		window.location.hash = 'buycar'
	}
	xinxi(){
		window.location.hash= 'login'
	}
	render(){
		return (
			<div>
			<div id="container">
				<header className= 'header_main'>
					<div className="title clearfix">
						<Link to='settingUp'>
							<div className="memberSet">
									设置
							</div>
						</Link>	
						<div className= 'headPic'>
							<img src={MemberHead} alt=""/>
							<div className="user">dfdsafsa

							</div>						
						</div>
						<div className='user-behavior clearfix'>
							<ul>
								<li><a><p>0</p><p className='baby'>收藏宝贝</p></a></li>
								<li><a ><p>0</p><p className='baby'>收藏店铺</p></a></li>
								<li><a ><p>0</p><p className='baby' id='babyboder'>我的积分</p></a></li>
							</ul>
					</div>						
					</div>
				</header>
				<main className='member_main'>	
								
					<div className="myOrder">
						<div className="orderTop clearfix" onTouchStart={this.dingdan.bind(this)}>
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
					<div className="myData clearfix" onTouchStart={this.xinxi.bind(this)}>
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
					<div className="carlist" onTouchStart={this.shopCart.bind(this)}>
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
								<span className="iconfont icon-quanbudingdan"></span>
							</div>
							<div>
								<span className="word">我的浏览</span>
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
								<span className="word">我的足迹</span>
							</div>
							<div id="gt">
								<span>></span>
							</div>
						</div>
					</div>
					<div className="carlist">
						<div className="myCarList clearfix">
							<div>
								<span className="iconfont icon-xiaolvdashiicon02-copy-copy"></span>
							</div>
							<div>
								<span className="word">帮助中心</span>
							</div>
							<div id="gt">
								<span>></span>
							</div>
						</div>
					</div>									
				</main>

				<div className='ad' ref='bottom_close'>
					<span><i  id='btnClose' className='iconfont icon-cha' onClick={this.MemberClose.bind(this)}></i><i className='iconfont icon-shoubiao' id='btnLogo'></i></span>
					<span className= 'fontWord'>登录客户端，转领神秘好礼 ！</span>
					<div className= 'lingqu'>立即领取</div>
				</div>
				

		</div>
		<FooterComponent/>
		</div>
		)
	}
}


// const mapStateToProps = state => ({
//     loading: state.register.loading
// })
// export default connect(mapStateToProps, loginActions)(LoginComponent)
export default MemberCenterActions;