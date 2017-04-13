import React, { Component } from 'react';
import './PopupScreen.css';

class PopupScreen extends Component {
  render() {
    return (
      <div className="PopupScreen" onClick={this.props.onClose}>
        <div className="container" onClick={(e) => {e.stopPropagation()}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default PopupScreen;
