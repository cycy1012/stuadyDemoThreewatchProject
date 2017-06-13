import React, {Component} from 'react'
import {connect} from 'react-redux'
import "./Orderpage.scss"
import  PaywayComponent from "./paywayComponent.js"
import redux from 'redux'
import { Router, Route, hashHistory, Link } from "react-router"


import ReactRouter from "react-router"
// import pic1 from '../../static/imgs/1.png'
// import pic2 from '../../static/imgs/2.png'

class OrderpageComponent extends React.Component {
     
     // state = {
     //      dialog:{
     //           show: false,
     //           title
     //           close:function(){
     //                this.setState(Object.assigh(this.state.dialog),{show:falese})
     //           }.bind(this)
     //      }
     // },
     paywayHandler(){
          console.log(111)

     }
     constructor(props){
          super(props)
     }
     // paywayChoose(){
     //      // this.props.
     // }
                         // <Dialog options={this.state.dialog}/>
     // 
	render(){
		return(
			<div>
				<div className="orderpageHeader">
                    <p>确认订单
                    <Link to="" className="back"><i className="iconfont icon-fanhui"></i></Link>
                    <Link to="" className="homepage"><i className="iconfont icon-shouyeshouye"></i></Link>
                    </p>
                </div>
                <div className="mainarea">
                    <div className="address">地址信息 +</div>
                    <div className="product_ifo">
                    	<h3 className="title_ifo">商品信息&nbsp;<i className="iconfont icon-iconfontright"></i></h3>
                    	<ul className="prolist">
                    		<li>
                    			<a href="" className="propic">
                    				<img src={require('../../static/imgs/4.png')} alt="" />
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
                    				<img src={require('../../static/imgs/4.png')} alt="" />
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
                    				<img src={require('../../static/imgs/4.png')} alt="" />
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
                    				<img src={require('../../static/imgs/4.png')} alt="" />
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
                    				<img src={require('../../static/imgs/4.png')} alt="" />
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
                    <div className="payway" onClick={this.paywayHandler}>
                    	<a >支付方式 : <i className="iconfont icon-iconfontright"></i><span>支付宝&nbsp;</span></a>
                    </div>
                    <div className="buymsg">留言 ： <input type="text"className="msgtext"/></div>
                    <div className="countprice">共<span className="totalNum">4</span>件商品，小计：￥<span className="totalprice">111111.00</span></div>
                    <div className="usepoints">
                    	<a >使用积分 : <i className="iconfont icon-iconfontright"></i><i>&nbsp;</i><span>-￥<span className="pointvalue">0</span></span></a>
                    
                    </div>
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
// const mapStateToProps = state => ({
//     loading: state.login.loading
// })
                         // <PaywayComponent show= "true"/>

export default OrderpageComponent;