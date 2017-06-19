import React, {Component} from 'react'

import './GoTop.scss'

export default class GoTop extends Component {
	backtotopfn(){
		// 当前滚动条 滚动距离
		let Height = this.props.height
		setTimeout(function(){
			var timer = setInterval(function(){
				let speed = Math.ceil(Height/5)
				let _scrollTop = Height - speed
				if(_scrollTop <= 20){
					clearInterval(timer)
					_scrollTop = 0
				}
				this.refs.app_main.scrollTop=_scrollTop
				Height=this.refs.app_main.scrollTop
			}.bind(this),30)
		}.bind(this),50)
	}	

	render(){
		return (
			<div className="backToTop" ref="backTop" onClick={this.backtotopfn.bind(this)} style={{display:this.props.display}}>
				<span className="iconfont icon-fanhuidingbu"></span>
			</div>
		)
	}
}