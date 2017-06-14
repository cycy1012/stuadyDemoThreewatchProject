import React, {Component} from 'react'
// import {Router,Route,hashHistory,Link,IndexRoute,browserHistory} from 'React-Router'
var ReactRouter = require('react-router');
var {Router,Route,hashHistory,Link,IndexRoute,browserHistory} = ReactRouter;

import {connect} from 'react-redux'
import * as SearchActions from './SearchAction'
import erp from "../../utils/global"
import $ from '../listpage/jquery-3.1.1'
import "./Search.scss"



class SearchComponent extends Component{
	componentDidMount(){
		// 搜索栏先行一小点
		$('.searchText').focus()
		$('.sousuoWord').on('click',function(){
			let $value=$('.searchText').val();
			if ($value==='') {
				$value='无';
			}
			console.log($value)
			location.href=erp.localhost + 'index.html#/listPage' + '?keyword=' + $value
		}) 
	}
	render(){
		return(
			<div>
				<header className="search_header">
	        		<Link to="/"><div><i className="iconfont icon-fanhui "></i></div></Link>
	        		<input type="text" placeholder="请输入商品关键字" className="searchText"/>
	        		<span className="iconfont icon-sousuo_sousuo"></span>
	        		<div className="sousuo"><i className="sousuoWord">搜索</i></div>			
	        	</header>
	        	<main className="search_main">
	        		<div className="search_hot">热门搜索</div>
	        		<div className="search_hotWord">
	        			<span>真力时</span>
	        			<span>罗杰杜彼</span>
	        			<span>积家</span>
	        			<span>欧米茄</span>
	        		</div> 
	        	</main>
        	</div>
			
		)
	}
}


const mapStateToProps = state => ({
    
})

export default connect(mapStateToProps, SearchActions)(SearchComponent)