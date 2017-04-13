import React, { Component } from 'react';
import Button from '../../ui/Button';
import TextInput from './TextInput';
import PhoneNumberInput from './PhoneNumberInput';
import AddressInput from './AddressInput';
import './OrderForm.css';

class OrderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameValue: '',
      phoneNumberValue: '',
      addressValue: {},
      instructionsValue: ''
    };
  }

  handleNameValueChange(name) {
    this.setState({ nameValue: name });
  }

  handlePhoneNumberChange(num) {
    this.setState({ phoneNumberValue: num });
  }

  handleAddressChange(address) {
    this.setState({ addressValue: address });
  }

  handleInstructionsValueChange(instructions) {
    this.setState({ instructionsValue: instructions });
  }

  render() {
    return (
      <form className="OrderForm">
        <h2>Where should we deliver your sandwich?</h2>
        <small>It looks like this is your first order. Tell us your address and
        we&#39;ll remember it for next time.</small>
        <TextInput placeholder="Name" onValueChange={(name) => this.handleNameValueChange(name)} />
        <PhoneNumberInput onPhoneNumberChange={(num) => this.handlePhoneNumberChange(num)} />
        <AddressInput onAddressChange={(addr) => this.handleAddressChange(addr)} />
        <p>Additional delivery instructions (optional):<br />
        <TextInput onValueChange={(instructions) => this.handleInstructionsValueChange(instructions)} placeholder="For example: buzzer #, call on arrival, etc." multiline={true} /></p>
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
}

export default OrderForm;
