var {INCREMENT_COUNTER, DECREMENT_COUNTER} = require('../buycar/BuycarConstant.js');

module.exports = function(state=1, action){
	switch(action.type){
		case INCREMENT_COUNTER:
			state += 1;
			break;
		case DECREMENT_COUNTER:
			state -= 1;
			break;
		default:
			state;
	}
	return state;
}