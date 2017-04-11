import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button(props) {
  return (
    <Link className="Button" to={props.href}>
      {props.children}
    </Link>
  );
}

export default Button;
