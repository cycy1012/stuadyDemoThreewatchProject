import * as constants from '../../redux/commonConstant'

export function getBanner(types){
    return {
        types: [constants.B_REQUEST, constants.B_SUCCESS, constants.B_FAILURE],
        path: 'gainProductByarea',
        method: 'post',
        query: {area:types},

    }
}



export function loginName(){
	
}