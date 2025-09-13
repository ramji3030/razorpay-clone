import React, { useState } from 'react';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment of ₹${amount} initiated!`);
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '8px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    width: '100%',
    padding: '15px',
    backgroundColor: '#2c5aa0',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '15px'
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#2c5aa0', marginBottom: '30px' }}>
        Payment Form
      </h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label htmlFor="cardholderName">Cardholder Name:</label>
          <input
            type="text"
            id="cardholderName"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            style={inputStyle}
            placeholder="Enter cardholder name"
            required
          />
        </div>
        
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            style={inputStyle}
            placeholder="1234 5678 9012 3456"
            maxLength="19"
            required
          />
        </div>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              style={inputStyle}
              placeholder="MM/YY"
              maxLength="5"
              required
            />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              style={inputStyle}
              placeholder="123"
              maxLength="4"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="amount">Amount (₹):</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={inputStyle}
            placeholder="Enter amount"
            min="1"
            required
          />
        </div>
        
        <button type="submit" style={buttonStyle}>
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
