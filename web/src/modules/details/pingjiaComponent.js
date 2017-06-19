import React ,{Component} from 'react'
import {connect} from 'react-redux'
import  {Router,Route,hashHistory,Link,IndexRoute,browserHistory} from 'react-router'
import './pingjiaComponent.scss';

class pingjiaComponent extends Component{
	render(){
		return(
			<div className="container">
				<div className="pingjia">
					<p>暂无评价~</p>
				</div>
			</div>
		)
	}
}

export default pingjiaComponent;