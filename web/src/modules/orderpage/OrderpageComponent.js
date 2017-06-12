import React, {Component} from 'react'
import {connect} from 'react-redux'
import "./Orderpage.scss"
var ReactRouter = require("react-router");
var { Router, Route, hashHistory, Link } = ReactRouter;

class OrderpageComponent extends React.Component {
	render(){
		return(
			<div>
				<div className="orderpageHeader">
                    <p>确认订单
                    <Link to="" className="back">返回</Link>
                    <Link to="" className="homepage">首页</Link>
                    </p>
                </div>
                <div className="address">地址信息 +</div>
                <div className="product_ifo">
                	<h3 className="title_ifo">商品信息</h3>
                	<ul className="prolist">
                		<li>
                			<a href="" className="propic">
                				<img src="../a.jpg" alt=""/>
                			</a>
                			<div className="proname">
                				<h3>
                					<a href="">欧米茄 碟飞系列  8112613</a>
                				</h3>
                				<i className="oneprice">价格：</i>
                			</div>
                			<div className="proprice">
                				<p className="pronum">x1</p>
                				<p className="onecount"><i className="onecount_i">¥16500.00</i></p>
                			</div>
                		</li>
                		<li>
                			<a href="" className="propic">
                				<img src="../a.jpg" alt=""/>
                			</a>
                			<div className="proname">
                				<h3>
                					<a href="">欧米茄 碟飞系列  8112613</a>
                				</h3>
                				<i className="oneprice">价格：</i>
                			</div>
                			<div className="proprice">
                				<p className="pronum">x1</p>
                				<p className="onecount"><i className="onecount_i">¥16500.00</i></p>
                			</div>
                		</li>
                		<li>
                			<a href="" className="propic">
                				<img src="../a.jpg" alt=""/>
                			</a>
                			<div className="proname">
                				<h3>
                					<a href="">欧米茄 碟飞系列  8112613</a>
                				</h3>
                				<i className="oneprice">价格：</i>
                			</div>
                			<div className="proprice">
                				<p className="pronum">x1</p>
                				<p className="onecount"><i className="onecount_i">¥16500.00</i></p>
                			</div>
                		</li>
                		<li>
                			<a href="" className="propic">
                				<img src="../a.jpg" alt=""/>
                			</a>
                			<div className="proname">
                				<h3>
                					<a href="">欧米茄 碟飞系列  8112613</a>
                				</h3>
                				<i className="oneprice">价格：</i>
                			</div>
                			<div className="proprice">
                				<p className="pronum">x1</p>
                				<p className="onecount"><i className="onecount_i">¥16500.00</i></p>
                			</div>
                		</li>
                		<li>
                			<a href="" className="propic">
                				<img src="../a.jpg" alt=""/>
                			</a>
                			<div className="proname">
                				<h3>
                					<a href="">欧米茄 碟飞系列  8112613</a>
                				</h3>
                				<i className="oneprice">价格：</i>
                			</div>
                			<div className="proprice">
                				<p className="pronum">x1</p>
                				<p className="onecount"><i className="onecount_i">¥16500.00</i></p>
                			</div>
                		</li>
                		
                	</ul>
                </div>
                <div className="payway">
                	<a href="">支付方式 : <span>支付宝&nbsp;></span></a>
                </div>
                <div className="buymsg">留言 ： <input type="text"className="msgtext"/></div>
                <div className="countprice">共<span className="totalNum">4</span>件商品，小计：￥<span className="totalprice">111111.00</span></div>
                <div className="usepoints">
                	<a href="">使用积分 : <i>&nbsp;></i><span>-￥<span className="pointvalue">0</span></span></a>
                
                </div>
                <div className="accounts">
	                
                	<div className="gotobuy">
                		<a href="" className="gotobuyBTN">提交订单</a>
                	</div>
                	<div className="sumifo">
	                	总计：￥<span className="_totalprice">111111.00</span>
	                </div>
                </div>

			</div>
		)
	}

}


export default OrderpageComponent;