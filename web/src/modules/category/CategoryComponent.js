import React, {Component} from 'react'

import './Category.scss'

class CategoryComponent extends Component {
	render(){
		return(
			<div className="container">
				<header className="cate_header">
					<input type="text" placeholder="请输入商品关键字"/>
				</header>	
				<nav className="cate_nav">
					<h2><span>分类</span></h2>
					<h2><span>品牌</span></h2>
				</nav>
				<ul className="cate_classify clearfix">
					<li><div className="shade"></div><h2>男士腕表</h2></li>
					<li><div className="shade"></div><h2>男士腕表</h2></li>
					<li><div className="shade"></div><h2>男士腕表</h2></li>
				</ul>
			</div>
		)
	}
}

export default CategoryComponent