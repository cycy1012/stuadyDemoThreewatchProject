import React, {Component} from 'react'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import $ from './jquery-3.1.1.js'

import './ListPage.scss'
import FooterComponent from '../footer/FooterComponent'
import SpinnerComponent from '../spinner/SpinnerComponent'

import * as ListPageActions from './listPageAction'
import erp from '../../utils/global.js'

class ListPageCompoennt extends Component {
	constructor(props){
		super(props);
		this.state = {
			sendAjaxFlat : true,
			responseData :[]
		}
	}
	componentWillMount(){
		let keyword = this.props.location.query.keyword;
		this.sendAjaxGetProducts(keyword, true);
		// console.log(responseData);
		// this.props.getProducts().then(response => {
		// 	console.log(response);
		//})
	}
	componentWillUpdate(){
		console.log('Component Will Updata');
	}

	//发送请求获取商品列表
	sendAjaxGetProducts(keyword, wipeCache){
		// let keyword = this.props.location.query.keyword;
		$.ajax({
			url : erp.baseUrl + 'searchProduct',
			dataType : 'json',
			type : 'post',
			data : {page : this.props.ajaxPage , classify : keyword},
			beforeSend:function(){
				this.props.getProducts('before', {}, this.props.sendAjaxFlat, wipeCache);
			}.bind(this),
			success:function(response){	
				this.props.getProducts('success', response, this.props.sendAjaxFlat, this.props.wipeCache);		
			}.bind(this),
			error:function(){
				this.props.getProducts('error', {}, this.props.sendAjaxFlat, this.props.wipeCache);
			}.bind(this)
		});		
        // this.props.getProducts(this.props.ajaxPage).then(
        //     response =>{
        //    		console.log(response)
        // })
	}

	//点击筛选的事件
	classify(targe){
		for(let attr in this.refs){
			if(attr === targe){
				this.props.filterDisplay(this.refs[attr],targe);
			}
		}
	}

	//页面滚动事件
	onScrollHandle(){
		let wrapScrollTop = this.refs.wrap.scrollTop;
		let wrapOffsetHieght = this.refs.list.offsetHeight;
		let windowInnerHeight = window.innerHeight;
		if((wrapScrollTop >= (wrapOffsetHieght - windowInnerHeight - 10)) && this.props.sendAjaxFlat){
			let keyword = this.props.location.query.keyword;
			this.sendAjaxGetProducts(keyword, false)
		}
	}

	//搜索事件
	search(text){
		var val;
		if(typeof(text) === "string"){
			val = text;
			if(text === "全部"){
				val = "";
			}
		}else{
			val = this.refs.input.value;
		}
		hashHistory.push('/listPage?keyword=' + val);
		this.sendAjaxGetProducts(val, true)
	}

	//筛选
	select(event){
		let text = event.target.innerHTML;
		this.search(text);
		// console.log();
	}

	render(){
		return(
			<div className="listPage">
				<header className="list_header">
					<a className="iconfont icon-fanhui" href="javascript:history.go(-1);"></a>
					{/*<h1>所有产品</h1>*/}
					<nav className="list_nav">
						<i className="iconfont icon-sousuo_sousuo i_search" onTouchStart={this.search.bind(this)}></i>
						<input type="text" placeholder="请输入商品关键字" ref="input"/>
					</nav>
					<a className="iconfont icon-gouwuche" href="#/buycar"></a>
				</header>
				<div className="list_wrap" onScroll = {this.onScrollHandle.bind(this)} ref="wrap">
				{/*<nav className="list_nav">
					<i className="iconfont icon-sousuo_sousuo i_search" onTouchStart={this.search.bind(this)}></i><input type="text" placeholder="请输入商品关键字" ref="input"/>
				</nav>*/}
				<div className="list_filter">
					<p onTouchStart = {this.classify.bind(this, 'filter_son0')}>类别<i className="iconfont icon-30"></i></p>
					<p onTouchStart = {this.classify.bind(this, 'filter_son1')}>品牌<i className="iconfont icon-30"></i></p>
					<p onTouchStart = {this.classify.bind(this, 'filter_son2')}>排序<i className="iconfont icon-30"></i></p>
					<p onTouchStart = {this.classify.bind(this, 'filter_son3')}>筛选<i className="iconfont icon-shaixuan"></i></p>
					<div className="filter-com filter-son0" style={{display : this.props.filter_son0?'block':'none'}} ref="filter_son0">
						<ul>
							<li onTouchStart={this.select.bind(this)}>全部</li>
							<li onTouchStart={this.select.bind(this)}>男士腕表</li>
							<li onTouchStart={this.select.bind(this)}>女士腕表</li>
							<li onTouchStart={this.select.bind(this)}>情侣腕表</li>
							<li onTouchStart={this.select.bind(this)}>机械腕表</li>
						</ul>
					</div>
					<div className="filter-com filter-son1" style={{display : this.props.filter_son1?'block':'none'}} ref="filter_son1">
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
					<div className="filter-com filter-son2" style={{display : this.props.filter_son2?'block':'none'}} ref="filter_son2">
						<ul>
							<li>价格降序</li>
							<li>销量</li>
						</ul>
					</div>
					<div className="filter-com filter-son3" style={{display : this.props.filter_son3?'block':'none'}} ref="filter_son3">
						<ul>
							<li>空</li>
							<li>建设中</li>
						</ul>
					</div>						
				</div>
				<div className="list_products" ref="list" id="list">
					<ul className="clearfix">
						{
							this.props.listProducts.map(function(item, index){
								//遍历商品列表
								return(
								<li><Link to={{pathname: "/details", query: {_id: item._id}}}>
									<img src={erp.uploadUrl + item.preview} alt=""/>
									<h3>{item.name}</h3>
									<div className="collect clearfix">
										<p className="price">{item.price}</p>
										<p className="like"><i className="iconfont icon-xin"></i>{item.sale_number}</p>
									</div>
								</Link></li>)			
							})	
						}										
					</ul>
				</div></div>
				<SpinnerComponent show={this.props.loading}/>
				<FooterComponent/>
			</div>
		)
	}
}

const mapStateToProps = state =>({
	filter_son0: state.listPage.filter_son0,
	filter_son1: state.listPage.filter_son1,
	filter_son2: state.listPage.filter_son2,
	filter_son3: state.listPage.filter_son3,
	loading: state.listPage.loading,
	listProducts: state.listPage.listProducts,
	ajaxPage: state.listPage.ajaxPage,
	sendAjaxFlat: state.listPage.sendAjaxFlat,
	wipeCache: state.listPage.wipeCache
})
export default connect(mapStateToProps, ListPageActions)(ListPageCompoennt)