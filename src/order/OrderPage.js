import React from 'react';
import Button from '../ui/Button';
import './OrderPage.css';

function OrderPage() {
  return (
    <div className="OrderPage">
      <form className="form">
        <h2>Where should we deliver your sandwich?</h2>
        <small>It looks like this is your first order. Tell us your address and
        we&#39;ll remember it for next time.</small>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Street Address" />
        <input type="text" placeholder="Apt/Unit #" />
        <input type="text" placeholder="Postal Code" />
        <input type="text" placeholder="City" value="Vancouver"
        disabled="disabled" />
        <p>Additional delivery instructions (optional):<br />
        <small>For example: buzzer #, call on arrival, etc.</small>
        <textarea></textarea></p>
        <hr />
        <h2>Payment</h2>
        <p>Total price: $16.90</p>
        <p>We accept all major credit cards at your door.</p>
        <Button href="/thank-you">
          <p>Send my sandwich!</p>
        </Button>
      </form>
    </div>
  );
}

export default OrderPage;
