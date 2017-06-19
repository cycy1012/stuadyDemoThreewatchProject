import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, hashHistory, Link, IndexRoute, browserhistory} from 'react-router'

import './Footer.scss'


class FooterComponent extends Component {
	componentWillMount(){
		window.footIco = window.location.hash.slice(2)
	}
	componentDidMount(){
		switch(footIco){
			case "memberCenter":
			 	 this.refs.my.style.color="#d8b86f"
			 	 this.refs.my1.style.color="#d8b86f"
			 	 break
			case "buycar":
				this.refs.shopCart.style.color="#d8b86f"
				this.refs.shopCart1.style.color="#d8b86f"
			 	break 
			case "":
			 this.refs.home.style.color="#d8b86f"
			 this.refs.home1.style.color="#d8b86f"
			 break
			default:
				 this.refs.classify.style.color="#d8b86f"
				 this.refs.classify1.style.color="#d8b86f"
			break			
		}
		return
	}
	tiao(){
		if(sessionStorage.getItem('phone')){
			window.location.hash = 'memberCenter'
		}else{
			window.location.hash = 'login'
		}
	}
	
	render(){
		return(
			<footer className="footer_footer">
				<ul>

					<li><Link to="/"><i  ref="home" className="iconfont icon-shouyeshouye"></i><span ref="home1"  >首页</span></Link></li>
					<li><Link to="category"><i  ref="classify" className="iconfont icon-tubiao3"></i><span  ref="classify1">分类</span></Link></li>
					<li><Link to="buycar"><i  ref="shopCart" className="iconfont icon-gouwuche"></i><span  ref="shopCart1" >购物车</span></Link></li>
					<li onTouchStart={this.tiao.bind(this)}><i className="iconfont icon-wo" ref="my" ></i><span ref="my1"  >我的</span></li>
				</ul>
			</footer>
		)
	}
}

export default FooterComponent