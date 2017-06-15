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
        super(props)
    }
    goBack(){
    	window.history.go(-1);
    }
    componentWillMount(){
		var data_name = this.props.location.query._id;
		$.ajax({
			url:'http://10.3.133.50:8888/'+'gainProductById',
			type:'post',
			data:{'_id':data_name},
			dataType:'json',
			async:false,
			success:function(response){console.log(response)
				window.obj = response[0];
				window.preview = obj.preview;
				window.old_price = obj.old_price;
				window.price = obj.price;
				window.sale_number = obj.sale_number;
				window.mesg = obj.biaodi;
				window.biaojing = obj.biaojing;
				window.biaokou = obj.biaokou;
				window.name = obj.name;

				this.props.details('success');
			}.bind(this),
			error:function(){
				this.props.details('error');
			}.bind(this)
		})
    }
    componentDidMount(){
    	window.onscroll=function(){
			if(scrollY>20){
				$('.backTop').fadeIn(500);
			}else{
				$('.backTop').hide();
			}
    	}
    }
    componentWillUnmount(){
    	// window.onscroll=null;
    }
    render(){
    	return(
				<div className='detailContainer'>
					<div className="detail_head">
						<div className="pic_left" onTouchStart={this.goBack.bind(this)}>
							<i className="iconfont icon-fanhui"></i>
						</div>
						<ul className="detail_head_tab">
							<li>商品</li>
							<li>详情</li>
							<li>售后</li>
							<li>评价</li>
						</ul>
						<div className="pic_right">
							<i className="iconfont icon-gengduo"></i>
						</div>
					</div>
					<div className="detail_bottom">
						<div className="bottom_info">
							<div className="info_left">
							</div>
							<div className="info_right">
								<dic className="pri">￥<span id="marketprice">无</span></dic>
								<div className="mesg">
									库存:<span id="stock">{window.sale_number}</span>件
								</div>
								<div className="option">请选择规格</div>
							</div>
							<div className="bottom_infoclose">
								<i className="iconfont icon-cha"></i>
							</div>
						</div>
						<div className="bottom_other">
							<div className="number">
								<div className="label">购买数量</div>
								<div className="num">
									 <button id="btn_reduce">-</button>
									<input type="text" id="bottom_total" value="1"/>
									 <button id="btn_add">+</button>
								</div>
							</div>
						</div>
						<div className="bottom_close"></div>
						<div className="bottom_confim">确认</div>
					</div>
					<div className="detail_cont">
						<div className="swiper-container">
						 	<SpinnerComponent show={this.props.loading}/>          
							<img src={erp.baseUrl+'upload/'+window.preview} alt=""/>
						 <SpinnerComponent show={this.props.loading}/>          
						</div>
						<div className="good_info">
							<div className="good_title">
								<h1>{window.name}</h1>
							</div>
						</div>
						<div className="good_price">
							<span className="money">￥</span>
							<span id="marketpric">{window.price}</span>
							<span className="productprice">市场价&nbsp;￥<s id="yuan">{window.old_price}</s></span>
							<span className="stockSal clearfix">库存:&nbsp;{window.sale_number}</span>
							<span className="sale_num">销量:&nbsp;{window.sale_number}</span>
						</div>
						<div className="good_choose" onTouchStart={DetailsAction.goodChoose.bind(this)}>
							<span id="staNum">
								请选择规格及数量
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
						</div>
					</div>
					<div className="detail_foot">
						<div className="like">
							<i className="iconfont icon-shoucang-shoucang"></i>
							<span>收藏</span>
						</div>
						<Link  to="buycar">
							<div className="detail_cart">
								<i className="iconfont icon-gouwuche"></i>
								<span>购物车</span>	
							</div>
						</Link>
						<div className="addCart"  onTouchStart={DetailsAction.addCart.bind(this)}>
							加入购物车
						</div>
						<Link to="login">
							<div className="detail_buy">
								立即购买
							</div>
						</Link>
					</div>
				</div>
    		)
    }	
}
const mapStateToProps  = state => ({
    loading: state.details.loading,
    data:state.details.data
})
export default connect(mapStateToProps, DetailsAction)(DetailsComponent)