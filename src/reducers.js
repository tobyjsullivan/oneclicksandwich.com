import { combineReducers } from 'redux';
import {
  CREATE_ORDER_BEGIN,
  CREATE_ORDER_COMPLETE,
  ORDER_POPUP_SHOW,
  ORDER_POPUP_HIDE
 } from './actions';

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

function screens(state = {
  orderFormVisible: false,
  orderConfirmationVisible: false
}, action) {
  switch (action.type) {
    case ORDER_POPUP_SHOW:
      return Object.assign({}, state, { orderFormVisible: true });
    case ORDER_POPUP_HIDE:
      return Object.assign({}, state, { orderFormVisible: false });
    case CREATE_ORDER_COMPLETE:
      return Object.assign({}, state, {
        orderFormVisible: false,
        orderConfirmationVisible: true
      });
    default:
      return state;
  }
}

const appReducer = combineReducers({
  screens,
  orders,
});

export default appReducer;
