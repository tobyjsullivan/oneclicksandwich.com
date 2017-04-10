import React from 'react';
import './FeatureItem.css';

function FeatureItem(props) {
  return (
    <div className="FeatureItem">
      <h2>Today&#39;s Sandwich</h2>
      <img className="image" src="sandwich001.jpg" alt="Chicken Breast sandwich" />
      <p className="caption">Chicken Breast</p>
      <p>Steeped in citrus juices and coconut milk. Secret sauce, romain
      lettuce, cilantro, pickled jalapenos, and crunchy caramelized onions
      atop a toasty baguette.</p>
    </div>
  );
}

export default FeatureItem;
