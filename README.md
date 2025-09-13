# 🏦 Razorpay Clone

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)
![React](https://img.shields.io/badge/React-18.x-blue.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green.svg)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)

A modern, secure, and feature-rich clone of Razorpay's payment platform built with the MERN stack. This application demonstrates professional-grade payment processing capabilities with a clean, responsive user interface and robust security features.

## ✨ Features

- 🔐 **Secure Authentication**: JWT-based user authentication and authorization
- 💳 **Payment Processing**: Comprehensive payment gateway integration
- 📱 **Responsive Design**: Mobile-first design approach with seamless cross-device compatibility
- 🎨 **Modern UI/UX**: Clean interface with smooth animations and transitions
- 🔒 **Security First**: Industry-standard security practices and data protection
- 📊 **Dashboard Analytics**: User-friendly dashboard with transaction insights
- 🚀 **Fast Performance**: Optimized loading times and efficient state management
- 🌐 **RESTful APIs**: Well-structured backend APIs with comprehensive documentation

## 🛠️ Tech Stack

### Frontend
- **React.js** - Component-based user interface
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing

### DevOps & Deployment
- **Vercel** - Frontend deployment
- **Render** - Backend deployment
- **MongoDB Atlas** - Cloud database
- **Git** - Version control

## 🚀 Quick Start

### Prerequisites
- Node.js (v18.x or higher)
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ramji3030/razorpay-clone.git
   cd razorpay-clone
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd server
   npm install
   
   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. **Environment Setup**
   
   Create `.env` files in both `server` and `client` directories:
   
   **Server (.env)**
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```
   
   **Client (.env)**
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_RAZORPAY_KEY_ID=your_razorpay_key_id
   ```

4. **Run the application**
   ```bash
   # Start the backend server (from server directory)
   npm run dev
   
   # Start the frontend (from client directory)
   npm start
   ```

5. **Access the application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

## 📱 Demo

### Live Demo
- **Frontend**: [https://razorpay-clone-frontend.vercel.app](https://razorpay-clone-frontend.vercel.app)
- **Backend API**: [https://razorpay-clone-backend.render.com](https://razorpay-clone-backend.render.com)

### Test Credentials
```
Email: demo@razorpayclone.com
Password: Demo@123
```

### Test Payment Details
```
Card Number: 4111 1111 1111 1111
Expiry: 12/26
CVV: 123
```

## 📚 API Reference

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | **Required**. User's full name |
| `email` | `string` | **Required**. User's email address |
| `password` | `string` | **Required**. User's password (min 6 chars) |

#### Login User
```http
POST /api/auth/login
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `email` | `string` | **Required**. User's email address |
| `password` | `string` | **Required**. User's password |

### Payment Endpoints

#### Create Payment Order
```http
POST /api/payments/create-order
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `amount` | `number` | **Required**. Payment amount in paise |
| `currency` | `string` | Payment currency (default: INR) |

#### Verify Payment
```http
POST /api/payments/verify
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `razorpay_order_id` | `string` | **Required**. Razorpay order ID |
| `razorpay_payment_id` | `string` | **Required**. Razorpay payment ID |
| `razorpay_signature` | `string` | **Required**. Payment signature |

### User Endpoints

#### Get User Profile
```http
GET /api/user/profile
```

**Headers:**
```http
Authorization: Bearer {token}
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
   ```bash
   git fork https://github.com/ramji3030/razorpay-clone.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed

4. **Commit your changes**
   ```bash
   git commit -m 'feat: Add amazing feature'
   ```
   
   **Commit Message Convention:**
   - `feat:` - New features
   - `fix:` - Bug fixes
   - `docs:` - Documentation changes
   - `style:` - Code style changes
   - `refactor:` - Code refactoring
   - `test:` - Test additions/modifications
   - `chore:` - Maintenance tasks

5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Provide a clear description of your changes
   - Link any related issues
   - Ensure all tests pass

### Development Guidelines

- **Code Style**: Follow ESLint and Prettier configurations
- **Testing**: Write unit tests for new functionality
- **Documentation**: Update README and inline comments
- **Security**: Never commit sensitive information

### Reporting Issues

Found a bug or have a suggestion? Please open an issue:

1. Check if the issue already exists
2. Use the appropriate issue template
3. Provide detailed information and steps to reproduce
4. Add relevant labels

## 📁 Project Structure

```
razorpay-clone/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   ├── utils/          # Utility functions
│   │   └── styles/         # CSS files
│   ├── public/             # Static assets
│   └── package.json
├── server/                 # Node.js backend
│   ├── controllers/        # Route controllers
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── utils/              # Utility functions
│   └── package.json
├── DEPLOYMENT.md           # Deployment guide
└── README.md               # Project documentation
```

## 🚀 Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ramji3030/razorpay-clone)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Ramji

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📞 Support

If you have any questions or need help:

- 📧 Email: ramji3030@gmail.com
- 💬 GitHub Issues: [Create an issue](https://github.com/ramji3030/razorpay-clone/issues/new)
- 📱 LinkedIn: [Connect with me](https://linkedin.com/in/ramji3030)

## ⭐ Show Your Support

If this project helped you, please consider giving it a ⭐️ star!

---

<div align="center">
  <h3>Built with ❤️ by <a href="https://github.com/ramji3030">Ramji</a></h3>
  <p>Made in 🇮🇳 India</p>
</div>
