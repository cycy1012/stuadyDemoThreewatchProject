import React, {Component} from 'react'
// import {Router,Route,hashHistory,Link,IndexRoute,browserHistory} from 'React-Router'
var ReactRouter = require('react-router');
var {Router,Route,hashHistory,Link,IndexRoute,browserHistory} = ReactRouter;
import {connect} from 'react-redux'
import $ from 'jquery'
import "./AppRenqiComponent.scss"
import erp from "../../utils/global"
import * as AppActions from './AppAction'


class AppRenqiComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            response : []
        }
    }

    componentDidMount(){
        $.post(erp.baseUrl+'gainProductByarea',{'area':'男表'},function(response){
            this.setState({response:response});
           
        }.bind(this))

       
    }

    // componentWillUpdate(){
    //     //请求起始值
    //     var skip = 0;
    //     //每次拿数据的数量
    //     var limit = 10;
    //     //标记只能允许一个ajax请求
    //     var timeoutFlat = true,responseLength = limit;
    //     var n=0;
        
    //     console.log('lalala',this.props.height)
    //      if(this.props.height >= 1100 + n*1200){
    //         console.log(true,'--');
    //         if(timeoutFlat && !(responseLength < limit)){
    //             timeoutFlat = false;
    //             setTimeout(function(){
    //                 timeoutFlat = true;
    //                 $.ajax({
    //                     url: erp.baseUrl+'getProductsAdvanced',
    //                     type: 'post',
    //                     data: {"skip":skip,"limit":limit,'area':'男表',fuzzy:false},
    //                     dataType: 'json',
    //                     // async:false,
    //                     success:function(response){
    //                         skip += limit;
    //                         n++
    //                         responseLength = response.length;
    //                        console.log(response)
    //                     }
    //                 })
    //             },200);
    //         }
    //     }
    // }


	render(){
		return(
			<div className="getlist">
            
    			<ul className="list">
                {console.log(this.state.response)}
    				{this.state.response.map(function(item){
                        return   <li>
                                    <Link to={"details?_id=" + item._id} className="list_watch_picture"><img src={erp.uploadUrl + item.preview} /></Link>
                                    <Link to={"details?_id=" + item._id} className="list_watch_name"><p className="list_watch_name_content">{item.name}</p></Link>
                                    <p className="list_watch_price">￥{item.price}</p>
                                </li>
                    })}                 
    			</ul>
    		</div>
		)	
	}
}

export default AppRenqiComponent

// const mapStateToProps = state => ({
//     height:state.app.height
// })

// export default connect(mapStateToProps, AppActions)(AppRenqiComponent)






