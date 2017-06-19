import * as constants from '../../redux/commonConstant'
export function mamage(){
	return {
		types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
		path: 'buycar',
		method:'post',
	}
}