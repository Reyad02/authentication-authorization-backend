# Authentication & Authorization Backend API

This is the backend API for handling authentication and authorization. Built with **Node.js**, **Express.js** and **MongoDB**, this API supports user registration, login, JWT-based authentication.

## 🔧 Features

- User Registration
- User Login
- JWT Token Authentication
- Secure password hashing with bcrypt

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Reyad02/authentication-authorization-backend.git
cd authentication-authorization-backend.
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables
Create a ```.env``` file in the root of the project and add the following variables:

```env
NODE_ENV=development
PORT=5000
DB_URL=your_mongodb_connection_string
SALT_ROUNDS=10
JWT_SECRET=your_secret_key
JWT_Expire=your_seleted_time
```

### 4. Start the Server

```bash
npm run dev
```

Server will run on http://localhost:5000 by default.

