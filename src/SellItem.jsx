import React, { useState } from 'react';

const SellItem = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Item listed for sale:', formData);
    alert('Item listed successfully!');
    setFormData({ name: '', price: '', description: '' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sell an Item</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px' }}>
          List Item
        </button>
      </form>
    </div>
  );
};

export default SellItem;