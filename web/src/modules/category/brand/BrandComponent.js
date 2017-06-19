import React, {Component} from 'react'
import {Router, Route, hashHistory, Link, IndexRoute, bowserHistory} from 'react-router'

import './Brand.scss'

let url = '/src/static/styles/imgs/';
//模拟数据
let data = [['劳力士', 'laolishi.png'], ['浪琴', 'langqin.png'], ['帝舵','diduo.png'],['库尔沃','kuerwo.png'],['欧米茄','oumijia.png'],['朗格','langge.png'],['宝珀','baopo.png'],['百达翡丽','baida.png']];

export default class BrandComponent extends Component {
	render(){
		return(
			<ul className="cate_brand">
				{
					data.map(function(item, index){
						return(
							<li>
								<i style={{backgroundImage: 'url('+ url + item[1] + ')'}}></i>
								<h3>{item[0]}</h3>
							</li>							
						)
					})
				}			
			</ul>
		)
	}
}