import React from 'react';
import TextInput from './TextInput';

function AddressInput() {
  return (
    <div className="AddressInput">
      <TextInput placeholder="Street Address" />
      <TextInput placeholder="Apt/Unit #" />
      <TextInput placeholder="Postal Code" />
      <TextInput placeholder="City" value="Vancouver" disabled={true} />
    </div>
  );
}

export default AddressInput;
