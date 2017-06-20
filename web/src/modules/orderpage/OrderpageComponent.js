import React, {Component} from 'react'
import {connect} from 'react-redux'
import "./Orderpage.scss"
// import  PaywayComponent from "./paywayComponent.js"
// import  PayComponent from "./PayComponent.js"

import redux from 'redux'
import { Router, Route, hashHistory, Link } from "react-router"
import erp from "../../utils/global"


import ReactRouter from "react-router"
// import $ from 'jquery'
import $ from './jquery-3.1.1.js'

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
  constructor(props){
      super(props)
                      
      // let sessionPro  = [{"_id":{"$oid":"593fcdb6d7e74c19a8fb3444"},"name":"菲拉格慕 FLZ-091509210172","price":"3700.00","old_price":"4200.00","pinpai":"菲拉格慕 Salvatore Ferragamo","fare":"免运费","sale_number":"7","people":"石英表","xinghao":"140.002 3834.78","jixin":"机械表 自动机械","biaokou":"针扣","biaojing":"蓝宝石水晶","biaodi":"透底","big":"主流30mm-35mm","xingzhuang":"圆形","kedu":"条形","color":"白色","caizhi":"钢","fangshui":"30mm","zhengshu":"是","qujian":"10001-50000","changjing":"商务 时尚","gongneng":"计时功能","preview":"preview-1497353654523.png","bannerImg":[],"listImg":[],"new":"undefined"},
      // {"_id":{"$oid":"593fce1fd7e74c19a8fb3445"},"name":"法穆兰 3540 QZ COL DRM A D4 CD","price":"169200.00","old_price":"507000.00","pinpai":"法穆兰 Franck Muller","fare":"免运费","sale_number":"1","people":"石英表","xinghao":"140.002 3834.78","jixin":"机械表 自动机械","biaokou":"针扣","biaojing":"蓝宝石水晶","biaodi":"透底","big":"主流30mm-35mm","xingzhuang":"圆形","kedu":"条形","color":"白色","caizhi":"钢","fangshui":"30mm","zhengshu":"是","qujian":"10001-50000","changjing":"商务 时尚","gongneng":"计时功能","preview":"preview-1497353759832.jpg","bannerImg":[],"listImg":[],"new":"undefined"},
      // {"_id":{"$oid":"593fce62d7e74c19a8fb3446"},"name":"卡地亚芭蕾系列WG40023J 18K黄金原镶钻圈 金带金壳女表 时尚手链表","price":"58000.00","old_price":"167000.00","pinpai":"卡地亚 CARTIER","fare":"免运费","sale_number":"3","people":"石英表","xinghao":"140.002 3834.78","jixin":"机械表 自动机械","biaokou":"针扣","biaojing":"蓝宝石水晶","biaodi":"透底","big":"主流30mm-35mm","xingzhuang":"圆形","kedu":"条形","color":"白色","caizhi":"钢","fangshui":"30mm","zhengshu":"是","qujian":"10001-50000","changjing":"商务 时尚","gongneng":"计时功能","preview":"preview-1497353826785.png","bannerImg":[],"listImg":[],"new":"undefined"}]  
      // window.localStorage.setItem('key',JSON.stringify(sessionPro));
      let goodsdata=window.localStorage.getItem('data');
      let total=window.localStorage.getItem('total');
      goodsdata = goodsdata ? JSON.parse(goodsdata) : [];
      total =JSON.parse(total);
      console.log(goodsdata)
      console.log(total[0])
      window.totalprice=total[0].totalprice;
      window.proqty=total[0].proqty;
      //↑接受购物车页面传过来的localStorage数据


      //初始所需的state值
      this.state = {
          // empty:'block',
          // hasgoods:'none',
          // goodsarr:JSON.parse(window.localStorage.getItem('goodsList'))||[],
          // totalprice:Number(0),
          // totalqty:Number(0),
          // gobottom:'none',
          index:0,
          value:1,
          lastcount:Number(totalprice).toFixed(2),
          goodsarr:goodsdata,
      }
      // this.setState({lastcount:totalprice})
  }

  componentWillMount() {

  //   console.log(111111111111111);
  //   $('._totalprice').text($('._totalprice').text)
  // }

  }

  showtip(){
    //点击提交订单后，请看localStorage的储存数据，并显示alert
    window.localStorage.removeItem('data');
    let data_reset  = [{"totalprice":0,"proqty":0}]
    window.localStorage.setItem('total',JSON.stringify(data_reset));
        

    alert('亲，订单提交成功!    (按确定返回首页)');
    window.location.href='';
  }
  



  paywayHandler(){
      // console.log($('.paywayall'))
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
      this.setState({lastcount:Number(totalprice).toFixed(2)-pointnumber});

  }
  cancelwindow2(){
      $('.pointall').fadeOut();
  }
  

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
                {this.state.goodsarr.map(function(item,index){
                return  (
                  <li>
                    <Link to={"details?_id=" + item._id.$oid} className="propic">
                        <img src={erp.uploadUrl + item.preview} />
                    </Link>
                    <div className="proname">
                    <h3>
                      <Link to={"details?_id=" + item._id.$oid}>{item.name}</Link>
                    </h3>
                    <i className="oneprice">单价：</i>
                  </div>
                  <div className="proprice">
                    <p className="pronum">x<span>{item.qty}</span></p>
                    <p className="onecount"><i className="onecount_i">{'¥'+item.price}</i></p>
                    </div>
                  </li>)
                }
                )}


            		
            	</ul>
            </div>
            <div className="payway" onTouchStart={this.paywayHandler}>
            	<a >支付方式 : <i className="iconfont icon-iconfontright"></i><span className="changeway">请选择</span>&nbsp;</a>
            </div>
            <div className="buymsg">留言 ： <input type="text"className="msgtext"/></div>
            <div className="countprice">共<span className="totalNum">{proqty}</span>款商品，小计：￥<span className="totalprice">{totalprice}</span></div>
            <div className="usepoints" onTouchStart={this.usepointsHandler}>
            	<a >使用积分 : <i className="iconfont icon-iconfontright"></i><i>&nbsp;</i><span>-￥<span className="pointvalue">0</span></span></a>
            
            </div>
        </div>
        <div className="accounts">
          
        	<div className="gotobuy" onTouchStart={this.showtip}>
        		<a className="gotobuyBTN" >提交订单</a>
        	</div>
        	<div className="sumifo">
          	总计：￥<span className="_totalprice">{this.state.lastcount}</span>
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
                       
                       <input type="button" value="确&nbsp;定" ref="btn1" onTouchStart={this.closewindow}/>
                       <input type="button" value="取&nbsp;消" ref="btn2"onTouchStart={this.cancelwindow}/>
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
                      <input type="button" value="确定" ref="btn1" onTouchStart={this.closewindow2.bind(this)}/>
                      <input type="button" value="取消" ref="btn2"onTouchStart={this.cancelwindow2.bind(this)}/>
                 </div>
               </div>
       </div>

       </div>
			
		)
	}

}

export default OrderpageComponent;

