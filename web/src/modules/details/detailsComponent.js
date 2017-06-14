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
				<div className='detaulsContainer'>
					<div className="detail_head">
						<div className="pic_left" onTouchStart={this.goBack.bind(this)}>
							<i className="iconfont icon-fanhui"></i>
						</div>
						<div className="pic_right">
							<div className="btn_car">
								<i className="iconfont icon-wangwang"></i>
							</div>
							<div className="btn_more">
								<i className="iconfont icon-gengduo"></i>
							</div>
							<div className="hide_fun">
								<p className="fun_menu" id="fun_shou"><i className="iconfont icon-shouye"></i>首页</p>
								<p className="fun_menu" id="fun_member"><i className="iconfont icon-huiyuanzhongxin"></i>会员中心</p>
							</div>
						</div>
					</div>
					<div className="detail_pic"></div>
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
							<img src={erp.baseUrl+'upload/'+window.preview} alt=""/>
						 <SpinnerComponent show={this.props.loading}/>          
						
						</div>
						<div className="good_info">
							<div className="good_title">
							</div>
						</div>
						<div className="good_price">
							￥<d id="marketpric">{window.price }</d>
							<span className="productprice">市场价&nbsp;￥<d id="yuan">{window.old_price}</d></span>
							<span className="stockSal clearfix">库存:{window.sale_number}<d id="stock_nem"></d>&nbsp;销量:<d id="salesNum">{window.sale_number+4}</d></span>
						</div>
						<div className="good_choose" onTouchStart={DetailsAction.goodChoose.bind(this)}>
							<span id="staNum">
								请选择规格及数量
							</span>
							<i className="iconfont icon-youjiantou" className="jiantou"></i>
						</div>
						<div className="good_main">
							<div className="menu" onTouchStart={DetailsAction.qiehuan.bind(this)}>
								<div id="nav1"  className="nav navon">
									图文详情
								</div>
								<div id="nav2" className="nav">
									产品参数
								</div>
								<div id="nav3" className="nav">
									用户评价
								</div>
								<div id="nav4" className="nav">
									同店推荐
								</div>
							</div>
							<div className="tab_con" style={{display:'block'}} id="con_1">
								<img src={erp.baseUrl+'upload/'+window.preview} alt=""/>
								<img src={erp.baseUrl+'upload/'+window.preview} alt=""/>
								<img src={erp.baseUrl+'upload/'+window.preview} alt=""/>
							</div>
							<div className="tab_con" id="con_2">
								{window.biaojing+window.biaokou}
							</div>
							<div className="tab_con" id="con_3">
								暂时没有任何评价
							</div>
							<div className="tab_con" id="con_4">
								<div id="recommad">
									<div className="good_mesg" data-goodsid="">
										暂时没有信息
									</div>
								</div>

							</div>	
						</div>
						<div className="good_copyright">
							<i className="iconfont icon-ic_copyright_px"></i>&nbsp;版权所有&nbsp;名表汇有限集团
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
								<b id="btn_addCart">1</b>
							</div>
						</Link>
						<div className="addCart"  onTouchStart={DetailsAction.addCart.bind(this)}>
							<span className="success">添加成功</span>
							加入购物车
						</div>
						<Link to="login">
							<div className="detail_buy">
								<div className="backTop" onTouchStart={DetailsAction.backTop.bind(this)}><i className='iconfont icon-fanhuidingbu'></i></div>
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