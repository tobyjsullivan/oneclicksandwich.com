import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MenuPage from './menu/MenuPage';
import OrderPage from './order/OrderPage';
import OrderConfirmationPage from './order/OrderConfirmationPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={MenuPage} />
        <Route path="/order" component={OrderPage} />
        <Route path="/thank-you" component={OrderConfirmationPage} />
      </div>
    );
  }
}

export default App;
