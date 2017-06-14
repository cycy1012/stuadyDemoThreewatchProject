import React, {Component} from 'react'
import {connect} from 'react-redux'
import "./Address.scss"

import redux from 'redux'
import { Router, Route, hashHistory, Link } from "react-router"


import ReactRouter from "react-router"
import $ from 'jquery'

class AddressComponent extends React.Component {

	render(){
		return(
			<div>
				<div className="addressHeader">
	                <p>地址管理
                    <a className="back" href="javascript:history.go(-1)"><i className="iconfont icon-fanhui"></i></a>
	                <Link to="/" className="homepage"><i className="iconfont icon-shouyeshouye"></i></Link>
	                </p>
                 </div>
                 <div className="addressmain">
					<ul></ul>
					<div className="addbtn">
	                	<Link to="add_address" className="add_addressbtn">添加新地址</Link>

					</div>

                 </div>
			</div>
			
		)
	}

}
export default AddressComponent;