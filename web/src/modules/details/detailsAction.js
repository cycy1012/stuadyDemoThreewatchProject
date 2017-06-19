import * as constants from '../../redux/commonConstant'
import $ from '../listpage/jquery-3.1.1.js'

export function details(type){
    return {
		type: type
    }
}
export function qiehuan(){
	var btn_nav = $('.nav');
	btn_nav.on('click',function(){
		var ind=$(this).index();
		btn_nav.eq(ind).addClass('navon').siblings().removeClass('navon');
		 $('.tab_con').eq(ind).parents().children('.tab_con').hide();
		 $('.tab_con').eq(ind).show();
	});
}

export function ajaxDetail(id){
	return {
		types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
		path: 'gainProductById',
		method:'post',
		query:{'_id':id}
	}
}

export function ajaxCart(order){
	return {
		types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
		path: 'writeOrder',
		method:'post',
		query:{order:order}
	}
}