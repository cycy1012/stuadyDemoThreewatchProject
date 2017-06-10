import login from '../modules/login/LoginReducer'
import register from '../modules/register/registerReducer'
import {routerReducer as router} from 'react-router-redux'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    login,
    register,
    router
})

export default rootReducer