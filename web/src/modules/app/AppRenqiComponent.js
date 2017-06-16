import React, {Component} from 'react'
// import {Router,Route,hashHistory,Link,IndexRoute,browserHistory} from 'React-Router'
var ReactRouter = require('react-router');
var {Router,Route,hashHistory,Link,IndexRoute,browserHistory} = ReactRouter;
import $ from '../listpage/jquery-3.1.1.js'
import "./AppRenqiComponent.scss"
import erp from "../../utils/global"


class AppRenqiComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            response : []
        }
    }

    componentDidMount(){
        $.post(erp.baseUrl+'gainProductByarea',{'area':'男表'},function(response){
            this.setState({response:response});
        }.bind(this))
    }
	render(){
		return(
			<div className="getlist">
    			<ul className="list">
                {console.log(this.state.response)}
    				{this.state.response.map(function(item){
                        return   <li>
                                    <Link to={"details?_id=" + item._id} className="list_watch_picture"><img src={erp.uploadUrl + item.preview} /></Link>
                                    <Link to={"details?_id=" + item._id} className="list_watch_name"><p className="list_watch_name_content">{item.name}</p></Link>
                                    <p className="list_watch_price">￥{item.price}</p>
                                </li>
                    })}
                    {this.state.response.map(function(item){
                        return   <li>
                                    <Link to={"details?_id=" + item._id} className="list_watch_picture"><img src={erp.uploadUrl + item.preview} /></Link>
                                    <Link to={"details?_id=" + item._id} className="list_watch_name"><p className="list_watch_name_content">{item.name}</p></Link>
                                    <p className="list_watch_price">￥{item.price}</p>
                                </li>
                    })}                    

    			</ul>
    		</div>
		)	
	}
}

export default AppRenqiComponent





                    // <li>
                    //     <Link to="" className="list_watch_picture"><img src={require('../../static/imgs/4.png')} /></Link>
                    //     <Link to="" className="list_watch_name"><p className="list_watch_name_content">星座系列1460.75.00欧米茄  石英女表 星座系列1460.75.00</p></Link>
                    //     <p className="list_watch_price">￥15000.00</p>
                    // </li>
                    // <li>
                    //     <Link to="" className="list_watch_picture"><img src={require('../../static/imgs/4.png')} /></Link>
                    //     <Link to="" className="list_watch_name"><p className="list_watch_name_content">星座系列1460.75.00欧米茄  石英女表 星座系列1460.75.00</p></Link>
                    //     <p className="list_watch_price">￥15000.00</p>
                    // </li>
                    // <li>
                    //     <Link to="" className="list_watch_picture"><img src={require('../../static/imgs/4.png')} /></Link>
                    //     <Link to="" className="list_watch_name"><p className="list_watch_name_content">星座系列1460.75.00欧米茄  石英女表 星座系列1460.75.00</p></Link>
                    //     <p className="list_watch_price">￥15000.00</p>
                    // </li>
                    // <li>
                    //     <Link to="" className="list_watch_picture"><img src={require('../../static/imgs/4.png')} /></Link>
                    //     <Link to="" className="list_watch_name"><p className="list_watch_name_content">星座系列1460.75.00欧米茄  石英女表 星座系列1460.75.00</p></Link>
                    //     <p className="list_watch_price">￥15000.00</p>
                    // </li>








