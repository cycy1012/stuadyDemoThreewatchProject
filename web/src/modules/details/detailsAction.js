import * as constants from '../../redux/commonConstant'

export function details(username, password){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        

    }
}

// path: 'login',
//         method: 'post',
//         query: {username, password},