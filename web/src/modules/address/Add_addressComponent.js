import React, {Component} from 'react'
import {connect} from 'react-redux'
import "./Add_address.scss"
import * as  AddAction from './Add_addressAction.js'

import redux from 'redux'
import  {Router,Route,hashHistory,Link,IndexRoute,browserHistory} from 'react-router';


import ReactRouter from "react-router"
import $ from 'jquery'

class AddressComponent extends React.Component {
	constructor(props){
        super(props);
    }
    componentWillMount(){
		window.onlyUsername=window.sessionStorage.getItem('phone');
    }	
	commitAdd(){
		this.props.Addcommit(onlyUsername,this.refs.waname.value,this.refs.waphone.value,this.refs.address.value,this.refs.xiang.value).then(
			response=>{
				console.log("===>",response)
				if(response.body.status){
					hashHistory.push('/address')
				}else{
					alert("你输入的地址重复了")
				}
			}
		)
	}
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
						<li>收货人姓名： <input ref="waname" type="text"/></li>
						<li>联系电话： <input ref="waphone" type="text"/></li>
						<li>地址省、市： <input ref="address" type="text"/></li>
						<li>详细地址： <input ref="xiang" type="text"/></li>

					</ul>
					<div className="addsubmit" onTouchStart={this.commitAdd.bind(this)}>
						<p>提交</p>
					</div>

                 </div>
			</div>
			
		)
	}

}

const mapStateToProps = state => ({
})
export default connect(mapStateToProps, AddAction)(AddressComponent)