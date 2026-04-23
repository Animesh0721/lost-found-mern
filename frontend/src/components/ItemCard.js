import React from 'react';

const ItemCard = ({ item, isOwner, onDelete, onEdit }) => {
  const itemDate = new Date(item.date).toLocaleDateString();

  return (
    <div className="item-card">
      <div className="item-header">
        <h3>{item.itemName}</h3>
        <span className={`badge ${item.type === 'Lost' ? 'badge-lost' : 'badge-found'}`}>
          {item.type}
        </span>
      </div>

      <p className="item-description">{item.description}</p>

      <div className="item-details">
        <p>
          <strong>Location:</strong> {item.location}
        </p>
        <p>
          <strong>Date:</strong> {itemDate}
        </p>
        <p>
          <strong>Contact:</strong> {item.contactInfo}
        </p>
        <p>
          <strong>Posted by:</strong> {item.user.name} ({item.user.email})
        </p>
      </div>

      {isOwner && (
        <div className="item-actions">
          <button className="btn btn-edit" onClick={() => onEdit(item)}>
            Edit
          </button>
          <button className="btn btn-delete" onClick={() => onDelete(item._id)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
