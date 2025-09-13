const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health check route
app.get('/ping', (req, res) => {
  res.status(200).json({ 
    message: 'Server is running!', 
    timestamp: new Date().toISOString() 
  });
});

// Payment endpoint
app.post('/api/pay', (req, res) => {
  const { card, amount } = req.body;
  
  // Basic validation
  if (!card || !amount) {
    return res.status(400).json({
      success: false,
      message: 'Card details and amount are required'
    });
  }
  
  // Mock payment processing
  res.status(200).json({
    success: true,
    message: 'Payment processed successfully',
    transactionId: 'txn_' + Math.random().toString(36).substr(2, 9),
    amount: amount
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
