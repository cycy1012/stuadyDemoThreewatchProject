import * as constants from '../../redux/commonConstant'

export function mamage(){
	return {
		types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
		path: 'mamage',
		method:'post',
		

	}
}

export function delAddress(address){
	return {
		types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
		path: 'delAddress',
		method:'post',
		query:{address}

	}
}
