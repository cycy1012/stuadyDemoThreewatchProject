import React, {Component} from 'react'
import {connect} from 'react-redux'
import "./Add_address.scss"

import redux from 'redux'
import { Router, Route, hashHistory, Link } from "react-router"


import ReactRouter from "react-router"
import $ from 'jquery'

class AddressComponent extends React.Component {

	render(){
		return(
			<div>
				<div className="Add_addressHeader">
	                <p>添加新地址
                    <a className="back" href="javascript:history.go(-1)"><i className="iconfont icon-fanhui"></i></a>
	                <Link to="/" className="homepage"><i className="iconfont icon-shouyeshouye"></i></Link>
	                </p>
                 </div>
                 <div className="Add_addressmain">
					<ul>
						<li>收货人姓名： <input type="text"/></li>
						<li>联系电话： <input type="text"/></li>
						<li>地址省、市： <input type="text"/></li>
						<li>详细地址： <input type="text"/></li>

					</ul>
					<div className="addsubmit">
					
						<p>提交</p>
					</div>

                 </div>
			</div>
			
		)
	}

}
export default AddressComponent;