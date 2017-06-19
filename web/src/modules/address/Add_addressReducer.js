
import * as types from '../../redux/commonConstant'
// console.log(action.type,action.query,"reducer")
export default function(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.L_REQUEST:

            break
        case types.L_SUCCESS:
            reState.data = action.body
            reState.lastFetched = action.lastFetched
            reState.loading = false
            break
        case types.L_FAILURE:
            reState.error = action.error
            reState.loading = false
            break
    }
    return reState;
}