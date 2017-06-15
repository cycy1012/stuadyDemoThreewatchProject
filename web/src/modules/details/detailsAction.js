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
export function addCart(){
	// $('.success').css('display','block');
	// $('#btn_addCart').css('display','block')
	$('#btn_addCart').show();
	// $('.success').stop(true).show(200).delay(400).hide(300);		
}
export function goodChoose(){
	var btn_choose=$('.good_choose');
		btn_choose.on('click',function(){
			$('.detail_pic').fadeIn(500);
			$('.detail_bottom').show();
		})
		var btn_closegood = $('.bottom_infoclose');
		btn_closegood.on('click',function(){
			$('.detail_bottom').hide();
			$('.detail_pic').fadeOut(300);

		})
} 

export function backTop(){console.log(scrollY)
	
	window.scrollTo(0,0);
	$('.backTop').animate({
		opacity:0,
		top:20
	},2000);
	console.log(scrollY)
}
export function ajaxDetails(){
	
}