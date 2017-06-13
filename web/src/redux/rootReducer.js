import login from '../modules/app/AppReducer.js'
import app from '../modules/login/LoginReducer'
import listPage from '../modules/listpage/listPageReducer.js'
import {routerReducer as router} from 'react-router-redux'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    login,
    router,
    app,
    listPage
})

export default rootReducer