import React from 'react'
import {Route} from 'react-router'

import AppComponent from './modules/app/AppComponent'
import LoginComponent from './modules/login/LoginComponent'
import FooterComponent from './modules/footer/FooterComponent'
import CategoryComponent from './modules/category/CategoryComponent'
import ListPageComponent from './modules/listpage/ListPageComponent'

export default (
    <Route path="/" component={AppComponent}>
        <Route path="login" component={LoginComponent} />
        <Route path="footer" component={FooterComponent} />
        <Route path="category" component={CategoryComponent}/>
        <Route path="listPage" component={ListPageComponent}/>
    </Route>
)