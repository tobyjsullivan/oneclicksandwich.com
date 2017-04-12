import React from 'react';
import './TextInput.css';

function TextInput(props) {
  if (props.multiline) {
    return (<MultiLineTextInput value={props.value} placeholder={props.placeholder} disabled={props.disabled} />);
  }

  return (<SingleLineTextInput value={props.value} placeholder={props.placeholder} disabled={props.disabled} />);
}

function SingleLineTextInput(props) {
  var sometimesProps = {};
  if (props.disabled) {
    sometimesProps.disabled = "disabled";
  }

  return (<input className="TextInput" {...sometimesProps} placeholder={props.placeholder} value={props.value} />);
}

function MultiLineTextInput(props) {
  var sometimesProps = {};
  if (props.disabled) {
    sometimesProps.disabled = "disabled";
  }

  return (<textarea className="TextInput" placeholder={props.placeholder} {...sometimesProps}>{props.value}</textarea>)
}

export default TextInput;
