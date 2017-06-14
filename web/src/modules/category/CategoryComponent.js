import React, {Component} from 'react'
import {Router, Route, hashHistory, Link, IndexRoute, browserhistory} from 'react-router'

import './Category.scss'
import FooterComponent from '../footer/FooterComponent'

class CategoryComponent extends Component {
	render(){
		return(
			<div className="cate_wrap">
				<header className="cate_header">
					<input type="text" placeholder="请输入商品关键字"/>
				</header>	
				<nav className="cate_nav">
					<h2><span>分类</span></h2>
					<h2><span>品牌</span></h2>
				</nav>
				<ul className="cate_classify clearfix">
					<li><Link to="/listPage?keyword=男表"><img src={require('../../static/styles/imgs/nanshi.jpg')} alt=""/><div className="shade"></div><h2>男士腕表</h2></Link></li>
					<li><Link to="/listPage?keyword=女"><img src={require('../../static/styles/imgs/nvshi.jpg')} alt=""/><div className="shade"></div><h2>女士腕表</h2></Link></li>
					<li><Link to="/listPage?keyword=情侣"><img src={require('../../static/styles/imgs/qinglv.jpg')} alt=""/><div className="shade"></div><h2>情侣腕表</h2></Link></li>
					<li><Link to="/listPage?keyword=机械"><img src={require('../../static/styles/imgs/jixie.jpg')} alt=""/><div className="shade"></div><h2>机械腕表</h2></Link></li>
				</ul>
				<FooterComponent></FooterComponent>
			</div>
		)
	}
}

export default CategoryComponent