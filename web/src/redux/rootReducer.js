import app from '../modules/app/AppReducer.js'
import login from '../modules/login/LoginReducer'
import register from '../modules/register/registerReducer'
import details from '../modules/details/detailsReducer'
import listPage from '../modules/listpage/listPageReducer.js'
import banner from '../modules/banner/BannerReducer'
import xianshi from '../modules/app/XianshiReducer'

import {routerReducer as router} from 'react-router-redux'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    login,
    router,
    app,
    register,
    details,
    listPage,
    banner,
    xianshi
})

export default rootReducer