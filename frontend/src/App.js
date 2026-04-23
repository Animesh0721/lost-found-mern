import React, { useState, useEffect } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      setUser(JSON.parse(storedUser));
      setCurrentPage('dashboard');
    }
  }, []);

  const handleRegisterSuccess = () => {
    const storedUser = localStorage.getItem('user');
    setUser(JSON.parse(storedUser));
    setCurrentPage('dashboard');
  };

  const handleLoginSuccess = () => {
    const storedUser = localStorage.getItem('user');
    setUser(JSON.parse(storedUser));
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setCurrentPage('login');
  };

  const handleSwitchToRegister = () => {
    setCurrentPage('register');
  };

  const handleSwitchToLogin = () => {
    setCurrentPage('login');
  };

  return (
    <div className="App">
      {currentPage === 'login' && <Login onLoginSuccess={handleLoginSuccess} onSwitchToRegister={handleSwitchToRegister} />}
      {currentPage === 'register' && (
        <Register onRegisterSuccess={handleRegisterSuccess} onSwitchToLogin={handleSwitchToLogin} />
      )}
      {currentPage === 'dashboard' && user && (
        <Dashboard onLogout={handleLogout} user={user} />
      )}
    </div>
  );
}

export default App;
