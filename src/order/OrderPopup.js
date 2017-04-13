import React, { Component } from 'react';
import { connect } from 'react-redux';
import { orderPopupHide } from '../actions';
import PopupScreen from '../ui/PopupScreen';
import OrderForm from './form/OrderForm';
import './OrderPopup.css'

const mapDispatchToProps = (dispatch) => {
  return  {
    onPopupClose: () => dispatch(orderPopupHide())
  };
}

class OrderPopup extends Component {
  render() {
    return (
      <div className="OrderPopup">
        <PopupScreen onClose={this.props.onPopupClose}>
          <OrderForm />
        </PopupScreen>
      </div>
    );
  }
}
OrderPopup = connect(undefined, mapDispatchToProps)(OrderPopup);

export default OrderPopup;
