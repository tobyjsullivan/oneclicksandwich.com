import React from 'react';
import './Button.css';

function Button(props) {
  if (props.processing) {
    return (
      <a className="Button disabled">
        <p>Please wait...</p>
      </a>
    );
  }

  return (
    <a className="Button" href={props.href} onClick={props.onClick}>
      {props.children}
    </a>
  );
}

export default Button;
