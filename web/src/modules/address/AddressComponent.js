import React, {Component} from 'react'
import {connect} from 'react-redux'
import "./Address.scss"

import redux from 'redux'
import  {Router,Route,hashHistory,Link,IndexRoute,browserHistory} from 'react-router';
import * as  AddressAction from  './AddressAction'


class AddressMamageComponent extends React.Component {
	constructor(props){
        super(props);
        this.state={
        	data:[]
        }
    }	
    componentWillMount(){
    	var onlyUsername=window.sessionStorage.getItem('phone');
		this.props.mamage(onlyUsername).then(
			response=>{
				console.log(response.body,response)
				let data = response.body.data;
				this.setState({data:data})
		});
    }
    componentDidMount(){
		
	}
	delAdd(index){
		console.log("+++",index,9999,this.state.data[index].address)
		let address=this.state.data[index].address;
		this.props.delAddress(address).then(response=>{
			console.log(response.body,response)
			// let data = response.body.data;
			// this.setState({data:data})
		})

	}
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
					<ul>
						{(this.state.data||[]).map(function(item,index){
							return <div>
							 <p>{item.waname}<i className="iconfont icon-cha" onTouchStart={this.delAdd.bind(this,index)}></i><b>{item.waphone}</b></p>
							<li className="liAddress">
							{'收货地址: '+item.address+item.xiang}</li>
							</div>
						}.bind(this))}
							
					</ul>
					<div className="addbtn">
	                	<Link to="add_address" className="add_addressbtn">添加新地址</Link>
					</div>
                 </div>
			</div>
			
		)
	}

}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps, AddressAction)(AddressMamageComponent)
