import * as types from '../../redux/commonConstant'

// console.log(action.type,action.query,"reducer")
export default function(state = {loading: true}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'success':
            reState.loading = false
            break
        case 'error':
            reState.loading = false
            break;
        case types.L_SUCCESS:
            if(action.body){
                reState.data = action.body 
            }
            break;
           
    }
    return reState;
}