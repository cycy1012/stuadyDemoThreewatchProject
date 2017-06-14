import React, {Component} from 'react'
// import {Router,Route,hashHistory,Link,IndexRoute,browserHistory} from 'React-Router'
var ReactRouter = require('react-router');
var {Router,Route,hashHistory,Link,IndexRoute,browserHistory} = ReactRouter;
import $ from '../listpage/jquery-3.1.1.js'
import "./AppQuanxinComponent.scss"
import erp from "../../utils/global"



class AppQuanxiComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            response : []
        }
    }

    componentDidMount(){
        $.post(erp.baseUrl+'gainProductByarea',{'area':'女表'},function(response){
            this.setState({response:response});
        }.bind(this))
    }
	render(){
		return(
			<div className="getlist">
                <ul className="list">
                    {this.state.response.map(function(item){
                        return   <li>
                                    <Link to="" className="list_watch_picture"><img src={erp.uploadUrl + item.preview} /></Link>
                                    <Link to="" className="list_watch_name"><p className="list_watch_name_content">{item.name}</p></Link>
                                    <p className="list_watch_price">￥{item.price}</p>
                                </li>
                    })}
                </ul>
            </div>
		)	
	}
}

export default AppQuanxiComponent











