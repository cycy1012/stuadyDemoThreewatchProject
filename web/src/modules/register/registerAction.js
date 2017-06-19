import * as constants from '../../redux/commonConstant'

export function register(username, password){
    return {
        types: [constants.L_REQUEST, constants.L_SUCCESS, constants.L_FAILURE],
        path: 'register',
        method: 'post',
        query: {username, password}
    }
}