export default function(state = {
		filter_son0: false,
		filter_son1: false,
		filter_son2: false,
		filter_son3: false,
		listProducts: [],
		ajaxPage: 1,
		sendAjaxFlat: true,
		loading: true,
		wipeCache: true
	},action){
		let newState = JSON.parse(JSON.stringify(state));
		newState.wipeCache = action.wipeCache;
		// console.log(action.wipeCache,'reducer');
		switch(action.type){
			case 'before':
				newState.sendAjaxFlat = false;
				newState.loading = true;
				break;
			case 'success':
				//如果清空缓存，则列表页的数据完全根据返回的数据生成
				//否则保留之前的数据，列表页继续往下加载
				//（用于条件筛选时重新加载列表页）
				// newState.wipeCache = action.wipeCache;
				// console.log(newState.wipeCache,action.wipeCache,'reducer');
				if(action.wipeCache && action.listProducts){
					newState.listProducts = action.listProducts;

					//判断action.listProducts是否存在
				}else if(action.listProducts){
					action.listProducts.map(function(item){
						newState.listProducts.push(item);
					});					
					// (action.listProducts || []).map(function(item){
					// 	newState.listProducts.push(item);
					// });
				}
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