import React from 'react';

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <h2>${product.price}</h2>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;