import * as types from '../../redux/commonConstant'

export default function(state = {loading: false},action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.L_REQUEST:
            reState.loading = true
            break
        case types.L_SUCCESS:
            reState.budd = action.body
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