import React, { Component } from 'react';
import TextInput from './TextInput';

class PhoneNumberInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberValue: (props.value || '')
    };
  }

  handleNumberValueChange(value) {
    this.setState({ numberValue: value });

    if (this.props.onPhoneNumberChange) {
      this.props.onPhoneNumberChange(value);
    }
  }

  render() {
    return (
      <TextInput placeholder="Phone Number" value={this.state.numberValue} onValueChange={(value) => this.handleNumberValueChange(value)} />
    );
  }
}

export default PhoneNumberInput;
