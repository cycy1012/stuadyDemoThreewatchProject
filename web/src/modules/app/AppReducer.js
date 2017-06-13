//处理 ajax 返回数据和一些状态管理
//发起 ajax 请求前 => show up loading
//ajax 完成之后 => loading hided $.get('url', function(response){})  => {status: true, data: [{}]}
// action => store = createStroe(reducer, 中间件) => reducer

import * as types from '../../redux/commonConstant'

export default function(state = {display: 'none',height:0}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.BACKTOTOP_BLOCK:
            reState.display = 'block'
            reState.height = action.height
            break
        case types.BACKTOTOP_NONE:
            reState.display = 'none'
            reState.height = action.height
            break  
    }
    
    return reState;

}