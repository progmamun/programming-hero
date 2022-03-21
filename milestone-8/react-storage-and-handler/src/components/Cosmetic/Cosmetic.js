import React from 'react';

const Cosmetic = () => {
  const addToCart = id => {
    console.log('item added', id);
  };
  const addToCartWithParam = () => addToCart(id);
  return (
    <div className="product">
      <h2>Buy this: {name}</h2>
      <p>Only for: ${price}</p>
      <p>
        <small>It has id: {id}</small>
      </p>
      <button onClick={addToCartWithParam}>Add to cart</button>
    </div>
  );
};

export default Cosmetic;
