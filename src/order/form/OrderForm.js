import React from 'react';
import Button from '../../ui/Button';
import TextInput from './TextInput';
import PhoneNumberInput from './PhoneNumberInput';
import AddressInput from './AddressInput';
import './OrderForm.css';

function OrderForm() {
  return (
    <form className="OrderForm">
      <h2>Where should we deliver your sandwich?</h2>
      <small>It looks like this is your first order. Tell us your address and
      we&#39;ll remember it for next time.</small>
      <TextInput placeholder="Name" />
      <PhoneNumberInput />
      <AddressInput />
      <p>Additional delivery instructions (optional):<br />
      <TextInput placeholder="For example: buzzer #, call on arrival, etc." multiline={true} /></p>
      <hr />
      <h2>Payment</h2>
      <p>Total price: $16.90</p>
      <p>We accept all major credit cards at your door.</p>
      <Button href="#/thank-you">
        <p>Send my sandwich!</p>
      </Button>
    </form>
  );
}

export default OrderForm;
