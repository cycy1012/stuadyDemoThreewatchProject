// import * as constants from '../../redux/commonConstant'
import * as constants from '../../redux/commonConstant'

export function backToTopStatus(ScrollTop){
	// console.log(ScrollTop)
	if(ScrollTop){
		return {
	        type: constants.BACKTOTOP_BLOCK,
	        height:ScrollTop
	    }
	}
	else{
		return {
	        type:  constants.BACKTOTOP_NONE,
	        height:ScrollTop
	    }
	}   
}

export function backToTop(){
	return{
		type: constants.BACKTOTOP
	}
} 

