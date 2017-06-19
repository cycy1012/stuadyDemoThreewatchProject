import React ,{Component} from 'react'
import {connect} from 'react-redux'
import  {Router,Route,hashHistory,Link,IndexRoute,browserHistory} from 'react-router'
import './shouhouComponent.scss';

class shouhouComponent extends Component{
	render(){
		return(
			<div className="container">
				<div className="pingjia">
					<p>售后服务仍在完善中~</p>
				</div>
			</div>
		)
	}
}

export default shouhouComponent;