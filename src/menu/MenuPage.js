import React from 'react';
import PageHeader from '../brand/PageHeader';
import OrderButton from './OrderButton';
import FeatureItem from './FeatureItem';
import './MenuPage.css';

function MenuPage() {
  return (
    <div className="MenuPage">
      <PageHeader />
      <div className="flash">
        <p>Proudly serving downtown Vancouver!</p>
      </div>
      <FeatureItem />
      <OrderButton />
      <p><a href="https://termsfeed.com/terms-service/8074a55ca8b99266abbc97e7cd8c9d15">Terms of Service</a></p>
    </div>
  );
}

export default MenuPage;
