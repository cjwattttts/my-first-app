import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const products = [
    {
      id: 1,
      title: 'Product 1',
      price: '$10',
      image: 'path/to/image1.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      price: '$20',
      image: 'path/to/image2.jpg',
    },
    {
      id: 3,
      title: 'Product 3',
      price: '$30',
      image: 'path/to/image3.jpg',
    },
  ];

  return (
    <div>
      <h1>Welcome to the Online Marketplace</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;