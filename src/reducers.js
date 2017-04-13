import { combineReducers } from 'redux';
import { CREATE_ORDER_BEGIN, CREATE_ORDER_COMPLETE } from './actions';

function orders(state = {
  saveStarted: false,
  saveFinished: false
}, action) {
  switch (action.type) {
    case CREATE_ORDER_BEGIN:
      console.log("Executing CREATE_ORDER_BEGIN");
      return Object.assign({}, state, { saveStarted: true });
    case CREATE_ORDER_COMPLETE:
      return Object.assign({}, state, { saveStarted: false, saveFinished: true });
    default:
      return state;
  }
}

const appReducer = combineReducers({
  orders,
});

export default appReducer;
