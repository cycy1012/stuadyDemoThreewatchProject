import React, {Component} from 'react'
// import {Router,Route,hashHistory,Link,IndexRoute,browserHistory} from 'React-Router'

var ReactRouter = require('react-router');
var {Router,Route,hashHistory,Link,IndexRoute,browserHistory} = ReactRouter;
import "./App.scss"
import FooterComponent from '../footer/FooterComponent.js'
import pic1 from '../../static/imgs/1.png'
import pic2 from '../../static/imgs/2.png'

class AppComponent extends Component{
    render(){
    	console.log(this.props)
        return (
        	<div>
            	<header className="app_header">
            		<div><i className="iconfont icon-fenlei"></i>	</div>
            		<input type="text" placeholder="请输入商品关键字"/>
            		<span className="iconfont icon-sousuo_sousuo"></span>	
            		
            		
            	</header>
            	<main className="app_main">
            		<section className="banner">
						<div className="banner_mask">
							<img src={require('../../static/imgs/5.png')} alt="" />
							<img src={require('../../static/imgs/6.png')} alt="" />
							<img src={require('../../static/imgs/5.png')} alt="" />
							<img src={require('../../static/imgs/6.png')} alt="" />
						</div>
	            	</section>
	            	<div className="linkPic"><Link to=""><img src={require('../../static/imgs/3.png')} alt="" /></Link></div>
	            	<div className="ToSnapUp">
	            		<Link to="" className="ToSnapUp_link">
	            			<h3>限时抢购</h3>
	            			<p>
	            				<span></span>天
	            				<span></span>时
	            				<span></span>分
	            				<span></span>秒		
	            			</p>
	            			<span className="iconfont icon-iconfontright"></span>	
	            		</Link>
	            		<div className="recommend">
							<ul>
								<li>
									<div><img src={require('../../static/imgs/4.png')} alt="" /></div>
									<p>浪琴浪琴运动系列33913987 男表</p>
								</li>
								<li>
									<div><img src={require('../../static/imgs/nanshi.jpg')} alt="" /></div>
									<p>浪琴浪琴运动系列33913987 男表</p>
								</li>
								<li>
									<div><img src={require('../../static/imgs/nvshi.jpg')} alt="" /></div>
									<p>浪琴浪琴运动系列33913987 男表</p>
								</li>
								<li>
									<div><img src={pic2} alt="" /></div>
									<p>浪琴浪琴运动系列33913987 男表</p>
								</li>
								<li>
									<div><img src={pic1} alt="" /></div>
									<p>浪琴浪琴运动系列33913987 男表</p>
								</li>
								<li>
									<div><img src={pic2} alt="" /></div>
									<p>浪琴浪琴运动系列33913987 男表</p>
								</li>
							</ul>
	            		</div>
	            	</div>
	        		<div className="watchOption">
						<div>
							<Link to="" className="watch_Option watch_Option1">
								<span>男表</span>
								<span>MEN</span>
							</Link>
						</div>
						<div>
							<Link to="" className="watch_Option watch_Option2">
								<span>女表</span>
								<span>WOMEN</span>
							</Link>
						</div>
						<div>
							<Link to="" className="watch_Option watch_Option3">
								<span>机械表</span>
								<span>MECHANICS</span>
							</Link>
						</div>
						<div>
							<Link to="" className="watch_Option watch_Option4">
								<span>石英表</span>
								<span>QUARTZ</span>
							</Link>
						</div>
						<span className="midMask"></span>
	        		</div>
	            	<div className="series-watch">
	            		<div className="series_bigPicture">
	            			<Link to=""><img src={require('../../static/imgs/9.png')} alt="" /></Link>
	            		</div>
	            		<ul>
	            			<li><Link to=""><img src={require('../../static/imgs/4.png')} /></Link></li>
	            			<li><Link to=""><img src={require('../../static/imgs/4.png')} /></Link></li>
	            			<li><Link to=""><img src={require('../../static/imgs/4.png')} /></Link></li>
	            		</ul>
	            		<div className="series_title">
	            			<h4 className="series_title_h4">星座系列</h4>
	            		</div>
	            	</div>
	            	<article className="app_article">
	            		<div className="app_article_title">
	            			<ul>
	            				<li><Link to="">人气</Link></li>
	            				<li><Link to="">全新</Link></li>
	            				<li><Link to="">喜欢</Link></li>
	            			</ul>	
	            		</div>
	            		<div className="getlist">
	            			<ul className="list">
	            				<li>
	            					<Link to="" className="list_watch_picture"><img src="" /></Link>
	            					<Link to=""><p className="list_watch_name">星座系列1460.75.00欧米茄  石英女表 星座系列1460.75.00</p></Link>
	            					<p>￥15000.00</p>
	            				</li>
	            			</ul>
	            			<ul className="list hide"></ul>	
	            			<ul className="list hide"></ul>
	            		</div>
	            	</article>	
            	</main>
            	<FooterComponent/>
            </div>
        )
    }
}

export default AppComponent