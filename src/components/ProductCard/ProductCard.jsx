import React from 'react'
import './ProductCard.css';
import { useCart } from '../../contexts/CartContext';
import { useState } from 'react';

function ProductCard({ id, title, price, image }) {
  const { dispatch } = useCart();
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id,
        title,
        price,
        image,
      },
    });
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1500); // Hide message after 1.5 seconds
  }
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">{price}</p>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
      {showMessage && (
        <p className='add-confirm'>Added to Cart!</p>
      )}
    </div>
  );
}

export default ProductCard