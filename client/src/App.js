import React, { useState } from 'react';
import HomePage from './HomePage';
import PaymentForm from './PaymentForm';
import Register from './Register';
import Login from './Login';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderContent = () => {
    switch (currentView) {
      case 'register':
        return <Register />;
      case 'login':
        return <Login />;
      case 'payment':
        return <PaymentForm />;
      default:
        return <HomePage />;
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
          <button
            onClick={() => setCurrentView('home')}
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
          </button>
          <button
            onClick={() => setCurrentView('register')}
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
          </button>
          <button
            onClick={() => setCurrentView('login')}
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
          </button>
          <button
            onClick={() => setCurrentView('payment')}
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
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
