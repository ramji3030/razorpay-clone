import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './HomePage';
import PaymentForm from './PaymentForm';
import Register from './Register';
import Login from './Login';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderContent = () => {
    switch (currentView) {
      case 'register':
        return (
          <motion.div
            key="register"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Register />
          </motion.div>
        );
      case 'login':
        return (
          <motion.div
            key="login"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Login />
          </motion.div>
        );
      case 'payment':
        return (
          <motion.div
            key="payment"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <PaymentForm />
          </motion.div>
        );
      default:
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <HomePage />
          </motion.div>
        );
    }
  };

  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation Bar */}
      <nav style={{
        backgroundColor: '#f8f9fa',
        padding: '15px 20px',
        borderBottom: '1px solid #dee2e6',
        marginBottom: '20px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '15px' }}>
          <motion.button
            onClick={() => setCurrentView('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              padding: '8px 16px',
              backgroundColor: currentView === 'home' ? '#007bff' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Home
          </motion.button>
          <motion.button
            onClick={() => setCurrentView('register')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              padding: '8px 16px',
              backgroundColor: currentView === 'register' ? '#007bff' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Register
          </motion.button>
          <motion.button
            onClick={() => setCurrentView('login')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              padding: '8px 16px',
              backgroundColor: currentView === 'login' ? '#28a745' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Login
          </motion.button>
          <motion.button
            onClick={() => setCurrentView('payment')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              padding: '8px 16px',
              backgroundColor: currentView === 'payment' ? '#ffc107' : '#6c757d',
              color: currentView === 'payment' ? 'black' : 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Payment
          </motion.button>
        </div>
      </nav>
      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
