import * as constants from '../../redux/commonConstant'

export function mamage(){
	return {
		types: [constants.L_REQUEST, constants.L_SUCCESS, constants.L_FAILURE],
		path: 'mamage',
		method:'post',
		

	}
}

export function delAddress(address){
	return {
		types: [constants.L_REQUEST, constants.L_SUCCESS, constants.L_FAILURE],
		path: 'delAddress',
		method:'post',
		query:{address}

	}
}
