import * as constants from '../../redux/commonConstant'

// import $ from '../../../../libs/zepto.min.js'
export function filterDisplay(elem, targe){
	// console.log('Action',elem, targe)
	// console.log('Action');
	switch(elem.style.display){
		case 'block':
			return {type: 'hide', targe: targe}
		case 'none':
			return {type: 'show', targe: targe}		
	}
	return {type: 'hide', targe: targe}
}

export function getProducts(resState, response, sendAjaxFlat){
	console.log('Action')
	// console.log(resState)
	// console.log(response)
	var data = response.data;
	return{
		type: resState, 
		listProducts: data,
		sendAjaxFlat: sendAjaxFlat
	}
	
	
	// return{
	// 	types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
	// 	path: 'http://localhost/work/steal.php',
	// 	method: 'get',
	// 	query: {}
	// }
}
