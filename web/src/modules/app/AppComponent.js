import React, {Component} from 'react'
// import {Router,Route,hashHistory,Link,IndexRoute,browserHistory} from 'React-Router'

var ReactRouter = require('react-router');
var {Router,Route,hashHistory,Link,IndexRoute,browserHistory} = ReactRouter;
import "./App.scss"
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
							<img src={pic1} alt="" />
							<img src={pic2} alt="" />
							<img src={pic1} alt="" />
							<img src={pic2} alt="" />
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
									<div><img src={pic1} alt="" /></div>
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
							<Link to="">
								<span>男表</span>
								<span>Men</span>
							</Link>
						</div>
						<div>
							<Link to="">
								<span>男表</span>
								<span>Men</span>
							</Link>
						</div>
						<div>
							<Link to="">
								<span>男表</span>
								<span>Men</span>
							</Link>
						</div>
						<div>
							<Link to="">
								<span>男表</span>
								<span>Men</span>
							</Link>
						</div>
	        		</div>
	            	<div className="series-watch">
	            		<div>
	            			<Link to=""><img src="" alt="" /></Link>
	            		</div>
	            		<ul>
	            			<li><Link to=""><img src="" /></Link></li>
	            			<li><Link to=""><img src="" /></Link></li>
	            			<li><Link to=""><img src="" /></Link></li>
	            		</ul>
	            		<div className="series_title">
	            			<h4>星座系列</h4>
	            		</div>
	            	</div>
	            	<article>
	            		<div class="article_title">
	            			<ul>
	            				<li><Link to="">人气</Link></li>
	            				<li><Link to="">全新</Link></li>
	            				<li><Link to="">喜欢</Link></li>
	            			</ul>	
	            		</div>
	            		<div className="getlist">
	            			<ul className="list"></ul>
	            			<ul className="list hide"></ul>	
	            			<ul className="list hide"></ul>
	            		</div>
	            	</article>	
            	</main>
            </div>
        )
    }
}

export default AppComponent