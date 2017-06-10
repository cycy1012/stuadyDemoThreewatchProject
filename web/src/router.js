import React from 'react'
import {Route} from 'react-router'

import AppComponent from './modules/app/AppComponent'
import LoginComponent from './modules/login/LoginComponent'

export default (
	<Route>
    	<Route path="/" component={AppComponent}/>
        <Route path="login" component={LoginComponent}/>
    </Route>
)