import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, hashHistory, Link, IndexRoute, browserhistory} from 'react-router'
import $ from './jquery-3.1.1.js'

import './ListPage.scss'
// import "../../static/styles/imgs/watch.png"
import FooterComponent from '../footer/FooterComponent'
import SpinnerComponent from '../spinner/SpinnerComponent.js'

import * as ListPageActions from './listPageAction'
import erp from '../global.js'
// const baseUrl = 'http://10.3.133.50:8888/searchProduct';
class ListPageCompoennt extends Component {
	constructor(props){
		super(props);
		// this.state = {
		// 	sendAjaxFlat : true,
		// 	responseData :[]
		// }
	}

	//点击筛选的事件
	classify(targe){
		// this.props.filterDisplay(targe);
		// console.log('this', this.refs);
		// console.log('targe', targe);
		// console.log(this.refs.filter_son0)
		for(let attr in this.refs){
			if(attr === targe){
				this.props.filterDisplay(this.refs[attr],targe);
			}
		}
		// switch(targe){
		// 	case 'filter_son0':
		// 		this.props.filterDisplay(this.refs.filter_son0);
		// 		break;
		// 	case 'filter_son1':
		// 		this.props.filterDisplay(this.refs.filter_son1);
		// 		break;				
		// 	case 'filter_son2':
		// 		this.props.filterDisplay(this.refs.filter_son2);
		// 		break;				
		// 	case 'filter_son3':
		// 		this.props.filterDisplay(this.refs.filter_son3);
		// 		break;				
		// }
	}
	//组件加载前执行
	componentWillMount(){
		this.sendAjaxGetProducts();
		// console.log(responseData);
		// this.props.getProducts().then(response => {
		// 	console.log(response);
  //           // if(response.body.status){
  //           //     hashHistory.push('/login')
  //           // }else{
  //           //     console.log("用户名已经注册")
  //           // }
  //       })
	}

	componentDidMount(){
		// console.log(document.getElementById('list'));
		console.log(this.props.location.query,'===');
	}
	componentWillUpdate(){
		console.log('Will Updata');
 		document.getElementById('list').append(this.props.listProducts.map(function(item, index){
			// console.log(item);
			return (
				<li><Link to={"/details?id=" + item.addtime}>
					<img src={"https://www.watchvip.cn/" + item.appthumb} alt=""/>
					<h3>{item.name}</h3>
					<div className="collect clearfix">
						<p className="price">{item.goods_price}</p>
						<p className="like"><i className="iconfont icon-xin"></i>{item.click}</p>
					</div>
				</Link></li>
			)
		}));	
		console.log(this.props.listProducts);
		// document.getElementById('list').append(aa);
	}
	//发送请求获取商品列表
	sendAjaxGetProducts(){
		let keyword = this.props.location.query.keyword;
		$.ajax({
			url : erp.baseUrl + 'searchProduct',
			dataType : 'json',
			type : 'post',
			data : {page : this.props.ajaxPage , classify : keyword},
			beforeSend:function(){
				this.props.getProducts('before', {}, this.props.sendAjaxFlat);
			}.bind(this),
			success:function(response){	
				console.log(response)
				this.props.getProducts('success', response, this.props.sendAjaxFlat);		
			}.bind(this),
			error:function(){
				this.props.getProducts('error', {}, this.props.sendAjaxFlat);
			}.bind(this)
		});		
        // this.props.getProducts(this.props.ajaxPage).then(
        //     response =>{
        //    		console.log(response)
        // })
	}
	onScrollHandle(){
		var wrapScrollTop = this.refs.wrap.scrollTop;
		var wrapOffsetHieght = this.refs.list.offsetHeight;
		var windowInnerHeight = window.innerHeight;
		if((wrapScrollTop >= (wrapOffsetHieght - windowInnerHeight - 10)) && this.props.sendAjaxFlat){
			this.sendAjaxGetProducts()
		}
		// console.log(wrapScrollTop,windowInnerHeight,wrapOffsetHieght)
	}

	render(){
		return(
			<div className="listPage">
				<header className="list_header">
					<a className="iconfont icon-fanhui" href="javascript:history.go(-1);"></a>
					<h1>所有产品</h1>
					<a className="iconfont icon-gouwuche"></a>
				</header>
				<div className="list_wrap" onScroll = {this.onScrollHandle.bind(this)} ref="wrap">
				<nav className="list_nav">
					<i className="iconfont icon-sousuo_sousuo i_search"></i><input type="text" placeholder="请输入商品关键字"/>
				</nav>
				<div className="list_filter">
					<p onClick = {this.classify.bind(this, 'filter_son0')}>类别<i className="iconfont icon-30"></i></p>
					<p onClick = {this.classify.bind(this, 'filter_son1')}>品牌<i className="iconfont icon-30"></i></p>
					<p onClick = {this.classify.bind(this, 'filter_son2')}>排序<i className="iconfont icon-30"></i></p>
					<p onClick = {this.classify.bind(this, 'filter_son3')}>筛选<i className="iconfont icon-shaixuan"></i></p>
					<div className="filter-com filter-son0" style={{display : this.props.filter_son0?'block':'none'}} ref="filter_son0">
						<ul>
							<li>全部</li>
							<li>男士腕表</li>
							<li>女士腕表</li>
							<li>情侣腕表</li>
							<li>机械腕表</li>
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
								// console.log(item);
								return (
								<li><Link to={"/details?_id=" + item._id}>
									<img src={erp.uploadUrl + item.preview} alt=""/>
									<h3>{item.name}</h3>
									<div className="collect clearfix">
										<p className="price">{item.goods_price}</p>
										<p className="like"><i className="iconfont icon-xin"></i>{item.click}</p>
									</div>
								</Link></li>	)			
							})
							
						}
						{/*<li><Link to="/?name=aa">
							<img src="https://www.watchvip.cn/upload/img/goods/20170506/5e4523386d654f046c3354c6ceabbfa4_s.jpg" alt=""/>
							<h3>天梭 T095.417.11.067.00</h3>
							<div className="collect clearfix">
								<p className="price">2190.2</p>
								<p className="like"><i className="iconfont icon-xin"></i>115</p>
							</div></Link>
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
						</li>*/}										
					</ul>
				</div></div>
				<SpinnerComponent show={this.props.show}/>
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
	sendAjaxFlat: state.listPage.sendAjaxFlat
})
export default connect(mapStateToProps, ListPageActions)(ListPageCompoennt)