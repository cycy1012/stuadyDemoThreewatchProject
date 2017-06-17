import React, {Component} from 'react'
import {Router, Route, hashHistory, Link, IndexRoute, browserhistory} from 'react-router'

import './Overall.scss'
// import erp from '../../../utils/global.js'

export default class OverallComponent extends Component {
	render(){
		return(
			<ul className="cate_classify clearfix">
				<li><Link to={{pathname:"/listPage", query: {keyword: "男表"}}}><img src='/src/static/styles/imgs/nanshi.jpg' alt="男士腕表"/><div className="shade"></div><h2>男士腕表</h2></Link></li>
				<li><Link to={{pathname:"/listPage", query: {keyword: "女表"}}}><img src='/src/static/styles/imgs/nvshi.jpg' alt="女士腕表"/><div className="shade"></div><h2>女士腕表</h2></Link></li>
				<li><Link to={{pathname:"/listPage", query: {keyword: "情侣"}}}><img src='/src/static/styles/imgs/qinglv.jpg' alt="情侣腕表"/><div className="shade"></div><h2>情侣腕表</h2></Link></li>
				<li><Link to={{pathname:"/listPage", query: {keyword: "机械"}}}><img src='/src/static/styles/imgs/jixie.jpg' alt="机械腕表"/><div className="shade"></div><h2>机械腕表</h2></Link></li>
			</ul>

		)
	}
}