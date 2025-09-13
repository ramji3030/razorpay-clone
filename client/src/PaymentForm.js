import React, { useState } from 'react';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          card: {
            number: cardNumber,
            expiryDate,
            cvv,
            holderName: cardholderName
          },
          amount: parseFloat(amount)
        })
      });

      const data = await response.json();

      if (data.success) {
        setMessage(`Payment successful! Transaction ID: ${data.transactionId}`);
        // Reset form on success
        setCardNumber('');
        setAmount('');
        setExpiryDate('');
        setCvv('');
        setCardholderName('');
      } else {
        setMessage(`Payment failed: ${data.message}`);
      }
    } catch (error) {
      setMessage('Payment failed: Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
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
    backgroundColor: isLoading ? '#ccc' : '#2c5aa0',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: isLoading ? 'not-allowed' : 'pointer',
    marginTop: '15px'
  };

  const messageStyle = {
    marginTop: '15px',
    padding: '10px',
    borderRadius: '4px',
    textAlign: 'center',
    backgroundColor: message.includes('successful') ? '#d4edda' : '#f8d7da',
    color: message.includes('successful') ? '#155724' : '#721c24',
    border: message.includes('successful') ? '1px solid #c3e6cb' : '1px solid #f5c6cb'
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
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
            disabled={isLoading}
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
            disabled={isLoading}
          />
        </div>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: '1' }}>
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
              disabled={isLoading}
            />
          </div>
          <div style={{ flex: '1' }}>
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
              disabled={isLoading}
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
            disabled={isLoading}
          />
        </div>
        
        <button 
          style={buttonStyle} 
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Pay Now'}
        </button>
        
        {message && (
          <div style={messageStyle}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default PaymentForm;
