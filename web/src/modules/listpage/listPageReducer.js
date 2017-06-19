import * as types from '../../redux/commonConstant'

export default function(state = {
		filter_son0: false,
		filter_son1: false,
		filter_son2: false,
		filter_son3: false,
		listProducts: [],
		ajaxPage: 1,
		sendAjaxFlat: true,
		loading: false,
		wipeCache: true
	},action){
		let reState = JSON.parse(JSON.stringify(state));		
		switch(action.type){
			case 'show':
				//首先把所有隐藏			
				for(let attr in reState){
					//只获取属性为filter_son
					let foo = attr.slice(0,10);
					if(foo === "filter_son"){
						reState[attr] = false;	
					}	
				}
				reState[action.targe] = true;
				break;
			case 'hide':
				reState[action.targe] = false;
				break;
			case types.REQUEST:
				//禁止再发送请求
				reState.sendAjaxFlat = false;
			    reState.loading = true;
			    break;

			case types.SUCCESS:
				//wipeCache布尔类型,如果清空缓存(为true时)，则列表页的数据完全根据返回的数据生成
				//否则保留之前的数据，列表页继续往下加载
				//（用于条件筛选时重新加载列表页，懒加载时不清空缓存）
				if(action.payload.wipeCache && action.body){
					reState.listProducts = action.body;

				//判断action.listProducts是否存在
				}else if(action.body){
					(action.body||[]).map(function(item){
						reState.listProducts.push(item);
					});					
					// (action.body || []).map(function(item){
					// 	reState.listProducts.push(item);
					// });
				}
				reState.ajaxPage++;
				//允许发送请求
				reState.sendAjaxFlat = true;
				reState.loading = false;
				break;

			case types.FAILURE:
			    reState.error = action.error;
				reState.sendAjaxFlat = true;
			    reState.loading = false;
			    break;
		}
		return reState;
}