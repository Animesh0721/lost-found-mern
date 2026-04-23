import React, { useState } from 'react';

const ItemForm = ({ onAddItem, editItem, onUpdate }) => {
  const [formData, setFormData] = useState({
    itemName: editItem?.itemName || '',
    description: editItem?.description || '',
    type: editItem?.type || 'Lost',
    location: editItem?.location || '',
    date: editItem?.date ? editItem.date.split('T')[0] : '',
    contactInfo: editItem?.contactInfo || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editItem) {
      onUpdate(editItem._id, formData);
    } else {
      onAddItem(formData);
    }

    setFormData({
      itemName: '',
      description: '',
      type: 'Lost',
      location: '',
      date: '',
      contactInfo: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="item-form">
      <h2>{editItem ? 'Update Item' : 'Add New Item'}</h2>

      <input
        type="text"
        name="itemName"
        placeholder="Item Name"
        value={formData.itemName}
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

      <select name="type" value={formData.type} onChange={handleChange} required>
        <option value="Lost">Lost</option>
        <option value="Found">Found</option>
      </select>

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="contactInfo"
        placeholder="Contact Info (Phone/Email)"
        value={formData.contactInfo}
        onChange={handleChange}
        required
      />

      <button type="submit" className="btn btn-primary">
        {editItem ? 'Update Item' : 'Add Item'}
      </button>
    </form>
  );
};

export default ItemForm;
