import React ,{Component} from 'react'
import {connect} from 'react-redux'
import  {Router,Route,hashHistory,Link,IndexRoute,browserHistory} from 'react-router'
import './xiangQingComponent.scss';

class xiangQingComponent extends Component{
	render(){
		return(
			<div className="container">
				<div className="pingjia">
					<p>暂无详情~</p>
				</div>
			</div>
		)
	}
}

export default xiangQingComponent;