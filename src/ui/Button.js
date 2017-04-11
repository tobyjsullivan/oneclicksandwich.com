import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button(props) {
  return (
    <a className="Button" href={props.href}>
      {props.children}
    </a>
  );
}

export default Button;
