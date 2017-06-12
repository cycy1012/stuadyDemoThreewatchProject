import React from 'react'
import {Route} from 'react-router'

import AppComponent from './modules/app/AppComponent'
import LoginComponent from './modules/login/LoginComponent'
import BuycarComponent from './modules/buycar/BuycarComponent'
import OrderpageComponent from './modules/orderpage/OrderpageComponent'


export default (
    <Route path="/" component={AppComponent}>
        <Route path="login" component={LoginComponent} />
        <Route path="buycar" component={BuycarComponent} />
        <Route path="orderpage" component={OrderpageComponent} />

    </Route>
)