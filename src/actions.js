import fetch from 'isomorphic-fetch';

export const CREATE_ORDER = 'CREATE_ORDER';
export const CREATE_ORDER_BEGIN = 'CREATE_ORDER_BEGIN';
export const CREATE_ORDER_COMPLETE = 'CREATE_ORDER_COMPLETE';
export const ORDER_POPUP_SHOW = 'ORDER_POPUP_SHOW';
export const ORDER_POPUP_HIDE = 'ORDER_POPUP_HIDE';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || `http://localhost:8080`;

export function createOrder(order) {
  return (dispatch) => {
    dispatch(beginCreateOrder());

    var content = JSON.stringify({
      name: order.name,
      phone: order.phone,
      address1: order.address1,
      address2: order.address2,
      postalCode: order.postalCode,
      additionalInstructions: order.instructions
    });

    var fetchOpts = {
      method: 'POST',
      body: content,
      headers: {
        'Content-Type': 'application/json',
      }
    }

    return fetch(`${API_BASE_URL}/orders`, fetchOpts)
      .then(response => {
        dispatch(completeCreateOrder());
      });
  }
};

export function beginCreateOrder() {
  return {
    type: CREATE_ORDER_BEGIN
  };
}

export function completeCreateOrder() {
  return {
    type: CREATE_ORDER_COMPLETE
  };
}

export function orderPopupShow() {
  return {
    type: ORDER_POPUP_SHOW
  };
}

export function orderPopupHide() {
  return {
    type: ORDER_POPUP_HIDE
  };
}
