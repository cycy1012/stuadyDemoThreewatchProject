import React, {Component} from 'react'
import {connect} from 'react-redux'

import './Footer.scss'


class FooterComponent extends Component {
	render(){
		return(
			<footer className="footer_footer">
				<ul>
					<li><i className="iconfont icon-shouyeshouye"></i><span>首页</span></li>
					<li><i className="iconfont icon-tubiao3"></i><span>分类</span></li>
					<li><i className="iconfont icon-gouwuche"></i><span>购物车</span></li>
					<li><i className="iconfont icon-xiaoxi"></i><span>消息</span></li>
					<li><i className="iconfont icon-wo"></i><span>我的</span></li>
				</ul>
			</footer>
		)
	}
}

export default FooterComponent