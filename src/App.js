import React, { Component } from 'react';
import MenuPage from './menu/MenuPage';
import OrderPage from './order/OrderPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuPage />
      </div>
    );
  }
}

export default App;
