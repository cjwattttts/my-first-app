import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => alert(`Viewing details for ${product.title}`)}>View Details</button>
    </div>
  );
};

export default ProductCard;