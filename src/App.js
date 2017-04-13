import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuPage from './menu/MenuPage';
import OrderPopup from './order/OrderPopup';
import OrderConfirmation from './order/OrderConfirmation';
import './App.css';

const mapStateToProps = (state) => {
  return {
    orderFormVisible: state.screens.orderFormVisible,
    orderConfirmationVisible: state.screens.orderConfirmationVisible
  };
}

class App extends Component {
  render() {
    var popup = '';
    if (this.props.orderFormVisible) {
      popup = (<OrderPopup />);
    }

    if (this.props.orderConfirmationVisible) {
      popup = (<OrderConfirmation />);
    }

    return (
      <div className="App">
        <MenuPage />
        {popup}
      </div>
    );
  }
}
App = connect(mapStateToProps)(App);

export default App;
