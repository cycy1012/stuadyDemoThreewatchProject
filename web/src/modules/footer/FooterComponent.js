import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, hashHistory, Link, IndexRoute, browserhistory} from 'react-router'

import './Footer.scss'


class FooterComponent extends Component {
	render(){
		return(
			<footer className="footer_footer">
				<ul>
					<li><Link to="/"><i className="iconfont icon-shouyeshouye"></i><span>首页</span></Link></li>
					<li><Link to="category"><i className="iconfont icon-tubiao3"></i><span>分类</span></Link></li>
					<li><Link to="buycar"><i className="iconfont icon-gouwuche"></i><span>购物车</span></Link></li>
					<li><Link to="login"><i className="iconfont icon-wo"></i><span>我的</span></Link></li>
				</ul>
			</footer>
		)
	}
}

export default FooterComponent