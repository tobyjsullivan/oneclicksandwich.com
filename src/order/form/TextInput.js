import React from 'react';
import './TextInput.css';

function TextInput(props) {
  if (props.multiline) {
    return (<MultiLineTextInput {...props} />);
  }

  return (<SingleLineTextInput {...props} />);
}

// Unwraps the onChange event to prevent details leaking
function handleChange(e, onValueChange) {
  if (onValueChange) {
    onValueChange(e.target.value);
  }
}

function SingleLineTextInput(props) {
  var sometimesProps = {};
  if (props.disabled) {
    sometimesProps.disabled = "disabled";
  }

  return (
    <input
      className="TextInput"
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => handleChange(e, props.onValueChange)}
      {...sometimesProps} />
    );
}

function MultiLineTextInput(props) {
  var sometimesProps = {};
  if (props.disabled) {
    sometimesProps.disabled = "disabled";
  }

  return (
    <textarea
      className="TextInput"
      placeholder={props.placeholder}
      onChange={(e) => handleChange(e, props.onValueChange)}
      {...sometimesProps}>{props.value}</textarea>
    )
}

export default TextInput;
