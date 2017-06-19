import * as constants from '../../redux/commonConstant'

export function Addcommit(onlyUsername,waname,waphone,address,xiang){
	return {
		types: [constants.L_REQUEST, constants.L_SUCCESS, constants.L_FAILURE],
		path: 'address',
		method:'post',
		query:{onlyUsername,waname,waphone,address,xiang},
	}
}