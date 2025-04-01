import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  // Mock product data
  const product = {
    id,
    name: 'Sample Product',
    price: '$100',
    description: 'This is a detailed description of the product.',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
};

export default ProductDetails;