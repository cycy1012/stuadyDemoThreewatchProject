import app from '../modules/app/AppReducer.js'
import login from '../modules/login/LoginReducer'
import {routerReducer as router} from 'react-router-redux'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    login,
    router,
    app,
})

export default rootReducer