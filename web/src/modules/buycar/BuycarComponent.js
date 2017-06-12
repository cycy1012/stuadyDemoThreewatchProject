import React, {Component} from 'react'
import {connect} from 'react-redux'
import "./Buycar.scss"
var ReactRouter = require("react-router");
var { Router, Route, hashHistory, Link } = ReactRouter;

class BuycarComponent extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    // loginHandler(){
    //     // console.log(loginActions)
    //     // this.router.push('register')
    //     // if(!this.refs.username){
    //     //     //show up dialog => username cannot empty
    //     //     return
    //     // } else if(!this.refs.password){
    //     //     //show up dialog => password cannot empty
    //     //     return 
    //     // }
        
    //     this.props.login(this.refs.username.value, this.refs.password.value)
    //    console.log(this.props)
    // }

    render(){
        return(
            <div>
                <div className="buycarHeader">
                    <p>购物车
                    <Link to="" className="back">返回</Link>
                    <Link to="" className="homepage">首页</Link>
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
                                    <img src="C:\Users\Administrator\Desktop\watch\aaa.jpg" alt=""/>
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
                                    <img src="C:\Users\Administrator\Desktop\watch\aaa.jpg" alt=""/>
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
                                    <img src="C:\Users\Administrator\Desktop\watch\aaa.jpg" alt=""/>
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
                                    <img src="C:\Users\Administrator\Desktop\watch\aaa.jpg" alt=""/>
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
                                    <img src="C:\Users\Administrator\Desktop\watch\aaa.jpg" alt=""/>
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


export default BuycarComponent;
