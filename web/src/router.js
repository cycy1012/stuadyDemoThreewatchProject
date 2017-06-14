import React from 'react'
import {Route} from 'react-router'

import AppComponent from './modules/app/AppComponent'
import AppRenqiComponent from './modules/app/AppRenqiComponent'
import AppXihuanComponent from './modules/app/AppXihuanComponent'
import AppQuanxinComponent from './modules/app/AppQuanxinComponent'
import LoginComponent from './modules/login/LoginComponent'
import CategoryComponent from './modules/category/CategoryComponent'
import ListPageComponent from './modules/listpage/ListPageComponent'
import RegisterComponent from './modules/register/registerComponent'
import MemberCenterComponent from './modules/memberCenter/memberCenterComponent'
import DetailsComponent from './modules/details/detailsComponent'
import BuycarComponent from './modules/buycar/BuycarComponent'
import OrderpageComponent from './modules/orderpage/OrderpageComponent'
import AddressComponent from './modules/address/AddressComponent'
import Add_addressComponent from './modules/address/Add_addressComponent'
import SearchComponent from './modules/search/SearchComponent'



export default (
    <Route>
    	<Route path="/" component={AppComponent}>
            <Route path="appRenqi" component={AppRenqiComponent}/>
            <Route path="appXihuan"  component={AppXihuanComponent}/>
            <Route path="appQuanxin"  component={AppQuanxinComponent}/>
        </Route>
        <Route path="search" component={SearchComponent}/>
        <Route path="login" component={LoginComponent} />
        <Route path="register" component={RegisterComponent} />
        <Route path = "memberCenter" component={MemberCenterComponent}/>
        <Route path = "details" component={DetailsComponent}/>
        <Route path="buycar" component={BuycarComponent} />
        <Route path="orderpage" component={OrderpageComponent} />
        <Route path="listPage" component={ListPageComponent}/>
        <Route path="category" component={CategoryComponent}/>
        <Route path="address" component={AddressComponent} />
        <Route path="add_address" component={Add_addressComponent} />
    </Route>
)