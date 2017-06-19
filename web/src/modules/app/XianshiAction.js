import * as constants from '../../redux/commonConstant'

export function getxianshi(name){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'gainProductByarea',
        method: 'post',
        query: {area:name},

    }
}



export function loginName(){
	
}