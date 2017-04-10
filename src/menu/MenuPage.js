import React from 'react';
import PageHeader from '../brand/PageHeader';
import OrderButton from './OrderButton';
import FeatureItem from './FeatureItem';
import './MenuPage.css';

function MenuPage(props) {
  return (
    <div className="MenuPage">
      <PageHeader />
      <div className="flash">
        <p>Proudly serving downtown Vancouver!</p>
      </div>
      <FeatureItem />
      <OrderButton />
    </div>
  );
}

export default MenuPage;
