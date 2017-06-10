import React from 'react'
import {Route} from 'react-router'

import AppComponent from './modules/app/AppComponent'
import LoginComponent from './modules/login/LoginComponent'
import RegisterComponent from './modules/register/registerComponent'

export default (
    <Route path="/" component={AppComponent}>
        <Route path="login" component={LoginComponent} />
        <Route path="register" component={RegisterComponent} />
    </Route>
)