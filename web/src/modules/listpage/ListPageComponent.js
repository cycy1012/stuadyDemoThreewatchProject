import React, {Component} from 'react'
import {connect} from 'react-redux'

import './ListPage.scss'
// import "../../static/styles/imgs/watch.png"
import FooterComponent from '../footer/FooterComponent'

class ListPage extends Component {
	render(){
		return(
			<div className="listPage">
				<header className="list_header">
					<a className="iconfont icon-fanhui" href="javascript:history.go(-1);"></a>
					<h1>所有产品</h1>
					<a className="iconfont icon-gouwuche"></a>
				</header>
				<div className="list_wrap">
				<nav className="list_nav">
					<i className="iconfont icon-sousuo_sousuo i_search"></i><input type="text" placeholder="请输入商品关键字"/>
				</nav>
				<div className="list_filter">
					<p>类别<i className="iconfont icon-30"></i></p>
					<p>品牌<i className="iconfont icon-30"></i></p>
					<p>排序<i className="iconfont icon-30"></i></p>
					<p>筛选<i className="iconfont icon-shaixuan"></i></p>
					<div className="filter-com filter-son0">
						<ul>
							<li>全部</li>
							<li>男士腕表</li>
							<li>女士腕表</li>
							<li>情侣腕表</li>
							<li>机械腕表</li>
						</ul>
					</div>
					<div className="filter-com filter-son1">
						<ul>
							<li>罗杰杜彼</li>
							<li>积家</li>
							<li>宝珀</li>
							<li>帝舵</li>
							<li>摩凡陀</li>
							<li>摩凡陀</li>
							<li>摩凡陀</li>
							<li>摩凡陀</li>
							<li>摩凡陀</li>
							<li>摩凡陀</li>
						</ul>
					</div>
					<div className="filter-com filter-son2">
						<ul>
							<li>价格降序</li>
							<li>销量</li>
						</ul>
					</div>
					<div className="filter-com filter-son3">
						<ul>
							<li>价格降序</li>
							<li>销量</li>
						</ul>
					</div>						
				</div>
				<div className="list_products">
					<ul className="clearfix">
						<li>
							<img src={require("../../static/styles/imgs/watch.png")} alt=""/>
							<h3>天梭 T095.417.11.067.00</h3>
							<div className="collect clearfix">
								<p className="price">2190.2</p>
								<p className="like"><i className="iconfont icon-xin"></i>115</p>
							</div>
						</li>
						<li>
							<img src={require("../../static/styles/imgs/watch.png")} alt=""/>
							<h3>天梭 T095.417.11.067.00</h3>
							<div className="collect clearfix">
								<p className="price">2190.2</p>
								<p className="like"><i className="iconfont icon-xin"></i>115</p>
							</div>
						</li>
						<li>
							<img src={require("../../static/styles/imgs/watch.png")} alt=""/>
							<h3>天梭 T095.417.11.067.00</h3>
							<div className="collect clearfix">
								<p className="price">2190.2</p>
								<p className="like"><i className="iconfont icon-xin"></i>115</p>
							</div>
						</li>										
					</ul>
				</div></div>
				<FooterComponent/>
			</div>

		)
	}
}

export default ListPage