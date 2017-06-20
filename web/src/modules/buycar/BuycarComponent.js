import React, {Component} from 'react'
import {connect} from 'react-redux'
import "./Buycar.scss"
// import ReactRouter from "react-router";
import { Router, Route, hashHistory, IndexRoute, Link } from "react-router"
import erp from "../../utils/global"
import redux from 'redux'
import BuycarReducer from '../buycar/BuycarReducer.js'
import BuycarAction from '../buycar/BuycarAction.js'

class BuycarComponent extends React.Component{
    constructor(props){
        super(props)
        console.log(window.localStorage.getItem('data'))       
        window.goods=window.localStorage.getItem('data');              
        // let sessionPro  = [{"_id":{"$oid":"593fcdb6d7e74c19a8fb3444"},"name":"菲拉格慕 FLZ-091509210172","price":"3700.00","preview":"preview-1497353654523.png","qty":2},
        // {"_id":{"$oid":"593fce1fd7e74c19a8fb3445"},"name":"法穆兰 3540 QZ COL DRM A D4 CD","price":"169200.00","preview":"preview-1497353759832.jpg","qty":4},
        // {"_id":{"$oid":"593fce62d7e74c19a8fb3446"},"name":"卡地亚芭蕾系列WG40023J 18K黄金原镶钻圈 金带金壳女表 时尚手链表","price":"58000.00","preview":"preview-1497353826785.png","qty":1}]  
        // window.localStorage.setItem('key',JSON.stringify(sessionPro));
        // window.goods=window.localStorage.getItem('key');
        goods = goods ? JSON.parse(goods) : [];
        // console.log(window.localStorage.getItem('data'))
        // console.log(goods)
        //初始所需的state值
        console.log(goods)
        this.state = {

            index:0,
            value:1,
            de_num:0,
            in_num:0,
            goodsarr:goods,
            linum:Number(0),
            totalprice:Number(0),
            displaystatus:'none',
            data:[],
            

        }
    }
    componentWillMount() {
        if (goods.length<1) {
            this.setState({displaystatus:'block'})
        }
        //若购物车内无商品数据，则显示购物车空空如也    
    }
    componentDidMount(){        
        this.init();
        //初始化
    }
    //点击商品的减号触发函数
    changeNum_de(index,event){
        this.setState({de_num:index})
        // console.log(event.target.nextSibling);
        for(var i=0 ; i<this.state.goodsarr.length;i++){
            if (index==i) {
                // console.log(this.state.goodsarr[index])
                if (this.state.goodsarr[index].qty>1) {
                  this.state.goodsarr[index].qty--;

                }
            }
        } 
        this.resetgoodsarr();
        // console.log(this.state.totalprice)
        

    }
    //点击商品的加号触发函数

    changeNum_in(index,event){
        this.setState({in_num:index})
        for(var i=0 ; i<this.state.goodsarr.length;i++){
            if (index==i) {
                // console.log(this.state.goodsarr[index])
                this.state.goodsarr[index].qty++;
            }
        } 
        this.resetgoodsarr();
        // console.log(this.state.totalprice)


    }

    onchangeNum_de(index){
        return index==this.state.de_num ? 'selected Numreduce' : 'Numreduce'
    }
    onchangeNum_in(index){
        return index==this.state.in_num ? 'selected Numadd' : 'Numadd'
    }
    
    handleChange(event){
        console.log(event.target);

        let newValue = event.target.value;
　　　　this.setState({value: newValue});
    }


    // 删除商品
    removePro(index){
        if (this.state.goodsarr.length) {
            // console.log(this.state.goodsarr.splice(index,1))
           for(var i=0 ; i<this.state.goodsarr.length;i++){
                if (index==i) {
                    // 购物车商品删除
                    this.state.goodsarr.splice(index,1);
                    console.log(this.state.goodsarr)
                    this.resetgoodsarr();                    
                    // this.empty();
                }
           } 
        }    
        if (goods.length<1) {
            this.setState({displaystatus:'block'})
        }   
    }
    // 改动商品数据后重置localStorage
    resetgoodsarr(){
        this.setState({goodsarr:this.state.goodsarr});
        this.init();
        window.localStorage.removeItem('data');
        window.localStorage.setItem('data',JSON.stringify(this.state.goodsarr));

    }
    init(){
        // 初始化
        this.state.totalprice = 0;
        this.state.linum = 0;
        let linum=0;
        // 计算总价         计算合计数量
        this.state.goodsarr.map(function(item){
            console.log(1,this.state.goodsarr)
            let totalprice = 0;let totalqty = 0;
            totalprice += (parseInt(item.price))*item.qty;
            // totalqty +=parseInt(item.qty);
            linum+=1;
            // console.log(linum)
            this.setState({totalprice: this.state.totalprice +=totalprice});
            // this.setState({totalqty: this.state.totalqty +=totalqty});  
            this.setState({linum: linum});             
        }.bind(this));
        // console.log(this.setState.linum)
    }
    // 设置传过订单页的localStorage
    setdata(){
        let data_send  = [{"totalprice":this.state.totalprice,"proqty":this.state.linum}]
        window.localStorage.setItem('total',JSON.stringify(data_send));
        console.log(1,data_send)
        console.log(goods)

    }
    gotocenter(){
        window.location.hash = '/memberCenter';
    }
    gotoindex(){
        window.location.hash = '/';
    }

    render(){

        return(
            <div>
                <div className="buycarHeader">
                    <p>购物车
                    <a className="back" href="javascript:history.go(-1)"><i className="iconfont icon-fanhui"></i></a>
                    <Link to="/" className="homepage"><i className="iconfont icon-shouyeshouye"></i></Link>
                    </p>
                </div>
                <div className="buycarMain">
                    <ul>
                        {this.state.goodsarr.map(function(item,index){
                        return  (<li  className="prodetail">
                                    <div className="checkbox" onTouchStart={this.removePro.bind(this,index)}>
                                        删除
                                    </div>
                                    <div className="detail_main">
                                        <Link to={"details?_id=" + item._id.$oid} className="picbox">
                                            <img src={erp.uploadUrl + item.preview} />
                                        </Link>
                                        <div className="pro_word">
                                            <Link to={"details?_id=" + item._id.$oid} className="proName">
                                            <h3>{item.name}</h3>
                                            </Link>
                                            <div className="buyoption">
                                                <p className="priceTag">
                                                     <Link to={"details?_id=" + item._id.$oid} className="proName">￥<b>{item.price}</b></Link>
                                                </p>
                                                <div className="addNum">
                                                    <button className={this.onchangeNum_de(index)} onTouchStart={this.changeNum_de.bind(this,index)}>-</button>  
                                                    <input type="text" value={item.qty} className="pro_qty" ref={'qtyNum'+index} onChange={this.handleChange.bind(this)} />
                                                    <button className={this.onchangeNum_in(index)} onTouchStart={this.changeNum_in.bind(this,index)}>+</button>  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </li>)
                        }.bind(this)
                        )}
                        <div className="no_shop"  style={{display:this.state.displaystatus}}>
                        
                        <p><i className="iconfont icon-gouwuche"></i>&nbsp;&nbsp;购物车快饿瘪了</p>
                        <p>主人快去给我找点东西吧</p>
                        <div>
                            <h2 className="shoppCart_menber" onTouchStart={this.gotocenter.bind(this)}>个人中心</h2>
                            <h2 className="shoppCart_index" onTouchStart={this.gotoindex.bind(this)}>去逛逛</h2>
                        </div>
                        </div>
                    </ul>
                   
        
                    
                </div>
                <div className="buycarFooter">
                    <div className="chooseAll">共<span>{this.state.linum}</span>款商品
                        &nbsp;
                    </div>
                    <div className="totalPay" ><span>总计:￥</span><b>{this.state.totalprice}</b></div>
                    <div className="buynow">
                    <Link to="/orderpage" className="buyBtn" onTouchStart={this.setdata.bind(this)}>去结算</Link>
                    </div>
                </div>
            </div>
        )
    }
}
// const mapStateToProps = state => ({
//     state: state.counter,
// })

export default BuycarComponent;

