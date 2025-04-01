import React from 'react';
import Home from './pages/Home';

const Home = () => {
  const products = [
    { id: 1, name: 'Laptop', price: '$500', description: 'A powerful laptop' },
    { id: 2, name: 'Phone', price: '$300', description: 'A smartphone with great features' },
    { id: 3, name: 'Headphones', price: '$50', description: 'Noise-cancelling headphones' },
  ];

  return (
    <div>
      <h1>Marketplace</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '5px',
              width: '200px',
            }}
          >
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;