import React from 'react';
import Button from '../ui/Button';

function OrderButton(props) {
  return (
    <Button onClick={props.onClick}>
      <p>Order one for lunch today</p>
      <p>$16.90</p>
      <p>Delivered in 35 - 45 minutes</p>
    </Button>
  );
}

export default OrderButton;
