import React from 'react';
import './OrderButton.css';

function OrderButton(props) {
  return (
    <div className="OrderButton">
      <a href="#">
        <p>Order one for lunch</p>
        <p>$16.90</p>
        <p>Delivered in 35 - 45 minutes</p>
      </a>
    </div>
  );
}

export default OrderButton;
