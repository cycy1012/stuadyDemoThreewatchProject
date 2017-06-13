import React, {Component} from 'react'
import {connect} from 'react-redux'
import "./Buycar.scss"
// import ReactRouter from "react-router";
import { Router, Route, hashHistory, Link } from "react-router"

import redux from 'redux'
import BuycarReducer from '../buycar/BuycarReducer.js'
import BuycarAction from '../buycar/BuycarAction.js'
//创建 store
// var store = redux.createStore(BuycarReducer);


class BuycarComponent extends React.Component{

    // const {decrement,increment,count} = this.props;
        // <button className="Numreduce" onClick={this.props.decrement}>-</button>  
        // <input type="text" value={this.props.state}/>
        // <button className="Numadd" onClick={this.props.increment}>+</button>  
    render(){
        return(
            <div>
                <div className="buycarHeader">
                    <p>购物车
                    <Link to="" className="back"><i className="iconfont icon-fanhui"></i></Link>
                    <Link to="" className="homepage"><i className="iconfont icon-shouyeshouye"></i></Link>
                    </p>
                </div>
                <div className="buycarMain">
                    <ul>
                        <li className="prodetail">
                            <div className="checkbox">
                                <input type="checkbox" className="choosePro"/>
                            </div>
                            <div className="detail_main">
                                <a href="" className="picbox">
                                    <img src={require('../../static/imgs/4.png')} alt="" />
                                    
                                </a>
                                <div className="pro_word">
                                    <a href="" className="proName">
                                        <h3>欧米茄 碟飞系列  8112613</h3>
                                    </a>
                                    <div className="buyoption">
                                        <p className="priceTag">
                                            <a href="">￥<b>99999</b></a>
                                        </p>
                                        <div className="addNum">


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="prodetail">
                            <div className="checkbox">
                                <input type="checkbox" className="choosePro"/>
                            </div>
                            <div className="detail_main">
                                <a href="" className="picbox">
                                    <img src={require('../../static/imgs/4.png')} alt="" />
                                </a>
                                <div className="pro_word">
                                    <a href="" className="proName">
                                        <h3>欧米茄 碟飞系列  8112613</h3>
                                    </a>
                                    <div className="buyoption">
                                        <p className="priceTag">
                                            <a href="">￥<b>99999</b></a>
                                        </p>
                                        <div className="addNum">
                                            <button className="Numreduce">-</button>  
                                            <input type="text" value="1"/>
                                            <button className="Numadd">+</button>  

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="prodetail">
                            <div className="checkbox">
                                <input type="checkbox" className="choosePro"/>
                            </div>
                            <div className="detail_main">
                                <a href="" className="picbox">
                                    <img src={require('../../static/imgs/4.png')} alt="" />
                                </a>
                                <div className="pro_word">
                                    <a href="" className="proName">
                                        <h3>欧米茄 碟飞系列  8112613</h3>
                                    </a>
                                    <div className="buyoption">
                                        <p className="priceTag">
                                            <a href="">￥<b>99999</b></a>
                                        </p>
                                        <div className="addNum">
                                            <button className="Numreduce">-</button>  
                                            <input type="text" value="1"/>
                                            <button className="Numadd">+</button>  

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                                                <li className="prodetail">
                            <div className="checkbox">
                                <input type="checkbox" className="choosePro"/>
                            </div>
                            <div className="detail_main">
                                <a href="" className="picbox">
                                    <img src={require('../../static/imgs/4.png')} alt="" />
                                </a>
                                <div className="pro_word">
                                    <a href="" className="proName">
                                        <h3>欧米茄 碟飞系列  8112613</h3>
                                    </a>
                                    <div className="buyoption">
                                        <p className="priceTag">
                                            <a href="">￥<b>99999</b></a>
                                        </p>
                                        <div className="addNum">
                                            <button className="Numreduce">-</button>  
                                            <input type="text" value="1"/>
                                            <button className="Numadd">+</button>  

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="prodetail">
                            <div className="checkbox">
                                <input type="checkbox" className="choosePro"/>
                            </div>
                            <div className="detail_main">
                                <a href="" className="picbox">
                                    <img src={require('../../static/imgs/4.png')} alt="" />
                                </a>
                                <div className="pro_word">
                                    <a href="" className="proName">
                                        <h3>欧米茄 碟飞系列  8112613</h3>
                                    </a>
                                    <div className="buyoption">
                                        <p className="priceTag">
                                            <a href="">￥<b>99999</b></a>
                                        </p>
                                        <div className="addNum">
                                            <button className="Numreduce">-</button>  
                                            <input type="text" value="1"/>
                                            <button className="Numadd">+</button>  

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>


                        

                    </ul>

                    
                </div>
                <div className="buycarFooter">
                    <div className="chooseAll">
                        <input type="checkbox" className="chooseBtn"/>
                        <span>全选</span>
                        &nbsp;
                        
                    </div>
                    <div className="totalPay" ><span>总计:￥</span><b>111111</b></div>
                    <div className="buynow">
                    <a href="" className="buyBtn">去结算</a>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    state: state.counter,
})

export default BuycarComponent;
