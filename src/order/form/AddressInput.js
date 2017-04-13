import React, { Component } from 'react';
import TextInput from './TextInput';

class AddressInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address1Value: '',
      address2Value: '',
      postalCodeValue: '',
      cityValue: 'Vancouver'
    };
  }

  handleAddress1ValueChange(address) {
    this.setState({
      address1Value: address
    });

    this.fireAddressChange({ address1: address });
  }

  handleAddress2ValueChange(address) {
    this.setState({
      address2Value: address
    });

    this.fireAddressChange({ address2: address });
  }

  handlePostalCodeValueChange(postalCode) {
    this.setState({
      postalCodeValue: postalCode
    });

    this.fireAddressChange({ postalCode: postalCode });
  }

  fireAddressChange(change) {
    if (this.props.onAddressChange) {
      this.props.onAddressChange(Object.assign({
        address1: this.state.address1Value,
        address2: this.state.address2Value,
        postalCode: this.state.postalCodeValue,
        city: this.state.cityValue
      }, change));
    }
  }

  render () {
    return (
      <div className="AddressInput">
        <TextInput placeholder="Street Address" onValueChange={(addr) => this.handleAddress1ValueChange(addr)} />
        <TextInput placeholder="Apt/Unit #" onValueChange={(addr) => this.handleAddress2ValueChange(addr)} />
        <TextInput placeholder="Postal Code" onValueChange={(postCode) => this.handlePostalCodeValueChange(postCode)} />
        <TextInput placeholder="City" value={this.state.cityValue} disabled={true} />
      </div>
    );
  }
}

export default AddressInput;
