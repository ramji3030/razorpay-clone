# Deployment Guide

This guide provides step-by-step instructions for deploying the Razorpay Clone application with frontend on Vercel and backend on Render.

## 📋 Prerequisites

- GitHub account
- Vercel account (free tier available)
- Render account (free tier available)
- Node.js and npm installed locally for testing

## 🚀 Frontend Deployment on Vercel

### Step 1: Prepare Your Repository

1. Ensure your code is pushed to GitHub
2. Make sure your `client` folder contains the React frontend code
3. Verify that `package.json` exists in the `client` directory

### Step 2: Deploy to Vercel

1. **Visit Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your `razorpay-clone` repository

3. **Configure Build Settings**
   - **Framework Preset**: React
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

4. **Environment Variables**
   - Add these environment variables in Vercel dashboard:
   ```
   REACT_APP_API_BASE_URL=https://your-render-backend-url.onrender.com
   REACT_APP_RAZORPAY_KEY_ID=your_razorpay_key_id
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your frontend will be available at `https://your-project-name.vercel.app`

## 🔧 Backend Deployment on Render

### Step 1: Prepare Backend

1. Ensure your `server` folder contains:
   - `package.json` with all dependencies
   - Main server file (usually `index.js` or `server.js`)
   - All required environment variables documented

### Step 2: Deploy to Render

1. **Visit Render Dashboard**
   - Go to [render.com](https://render.com)
   - Sign in with your GitHub account

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select your `razorpay-clone` repository

3. **Configure Service Settings**
   - **Name**: `razorpay-clone-backend`
   - **Environment**: `Node`
   - **Region**: Choose closest to your users
   - **Branch**: `main`
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start` or `node index.js`

4. **Environment Variables**
   Add these in Render dashboard:
   ```
   NODE_ENV=production
   PORT=10000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   FRONTEND_URL=https://your-vercel-app-url.vercel.app
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment (usually 2-5 minutes)
   - Your backend will be available at `https://your-service-name.onrender.com`

## ⚙️ Environment Variables Setup

### Frontend (.env)

Create a `.env` file in your `client` directory:

```env
# Frontend Environment Variables
REACT_APP_API_BASE_URL=http://localhost:5000
REACT_APP_RAZORPAY_KEY_ID=rzp_test_your_key_id
```

### Backend (.env)

Create a `.env` file in your `server` directory:

```env
# Backend Environment Variables
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/razorpay-clone
JWT_SECRET=your-super-secret-jwt-key
RAZORPAY_KEY_ID=rzp_test_your_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
FRONTEND_URL=http://localhost:3000
```

## 🔗 API Integration Example

### Custom Backend API Base URL

In your React components, use the environment variable for API calls:

```javascript
// utils/api.js
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

class ApiService {
  static async fetchWithAuth(endpoint, options = {}) {
    const token = localStorage.getItem('token');
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  }

  // Authentication APIs
  static async register(userData) {
    return this.fetchWithAuth('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  static async login(credentials) {
    return this.fetchWithAuth('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  // Payment APIs
  static async createPaymentOrder(orderData) {
    return this.fetchWithAuth('/api/payments/create-order', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  }

  static async verifyPayment(paymentData) {
    return this.fetchWithAuth('/api/payments/verify', {
      method: 'POST',
      body: JSON.stringify(paymentData),
    });
  }
}

export default ApiService;
```

### Usage in Components

```javascript
// components/PaymentForm.js
import React, { useState } from 'react';
import ApiService from '../utils/api';

const PaymentForm = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async (amount) => {
    try {
      setLoading(true);
      
      // Create order on backend
      const order = await ApiService.createPaymentOrder({
        amount: amount * 100, // Convert to paise
        currency: 'INR',
      });

      // Initialize Razorpay
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: 'Razorpay Clone',
        description: 'Payment for services',
        handler: async function (response) {
          try {
            // Verify payment on backend
            const verification = await ApiService.verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            
            alert('Payment successful!');
          } catch (error) {
            alert('Payment verification failed!');
          }
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9000090000',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment initiation failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button 
        onClick={() => handlePayment(500)} 
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Pay ₹500'}
      </button>
    </div>
  );
};

export default PaymentForm;
```

## 🔍 Post-Deployment Checklist

### Frontend (Vercel)
- [ ] Application loads without errors
- [ ] API calls are reaching the backend
- [ ] Environment variables are properly set
- [ ] Razorpay integration works
- [ ] Responsive design works on mobile

### Backend (Render)
- [ ] Server starts without errors
- [ ] Database connection is established
- [ ] API endpoints respond correctly
- [ ] JWT authentication works
- [ ] CORS is properly configured
- [ ] Razorpay webhooks (if any) are working

### General
- [ ] Frontend can communicate with backend
- [ ] Payment flow works end-to-end
- [ ] User registration and login work
- [ ] Error handling is working properly

## 🛠️ Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure FRONTEND_URL is set correctly in backend
   - Check CORS middleware configuration

2. **Environment Variables Not Working**
   - Verify variables are set in both Vercel and Render dashboards
   - Restart deployments after adding variables

3. **Database Connection Issues**
   - Check MongoDB URI format
   - Ensure database allows connections from Render IPs

4. **Build Failures**
   - Check build logs in deployment dashboards
   - Ensure all dependencies are in package.json
   - Verify Node.js version compatibility

### Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Render Documentation](https://render.com/docs)
- [Razorpay Integration Guide](https://razorpay.com/docs/)

## 🎉 Success!

Once both deployments are complete and communicating:

1. Your frontend will be live at: `https://your-project.vercel.app`
2. Your backend will be live at: `https://your-service.onrender.com`
3. Update the API base URL in your frontend environment variables
4. Test the complete payment flow

**Note**: Free tier limitations:
- Vercel: 100GB bandwidth/month
- Render: 750 hours/month (sleeps after 15min inactivity)

For production use, consider upgrading to paid plans for better performance and reliability.
