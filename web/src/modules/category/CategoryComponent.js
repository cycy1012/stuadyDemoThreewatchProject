import React, {Component} from 'react'

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
					<li><img src={require('../../static/styles/imgs/nanshi.jpg')} alt=""/><div className="shade"></div><h2>男士腕表</h2></li>
					<li><img src={require('../../static/styles/imgs/nanshi.jpg')} alt=""/><div className="shade"></div><h2>男士腕表</h2></li>
					<li><img src={require('../../static/styles/imgs/nanshi.jpg')} alt=""/><div className="shade"></div><h2>男士腕表</h2></li>
					<li><img src={require('../../static/styles/imgs/nanshi.jpg')} alt=""/><div className="shade"></div><h2>男士腕表</h2></li>
				</ul>
				<FooterComponent></FooterComponent>
			</div>
		)
	}
}

export default CategoryComponent