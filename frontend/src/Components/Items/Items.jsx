import React from 'react';
import './Items.css';

const Items = ({ image, name, new_price, old_price }) => {
  return (
    <div className="item">
      <img src={image} alt={name} className="item-image" />
      <p>{name}</p>
      <div className="items-prices">
        <div className="items-new-prices">${new_price}</div>
        <div className="items-old-prices">${old_price}</div> {/* Old price will have line-through */}
      </div>
    </div>
  );
};

export default Items;
