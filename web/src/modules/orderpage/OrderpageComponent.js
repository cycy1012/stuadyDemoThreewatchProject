import React, {Component} from 'react'
import {connect} from 'react-redux'
import "./Orderpage.scss"
// import  PaywayComponent from "./paywayComponent.js"
// import  PayComponent from "./PayComponent.js"

import redux from 'redux'
import { Router, Route, hashHistory, Link } from "react-router"


import ReactRouter from "react-router"
import $ from 'jquery'

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
          console.log($('.paywayall'))
          $('.paywayall').fadeIn();
     }
     closewindow(){
          $('.paywayall').fadeOut();
          let paytext = $("input[name='paychoose']:checked").next().text();
          $('.changeway').text(paytext);
     }
     cancelwindow(){
          $('.paywayall').fadeOut();
     }
     usepointsHandler(){
          $('.pointall').fadeIn();
     }
     closewindow2(){
          $('.pointall').fadeOut();
          let pointnumber = ($('.usepointNum').val()/1000);
          pointnumber=pointnumber.toFixed(2);
          $('.pointvalue').text(pointnumber);
     }
     cancelwindow2(){
          $('.pointall').fadeOut();
     }
     // close(){
     //      console.log(111)
     // }
     constructor(props){
          super(props)
     }
     // close(){
     //      console.log(111);
     //      console.log(this.refs.paywindow1)
     // }
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
                    <a className="back" href="javascript:history.go(-1)"><i className="iconfont icon-fanhui"></i></a>
                    <Link to="/" className="homepage"><i className="iconfont icon-shouyeshouye"></i></Link>
                    </p>
                     </div>
                    <div className="mainarea" ref="aaa">
                    <div className="address">
                         <Link to="address">选择收货地址 +</Link>
                    </div>
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
                    	<a >支付方式 : <i className="iconfont icon-iconfontright"></i><span className="changeway">请选择</span>&nbsp;</a>
                    </div>
                    <div className="buymsg">留言 ： <input type="text"className="msgtext"/></div>
                    <div className="countprice">共<span className="totalNum">5</span>件商品，小计：￥<span className="totalprice">111111.00</span></div>
                    <div className="usepoints" onClick={this.usepointsHandler}>
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


               <div className="paywayall"  style={{display:'none'}}>
                    <div className="dk-spinner-mask"></div>
                       <div className="paywaymain">
                           <div>
                               <ul>
                                   <li className="paylist"><input type="radio" name="paychoose"/><span>支付宝</span><i className="iconfont icon-zhifubao" style={{color:'blue'}}></i></li>
                                   <li className="paylist"><input type="radio" name="paychoose"/><span>微信</span><i className="iconfont icon-weixin" style={{color:'green'}}></i></li>
                                   <li className="paylist"><input type="radio" name="paychoose"/><span>银联</span><i className="iconfont icon-yinlian" style={{color:'#212221'}}></i></li>
                               </ul>
                           </div>
                           <div className="dialog-control">
                               
                               <input type="button" value="确&nbsp;定" ref="btn1" onClick={this.closewindow}/>
                               <input type="button" value="取&nbsp;消" ref="btn2"onClick={this.cancelwindow}/>
                           </div>
                       </div>
               </div>
               <div className="pointall"  style={{display:'none'}}>
                    <div className="dk-spinner-mask"></div>
                       <div className="pointmain">
                         <div className="pointarea">
                              <h3>使用积分</h3>
                              <div className="mypoint">我的积分：&nbsp;1000000</div>
                              <div className="thisuse">本次使用：&nbsp;<input type="text"className="usepointNum" placeholder="0"/></div>
                              <div className="tips">(&nbsp;温馨提示：&nbsp;每1000积分抵用1元哦&nbsp;)</div>
                         </div>
                         <div className="dialog-control2">
                              <input type="button" value="确定" ref="btn1" onClick={this.closewindow2}/>
                              <input type="button" value="取消" ref="btn2"onClick={this.cancelwindow2}/>
                         </div>
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
               // <PayComponent show= "true" ref="paywindow1" className="PayCom/>
                // <PaywayComponent show= "true"  ref="paywindow" className="PayCom" style={"display:none"}/>

export default OrderpageComponent;