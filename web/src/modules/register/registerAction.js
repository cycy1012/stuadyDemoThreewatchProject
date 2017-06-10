import * as constants from '../../redux/commonConstant'

export function register(username, password){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'register',
        method: 'post',
        query: {username, password}
    }
}