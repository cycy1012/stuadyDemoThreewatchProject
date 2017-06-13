export default function(state = {
		filter_son0 : false,
		filter_son1 : false,
		filter_son2 : false,
		filter_son3 : false,
		listProducts : [],
		ajaxPage : 1,
		sendAjaxFlat : true
	},action){
		// console.log(state,action.type)
		let newState = JSON.parse(JSON.stringify(state));
		switch(action.type){
			case 'before':
				newState.sendAjaxFlat = false;
				break;
			case 'success':
				newState.listProducts = action.listProducts;
				newState.ajaxPage++;
				newState.sendAjaxFlat = true;
				break;
			case 'error':
				newState.sendAjaxFlat = true;
				break;
			case 'show':
				//首先把所有隐藏
				for(let attr in newState){
					newState[attr] = false;
				}
				newState[action.targe] = true;
				break;
			case 'hide':
				newState[action.targe] = false;
				break;
		}
		return newState;
}