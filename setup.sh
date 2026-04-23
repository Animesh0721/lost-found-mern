#!/bin/bash

# Lost & Found Item Management System - Complete Setup Script
# Run this script to set up the entire MERN application

echo "🚀 Starting Lost & Found Item Management System Setup..."
echo "=================================================="

# Change to project directory
cd "$(dirname "$0")" || exit

# Backend Setup
echo ""
echo "📦 Setting up Backend..."
echo "=================================================="

cd backend

# Install backend dependencies
echo "Installing backend dependencies..."
npm install

# Create .env file from example
if [ ! -f .env ]; then
  echo ""
  echo "⚠️  Creating .env file..."
  echo "Please update the following values in backend/.env:"
  echo "  - MONGO_URI: Your MongoDB connection string"
  echo "  - JWT_SECRET: A random secret string"
  echo "  - PORT: Leave as 5000"
  echo ""
  
  cat > .env << 'EOF'
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/lost-found?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_12345
PORT=5000
EOF
  
  echo "✅ .env file created at backend/.env"
fi

cd ..

# Frontend Setup
echo ""
echo "📦 Setting up Frontend..."
echo "=================================================="

cd frontend

# Install frontend dependencies
echo "Installing frontend dependencies..."
npm install

# Create .env file from example
if [ ! -f .env ]; then
  echo "✅ Creating .env file for frontend..."
  cat > .env << 'EOF'
REACT_APP_API_URL=http://localhost:5000/api
EOF
fi

cd ..

echo ""
echo "✅ Setup Complete!"
echo "=================================================="
echo ""
echo "🎯 Next Steps:"
echo ""
echo "1. Update MongoDB URI in backend/.env"
echo "   - Get it from: https://www.mongodb.com/cloud/atlas"
echo ""
echo "2. Start Backend (Terminal 1):"
echo "   cd backend && npm start"
echo ""
echo "3. Start Frontend (Terminal 2):"
echo "   cd frontend && npm start"
echo ""
echo "4. Open Browser:"
echo "   http://localhost:3000"
echo ""
echo "=================================================="
