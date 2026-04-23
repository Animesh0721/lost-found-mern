import React, { useState, useEffect } from 'react';
import ItemForm from '../components/ItemForm';
import ItemCard from '../components/ItemCard';
import { addItem, getAllItems, updateItem, deleteItem, searchItems } from '../services/api';
import '../styles/Dashboard.css';

const Dashboard = ({ onLogout, user }) => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editItem, setEditItem] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await getAllItems();
      setItems(response.data.items);
      setFilteredItems(response.data.items);
      setError('');
    } catch (err) {
      setError('Failed to fetch items');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddItem = async (formData) => {
    try {
      await addItem(formData);
      setSuccessMessage('Item added successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
      fetchItems();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add item');
    }
  };

  const handleUpdateItem = async (id, formData) => {
    try {
      await updateItem(id, formData);
      setSuccessMessage('Item updated successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
      setEditItem(null);
      fetchItems();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update item');
    }
  };

  const handleDeleteItem = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await deleteItem(id);
        setSuccessMessage('Item deleted successfully!');
        setTimeout(() => setSuccessMessage(''), 3000);
        fetchItems();
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to delete item');
      }
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setFilteredItems(items);
      return;
    }

    try {
      const response = await searchItems(searchQuery);
      setFilteredItems(response.data.items);
    } catch (err) {
      setError('Search failed');
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setFilteredItems(items);
  };

  const handleEditItem = (item) => {
    setEditItem(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditItem(null);
  };

  const userItems = filteredItems.filter((item) => item.user._id === user?.id);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Lost & Found Dashboard</h1>
        <div className="header-actions">
          <p>Welcome, {user?.name}</p>
          <button className="btn btn-logout" onClick={onLogout}>
            Logout
          </button>
        </div>
      </header>

      {successMessage && <div className="success-message">{successMessage}</div>}
      {error && <div className="error-message">{error}</div>}

      <div className="dashboard-content">
        <div className="left-section">
          <ItemForm
            onAddItem={handleAddItem}
            editItem={editItem}
            onUpdate={handleUpdateItem}
          />
          {editItem && (
            <button className="btn btn-secondary" onClick={handleCancelEdit}>
              Cancel Edit
            </button>
          )}
        </div>

        <div className="right-section">
          <div className="search-section">
            <h2>Search Items</h2>
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search by item name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
              {searchQuery && (
                <button type="button" className="btn btn-secondary" onClick={handleClearSearch}>
                  Clear
                </button>
              )}
            </form>
          </div>

          <div className="items-section">
            <h2>
              {searchQuery ? `Search Results (${filteredItems.length})` : `All Items (${filteredItems.length})`}
            </h2>

            {loading ? (
              <p className="loading">Loading items...</p>
            ) : filteredItems.length === 0 ? (
              <p className="no-items">No items found.</p>
            ) : (
              <div className="items-grid">
                {filteredItems.map((item) => (
                  <ItemCard
                    key={item._id}
                    item={item}
                    isOwner={item.user._id === user?.id}
                    onDelete={handleDeleteItem}
                    onEdit={handleEditItem}
                  />
                ))}
              </div>
            )}

            {userItems.length > 0 && (
              <div className="my-items-section">
                <h3>My Items ({userItems.length})</h3>
                <div className="items-grid">
                  {userItems.map((item) => (
                    <ItemCard
                      key={item._id}
                      item={item}
                      isOwner={true}
                      onDelete={handleDeleteItem}
                      onEdit={handleEditItem}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
