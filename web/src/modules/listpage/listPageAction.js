import * as constants from '../../redux/commonConstant'

// import $ from '../../../../libs/zepto.min.js'
export function filterDisplay(elem, targe){
	// console.log('Action',elem, targe)
	// console.log('Action');
	let obj = {targe: targe}
	switch(elem.style.display){
		case 'block':
			// return {type: 'hide', targe: targe}
			obj.type = 'hide';
			break;
		case 'none':
			// return {type: 'show', targe: targe}		
			obj.type = 'show';
			break;			
	}
	return obj;
	// return {type: 'hide', targe: targe}
}

export function getProducts(resState, response, sendAjaxFlat, wipeCache){
	// console.log(wipeCache,'action')
	return{
		type: resState, 
		listProducts: response,
		sendAjaxFlat: sendAjaxFlat,
		wipeCache: wipeCache
	}	

	// var data = response.data;//php接口
	// return{
	// 	types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
	// 	path: 'http://localhost/work/steal.php',
	// 	method: 'get',
	// 	query: {}
	// }
}


// export function getProducts(page){
// 	return{
// 		types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
// 		path: 'http://10.3.133.20/work/steal.php',
// 		method: 'get',
// 		query: {page : page}
// 	}
	
// }