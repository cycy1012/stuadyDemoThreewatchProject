import React ,{Component} from 'react'
import {connect} from 'react-redux'
import  {Router,Route,hashHistory,Link,IndexRoute,browserHistory} from 'react-router'
import * as DetailsAction from './detailsAction';

import './detailsHeaderComponent.scss';


class HeaderComponent extends Component{
	constructor(props){
        super(props);
        this.state={
        	opacity:0,
        	display:'none'
        }
    }
	componentWillMount(){
		window.data_name = this.props.location.query._id;
	}
	addCart(){
		let opacity = this.state.opacity;
    	let display = this.state.display
    	let timer = setInterval(function(){
    		opacity += 0.1;
    		if (opacity >= 1) {
    			clearInterval(timer)
    		}
    	this.setState({opacity:opacity,display:'block'})
    	}.bind(this),30)

		setTimeout(function(){
			let opacity = this.state.opacity;
	    	let display = this.state.display
	    	let timer = setInterval(function(){
	    		opacity -= 0.1;
	    		if (opacity <= 0) {
	    			clearInterval(timer)
	    			this.setState({display:'none'})
	    		}
	    	this.setState({opacity:opacity})
	    	}.bind(this),30)
		}.bind(this),1000)
	}
	render(){
		return(
			<div>
				<div className="detail_head">
					<div className="pic_left">
						<Link to="/">
							<i className="iconfont icon-fanhui"></i>
						</Link>
					</div>
					<ul className="detail_head_tab">
						<li ref="shangping"><Link to={'/details/detailsMain?_id='+data_name}  className="shangpin">商品</Link></li>
						<li ref="xiangqing"><Link to={'/details/xiangQing?_id='+data_name} className="xiangqing">详情</Link></li>
						<li ref="shouhou"><Link to={'/details/shouhou?_id='+data_name} className="shouhou">售后</Link></li>
						<li ref="pingjia"><Link to={'/details/pingjia?_id='+data_name} className="pingjia">评价</Link></li>
					</ul>
					<div className="pic_right">
						<i className="iconfont icon-gengduo"></i>
					</div>
				</div>
				{this.props.children}
				<div className="detail_foot">
					<div className="like">
						<i className="iconfont icon-shoucang-shoucang"></i>
						<span>收藏</span>
					</div>
					<Link  to="buycar">
						<div className="detail_cart">
							<i className="iconfont icon-gouwuche"></i>
							<span>购物车</span>	
						</div>
					</Link>
					
					<div className="addCart" onTouchStart={this.addCart.bind(this)}>
						加入购物车
					</div>
					<Link to="login">
						<div className="detail_buy">
							立即购买
						</div>
					</Link>
				</div>
				<div className="shopCar" style={{opacity:this.state.opacity,display:this.state.display}}>
					<p>添加成功</p>
				</div>
			</div>
		)
	}
}

export default HeaderComponent;