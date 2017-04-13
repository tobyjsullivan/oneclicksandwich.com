import React from 'react';
import PopupScreen from '../ui/PopupScreen';
import PageHeader from '../brand/PageHeader';

function OrderConfirmation() {
  return (
    <div className="OrderConfirmation">
      <PopupScreen>
        <PageHeader />
        <h2>Thank you!</h2>
        <p>Your order is on it&#39;s way.</p>
      </PopupScreen>
    </div>
  );
}

export default OrderConfirmation;
