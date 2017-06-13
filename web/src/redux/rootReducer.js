import login from '../modules/login/LoginReducer'
import register from '../modules/register/registerReducer'
import details from '../modules/details/detailsReducer'
import {routerReducer as router} from 'react-router-redux'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    login,
    register,
    details,
    router
})

export default rootReducer