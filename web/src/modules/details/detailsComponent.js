import React ,{Component} from 'react'
import {connect} from 'react-redux'
import  {Router,Route,hashHistory,Link,IndexRoute,browserHistory} from 'react-router'
import SpinnerComponent from '../spinner/SpinnerComponent'
import * as DetailsAction from './detailsAction'

import erp from '../global.js'
import $ from '../listpage/jquery-3.1.1.js'


import './details.scss'

class DetailsComponent extends Component{
	constructor(props){
        super(props);
        this.state={
        	data:{},
        	num:1,
        	opacity:0,
        	display:'none',
        	session :[]
        }
    }
    componentWillMount(){

		window.headerIco = window.location.hash.slice(10)
	
		window.data_name = this.props.location.query._id;

		this.props.ajaxDetail(data_name).then(response=>{
			window.data = response.body[0];
			this.setState({data: data});	
		});
	}
    blockWindow(){
    	let opacity = this.state.opacity;
    	let display = this.state.display
    	let timer = setInterval(function(){
    		opacity += 0.1;
    		if (opacity >= 1) {
    			clearInterval(timer)
    		}
    	this.setState({opacity:opacity,display:'block'})
    	}.bind(this),30)
    }
    noneWindow(){
    	let opacity = this.state.opacity;
    	let display = this.state.display
    	let timer = setInterval(function(){
    		opacity -= 0.1;
    		if (opacity <= 0) {
    			clearInterval(timer)
    			this.setState({display:'none'})
    		}
    	this.setState({opacity:opacity})
    	}.bind(this),30)
    }
    addNum(){
    	let num = this.state.num;
    	num++;
    	this.setState({num:num})
    }
    reduceNum(){
    	let num = this.state.num;
    	num--;
    	if (num <=1) {
    		num=1;
    	}
    	this.setState({num:num})
    }
    session(){
    	let obj = {};
    
		let session = this.state.session;
    	obj._id = data._id;
    	obj.name = data.name;
    	obj.price = data.price;
    	obj.preview = data.preview;
    	obj.qty = this.state.num;
    	session.push(obj)

    	if (session.length>=2) {
    		session.shift()
    	}

    	window.sessionStorage.setItem('data',JSON.stringify(this.state.session))
    	console.log(window.sessionStorage.getItem('data'))

    	this.setState({session:session})
    }
    render(){
    	return(
				<div className='detailContainer'>
					<div className="detail_bottom" style={{opacity:this.state.opacity,display:this.state.display}}>
						<div className="bottom_info">
							<div className="info_left">
								<img src={erp.baseUrl + 'upload/'+this.state.data.preview} alt=""/>
							</div>
							<div className="info_right">
								<dic className="pri">￥<span id="marketprice">{this.state.data.price}</span></dic>
								<div className="mesg">
									库存&nbsp;:&nbsp;<span id="stock">{this.state.data.sale_number}</span>件
								</div>
							</div>
							<div className="bottom_infoclose">
								<i className="iconfont icon-cha" onTouchStart={this.noneWindow.bind(this)}></i>
							</div>
						</div>
						<div className="bottom_other">
							<div className="number">
								<div className="label">购买数量</div>
								<div className="num">
									 <button id="btn_reduce" onTouchStart={this.reduceNum.bind(this)}>-</button>
									<input type="text" id="bottom_total" value={this.state.num}/>
									 <button id="btn_add" onTouchStart={this.addNum.bind(this)}>+</button>
								</div>
							</div>
						</div>
						<div className="bottom_close"></div>
						<div className="bottom_confim" onTouchStart={this.session.bind(this)}>确认</div>
					</div>
					<div className="detail_cont">
						<div className="swiper-container">
						 	<SpinnerComponent show={this.props.loading}/>          
							<img src={erp.baseUrl+'upload/'+this.state.data.preview} alt=""/>
						 <SpinnerComponent show={this.props.loading}/>          
						</div>
						<div className="good_info">
							<div className="good_title">
								<h1>{this.state.data.name}</h1>
							</div>
						</div>
						<div className="good_price">
							<span className="money">￥</span>
							<span id="marketpric">{this.state.data.price}</span>
							<span className="productprice">市场价&nbsp;￥<s id="yuan">{this.state.data.old_price}</s></span>
							<span className="stockSal clearfix">库存:&nbsp;{this.state.data.sale_number}</span>
							<span className="sale_num">销量:&nbsp;{this.state.data.sale_number}</span>
						</div>
						<div className="good_choose" onTouchStart={this.blockWindow.bind(this)}>
							<span id="staNum">
								请选择数量
							</span>
							<i className="iconfont icon-youjiantou" className="jiantou"></i>
						</div>
						<div className="good_tab">
							<ul>
								<li>
									<i className="iconfont icon-xiangqing"></i>
									<p>鉴定认证</p>
								</li>
								<li>
									<i className="iconfont icon-anniu"></i>
									<p>全球保修</p>	
								</li>
								<li>
									<i className="iconfont icon-closeaccount"></i>
									<p>支持退货</p>	
								</li>
							</ul>
						</div>
						<div className="detail_parameter">
							<div className="parameter">
								<p>商品参数</p>
							</div>
							<ul className="all_parameter">
								<li>
									<span className="title">品牌</span>
									<p className="para">{this.state.data.pinpai}</p>
								</li>
								<li>
									<span className="title">商品</span>
									<p className="para">{this.state.data.name}</p>
								</li>
								<li>
									<span className="title">型号</span>
									<p className="para">{this.state.data.xinghao}</p>
								</li>
								<li>
									<span className="title">人群</span>
									<p className="para">{this.state.data.people}</p>
								</li>
								<li>
									<span className="title">机芯</span>
									<p className="para">{this.state.data.jixin}</p>
								</li>
								<li>
									<span className="title">表带材质</span>
									<p className="para">{this.state.data.caizhi}</p>
								</li>
								<li>
									<span className="title">表底</span>
									<p className="para">{this.state.data.biaodi}</p>
								</li>
								<li>
									<span className="title">表镜</span>
									<p className="para">{this.state.data.biaojing}</p>
								</li>
								<li>
									<span className="title">表扣</span>
									<p className="para">{this.state.data.biaokou}</p>
								</li>
								<li>
									<span className="title">场景</span>
									<p className="para">{this.state.data.changjing}</p>
								</li>
								<li>
									<span className="title">防水</span>
									<p className="para">{this.state.data.fangshui}</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
    		)
    }	
}


const mapStateToProps  = state => ({
    // loading: state.details.loading,
    // data:state.details.data
})

export default connect(mapStateToProps, DetailsAction)(DetailsComponent);


