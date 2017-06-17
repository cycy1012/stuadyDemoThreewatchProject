import * as constants from '../../redux/commonConstant'


export function filterDisplay(elem, targe){
	let obj = {targe: targe}
	switch(elem.style.display){
		case 'block':
			obj.type = 'hide';
			break;
		case 'none':
			obj.type = 'show';
			break;			
	}
	return obj;
}


//ajax
// export function getProducts(resState, response, sendAjaxFlat, wipeCache){
// 	// var data = response.data;//php接口
// 	// return{
// 	// 	types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
// 	// 	path: 'http://localhost/work/steal.php',
// 	// 	method: 'get',
// 	// 	query: {}
// 	// }
// }


export function getProducts(keyword, ajaxPage, wipeCache){
	return{
		types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
		path: 'searchProduct',
		method: 'post',
		query: {classify: keyword, page: ajaxPage, limit: 10},
		wipeCache: wipeCache
	}
}