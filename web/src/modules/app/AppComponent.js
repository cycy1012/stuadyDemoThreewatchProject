import React, {Component} from 'react'
// import {Router,Route,hashHistory,Link,IndexRoute,browserHistory} from 'React-Router'
var ReactRouter = require('react-router');
var {Router,Route,hashHistory,Link,IndexRoute,browserHistory} = ReactRouter;
import $ from '../listpage/jquery-3.1.1.js'
import {connect} from 'react-redux'

import "./App.scss"
import * as AppActions from './AppAction.js'
import FooterComponent from '../footer/FooterComponent.js'
import BannerComponent from '../banner/BannerComponent'
import XianshiComponent from '../app/XianshiComponent'
import pic1 from '../../static/imgs/1.png'
import pic2 from '../../static/imgs/2.png'
import erp from "../../utils/global"



class AppComponent extends Component{
	// contructor(props){
	// 	super(props)
	// 	this.state={
	// 		return {
	// 			timer:null
	// 		}
	// 	}
	// }
	onScrollHandler(){
		this.props.backToTopStatus(this.refs.app_main.scrollTop)
	}
	backtotopfn(){
		// 当前滚动条 滚动距离
		let Height = this.props.height
		setTimeout(function(){
			var timer = setInterval(function(){
				let speed = Math.ceil(Height/5)
				let _scrollTop = Height - speed
				if(_scrollTop <= 20){
					clearInterval(timer)
					_scrollTop = 0
				}
				this.refs.app_main.scrollTop=_scrollTop
				Height=this.refs.app_main.scrollTop
			}.bind(this),30)
		}.bind(this),50)
	}
	componentDidMount(){
		hashHistory.push('appRenqi')

	// 实现左上角功能
		$('.hengmian').click(function(){
			$('.app_aside').animate({width:'81.25%'}).show()
			$('.app_container').animate({left:'81.25%'})
			$('.app_aside_mask').show().animate({left:'81.25%',opacity:0.7})
		})
		$('.app_aside_mask').click(function(){
			$('.app_aside').animate({width:0},function(){
				$('.app_aside').hide()
			})
			$('.app_container').animate({left:0})
			$('.app_aside_mask').animate({left:0,opacity:0},function(){
				$('.app_aside_mask').hide()
			})
		})

	}
	


    render(){
        return (
        	<div className="fenlan">
        		<aside className="app_aside">
            		<div className="app_aside_one">
            			<Link to="/login">
	            			<div className="app_aside_img"><img src={require('../../static/imgs/4.png')} /></div>
	            			<p>请点击登陆</p>
            			</Link>
            		</div>
            		<div className="app_aside_two">
						<div>
							<Link to={"listPage?keyword=男"}><p className="app_aside_nanshi">男士腕表<span>></span></p></Link>
						</div>
						<div>
							<Link to={"listPage?keyword=女"}><p className="app_aside_nvshi">女士腕表<span>></span></p></Link>
						</div>
						<div>
							<Link to={"listPage?keyword=情侣"}><p className="app_aside_qinglv">情侣腕表<span>></span></p></Link>
						</div>
						<div>
							<Link to={"listPage?keyword=机械"}><p className="app_aside_jixie">机械腕表<span>></span></p></Link>
						</div>
            		</div>
            	</aside>
            	<aside className="app_aside_mask">
            	</aside>
            	<div className="app_container">
            		<header className="app_header" >
	            		<div><i className="iconfont icon-fenlei hengmian"></i></div>
	            		<Link to="/search"><input type="text" placeholder="请输入商品关键字"/></Link>
	            		<span className="iconfont icon-sousuo_sousuo"></span>			
	            	</header>
	            	<main className="app_main" ref="app_main" onScroll={this.onScrollHandler.bind(this)} style={{height:this.props.height}}>
	            		<div className="backToTop" ref="backTop" onClick={this.backtotopfn.bind(this)} style={{display:this.props.display}}><span className="iconfont icon-fanhuidingbu"></span></div>

	            		<BannerComponent/>

		            	<div className="linkPic"><Link to=""><img src={require('../../static/imgs/3.png')} alt="" /></Link></div>
		            	<div className="ToSnapUp">
		            		<Link to="" className="ToSnapUp_link">
		            			<h3>限时抢购</h3>
		            			<p>
		            				<span></span>
		            				<span></span>
		            				<span></span>
		            				<span></span>		
		            			</p>
		            			<span className="iconfont icon-iconfontright"></span>	
		            		</Link>
		            		<div className="recommend">

								<XianshiComponent/>

		            		</div>
		            	</div>
		        		<div className="watchOption">
							<div>
								<Link to="" className="watch_Option watch_Option1">
									<span>男表</span>
									<span>MEN</span>
								</Link>
							</div>
							<div>
								<Link to="" className="watch_Option watch_Option2">
									<span>女表</span>
									<span>WOMEN</span>
								</Link>
							</div>
							<div>
								<Link to="" className="watch_Option watch_Option3">
									<span>机械表</span>
									<span>MECHANICS</span>
								</Link>
							</div>
							<div>
								<Link to="" className="watch_Option watch_Option4">
									<span>石英表</span>
									<span>QUARTZ</span>
								</Link>
							</div>
							<span className="midMask"></span>
		        		</div>
		            	<div className="series-watch">
		            		<div className="series_bigPicture">
		            			<Link to=""><img src={require('../../static/imgs/9.png')} alt="" /></Link>
		            		</div>
		            		<ul>
		            			<li><Link to=""><img src={require('../../static/imgs/4.png')} /></Link></li>
		            			<li><Link to=""><img src={require('../../static/imgs/4.png')} /></Link></li>
		            			<li><Link to=""><img src={require('../../static/imgs/4.png')} /></Link></li>
		            		</ul>
		            		<div className="series_title">
		            			<h4 className="series_title_h4">星座系列</h4>
		            		</div>
		            	</div>
		            	<article className="app_article">
		            		<div className="app_article_title">
		            			<ul>
		            				<li><Link to="appRenqi"  className="renqi">人气</Link></li>
		            				<li><Link to="appQuanxin">全新</Link></li>
		            				<li><Link to="appXihuan">喜欢</Link></li>
		            			</ul>	
		            		</div>
						{this.props.children}
		            	</article>	
	            	</main>
	            	<FooterComponent/>
            	</div>
            	
            </div>
        )
    }
}


// ES5 ，后面改

const mapStateToProps = state => ({
    display: state.app.display,
    height:state.app.height
})

export default connect(mapStateToProps, AppActions)(AppComponent)



