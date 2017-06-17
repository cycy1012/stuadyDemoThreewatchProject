import React, {Component} from 'react'
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'


import './Category.scss'
import erp from '../global.js'
import FooterComponent from '../footer/FooterComponent'

class CategoryComponent extends Component {
	constructor(props){
		super(props);
		this.state = {
			spanClassName1:'active',
			spanClassName2:''
		}
	}

	//搜索事件
	search(event){
		if(event.keyCode === 13){
			let val = this.refs.input.value;
			hashHistory.push('listPage?keyword=' + val);			
		}	
	}
	
	//Tab标签 切换路由和标签颜色
	tabChange(event){
		event.stopPropagation();
		//确认元素只获取h2
		let target = event.target.tagName.toLowerCase() === 'h2' ? event.target : event.target.parentElement;
		//target为需要跳转的目标(路由)
		target = target.className;
		hashHistory.push('/category/' + target);
		//获取pathname用于tab标签颜色切换
		let pathname = this.props.location.pathname;
		//匹配标签
		let Reg = new RegExp(target);
		if(Reg.test('overall')){
			this.setState({spanClassName1: 'active', spanClassName2: ''});
		}else if(Reg.test('brand')){
			this.setState({spanClassName1: '', spanClassName2: 'active'});
		}
	}

	render(){
		return(
			<div className="cate_wrap">
				<header className="cate_header">
					<input type="text" placeholder="请输入商品关键字" onKeyDown={this.search.bind(this)} ref="input"/>
				</header>	
				<nav className="cate_nav">
					<h2 onTouchStart={this.tabChange.bind(this)} className="overall"><span className={this.state.spanClassName1}>分类</span></h2>
					<h2 onTouchStart={this.tabChange.bind(this)} className="brand"><span className={this.state.spanClassName2}>品牌</span></h2>
				</nav>
				{this.props.children}
				<FooterComponent></FooterComponent>
			</div>
		)
	}
}

export default CategoryComponent