import React, { Component } from 'react';
import { connect } from 'react-redux';
import { orderPopupShow } from '../actions';
import PageHeader from '../brand/PageHeader';
import OrderButton from './OrderButton';
import FeatureItem from './FeatureItem';
import './MenuPage.css';

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderButtonClick: () => dispatch(orderPopupShow())
  };
}

class MenuPage extends Component {
  render() {
    return (
      <div className="MenuPage">
        <div className="container">
          <PageHeader />
          <div className="flash">
            <p>Proudly serving downtown Vancouver!</p>
          </div>
          <FeatureItem />
          <OrderButton onClick={this.props.onOrderButtonClick} />
          <p><a href="https://termsfeed.com/terms-service/8074a55ca8b99266abbc97e7cd8c9d15">Terms of Service</a></p>
        </div>
      </div>
    );
  }
}
MenuPage = connect(undefined, mapDispatchToProps)(MenuPage);

export default MenuPage;
