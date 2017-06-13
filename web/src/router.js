import React from 'react'
import {Route} from 'react-router'

import AppComponent from './modules/app/AppComponent'
import LoginComponent from './modules/login/LoginComponent'
import CategoryComponent from './modules/category/CategoryComponent'
import ListPageComponent from './modules/listpage/ListPageComponent'

export default (
	<Route>
    	<Route path="/" component={AppComponent}/>
        <Route path="login" component={LoginComponent}/>
        <Route path="category" component={CategoryComponent}/>
        <Route path="listPage" component={ListPageComponent}/>
    </Route>
)