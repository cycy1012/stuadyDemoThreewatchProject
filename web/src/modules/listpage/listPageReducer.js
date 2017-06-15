export default function(state = {
		filter_son0 : false,
		filter_son1 : false,
		filter_son2 : false,
		filter_son3 : false,
		listProducts : [],
		ajaxPage : 1,
		sendAjaxFlat : true,
		loading : true
	},action){
		// console.log(state,action.type)
		let newState = JSON.parse(JSON.stringify(state));
		switch(action.type){
			case 'before':
				newState.sendAjaxFlat = false;
				newState.loading = true;
				break;
			case 'success':
				console.log(action.listProducts);
				(action.listProducts || []).map(function(item){
					newState.listProducts.push(item);
				});
				newState.ajaxPage++;
				newState.sendAjaxFlat = true;
				newState.loading = false;
				break;
			case 'error':
				newState.sendAjaxFlat = true;
				newState.loading = false;
				break;
			case 'show':
				//首先把所有隐藏			
				for(let attr in newState){
					//只获取属性为filter_son
					let foo = attr.slice(0,10);
					if(foo === "filter_son"){
						newState[attr] = false;	
					}	
				}
				newState[action.targe] = true;
				break;
			case 'hide':
				newState[action.targe] = false;
				break;
		}
		return newState;
}