import * as constants from '../../redux/commonConstant'

export function login(username, password){
    return {
        types: [constants.L_REQUEST, constants.L_SUCCESS, constants.L_FAILURE],
        path: 'login',
        method: 'post',
        query: {username, password},

    }
}



export function loginName(){
	
}

// export function login(username, password){
//     return {
//         type: 'aa'
//     }
// }