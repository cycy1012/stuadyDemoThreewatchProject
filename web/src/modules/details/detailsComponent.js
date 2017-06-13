import React ,{Component} from 'react'
import {connect} from 'react-redux'
import  {Router,Route,hashHistory,Link,IndexRoute,browserHistory} from 'react-router'
import SpinnerComponent from '../spinner/SpinnerComponent'
import * as DetailsAction from './detailsAction'
import './details.scss'

class DetailsComponent extends Component{
	constructor(props){
	        super(props)
    }
    render(){
    	return(
				<div className='detaulsContainer'>
					<div className="detail_head">
						<div className="pic_left">
							<i className="iconfont icon-jinlingyingcaiicon01"></i>
						</div>
						<div className="pic_right">
							<div className="btn_car">
								<i className="iconfont icon-gouwuche1"></i>
							</div>
							<div className="btn_more">
								<i className="iconfont icon-gengduo1"></i>
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
									库存：<span id="stock">暂无信息</span>件
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
						    <div className="swiper-wrapper">
						    </div>
						    <div className="swiper-pagination"></div>	    
						</div>
						<div className="good_info">
							<div className="good_title">
							</div>
						</div>
						<div className="good_price">
							￥<d id="marketpric">空</d>
							<span className="productprice">市场价&nbsp;￥<d id="yuan">空</d></span>
							<span className="stockSal clearfix">库存:<d id="stock_nem">空</d>&nbsp;销量:<d id="salesNum">空</d></span>
						</div>
						<div className="good_choose">
							<span id="staNum">
								请选择规格及数量
							</span>
							<i className="iconfont icon-youjiantou" className="jiantou"></i>
						</div>
						<div className="good_main">
							<div className="menu">
								<div id="nav1" className="nav navon">
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
							<div className="tab_con" id="con_1">
							</div>
							<div className="tab_con" id="con_2">
								无任何产品参数
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
							<i className="iconfont icon-ic_copyright_px"></i>&nbsp;版权所有&nbsp;sex products情趣用品
						</div>
					</div>
					<div className="detail_foot">
						<div className="like">
							<i className="iconfont icon-shoucang-shoucang"></i>
							<span>收藏</span>
						</div>
						<div className="detail_cart">
							<i className="iconfont icon-gouwuche1"></i>
							<span>购物车</span>
							<b id="btn_addCart">1</b>
						</div>
						<div className="addCart">
							<span className="success">添加成功</span>
							加入购物车
						</div>
						<div className="detail_buy">
							立即购买
						</div>
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