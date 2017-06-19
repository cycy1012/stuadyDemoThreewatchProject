import * as constants from '../../redux/commonConstant'

export function Addcommit(onlyUsername,waname,waphone,address,xiang){
	return {
		types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
		path: 'address',
		method:'post',
		query:{onlyUsername,waname,waphone,address,xiang},
	}
}