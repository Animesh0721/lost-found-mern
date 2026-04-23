# Mac Terminal Commands - Complete Setup Guide

## 📋 Prerequisites
- Node.js and npm installed (Check: `node -v && npm -v`)
- Git installed (Check: `git -v`)
- MongoDB Atlas account (Free tier available)

---

## 🚀 STEP 1: Create Complete Project Structure

```bash
# Navigate to Desktop
cd ~/Desktop

# Create main project folder
mkdir -p Item-Management
cd Item-Management

# Create backend structure
mkdir -p backend/{config,controllers,models,routes,middleware}

# Create frontend structure
mkdir -p frontend/src/{components,pages,services,styles}
mkdir -p frontend/public

# Verify structure
tree

# Output should look like:
# Item-Management/
# ├── backend/
# │   ├── config/
# │   ├── controllers/
# │   ├── middleware/
# │   ├── models/
# │   └── routes/
# └── frontend/
#     ├── public/
#     └── src/
#         ├── components/
#         ├── pages/
#         ├── services/
#         └── styles/
```

---

## 🛠️ STEP 2: Backend Setup

### 2.1 Initialize Backend

```bash
# Navigate to backend
cd ~/Desktop/Item-Management/backend

# Initialize npm project
npm init -y

# Install all backend dependencies
npm install express cors mongoose bcryptjs jsonwebtoken dotenv nodemon
```

**Expected output:**
```
added 50+ packages in 15s
```

### 2.2 Create .env File

```bash
# Create .env file
cat > .env << 'EOF'
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/lost-found?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_12345_change_this
PORT=5000
EOF

# Verify file was created
cat .env
```

**⚠️ IMPORTANT:** 
- Replace `username:password` with your MongoDB Atlas credentials
- Replace MONGO_URI with your actual cluster connection string
- Change JWT_SECRET to a strong random string

### 2.3 Get MongoDB Connection String

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up / Log in
3. Create a new cluster (free tier)
4. Click "Connect"
5. Choose "Connect your application"
6. Copy the connection string
7. Replace in backend/.env

### 2.4 Create package.json Script

```bash
# Edit package.json to add scripts
cat > package.json << 'EOF'
{
  "name": "lost-found-backend",
  "version": "1.0.0",
  "description": "Lost & Found Item Management System Backend",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
}
EOF
```

### 2.5 Backend Directory Check

```bash
# You should have created these files:
# backend/
# ├── config/database.js
# ├── controllers/authController.js
# ├── controllers/itemController.js
# ├── middleware/authMiddleware.js
# ├── models/User.js
# ├── models/Item.js
# ├── routes/authRoutes.js
# ├── routes/itemRoutes.js
# ├── server.js
# ├── .env
# ├── .env.example
# └── package.json

ls -la
```

---

## ⚛️ STEP 3: Frontend Setup

### 3.1 Create React App

```bash
# Navigate to frontend folder
cd ~/Desktop/Item-Management/frontend

# Create React app (creates node_modules, public, src)
npx create-react-app .

# When asked "Happy hacking!", press Enter
```

**This takes 3-5 minutes. Don't interrupt!**

### 3.2 Install Axios

```bash
# Add axios for API calls
npm install axios
```

### 3.3 Create .env File

```bash
# Create frontend .env
cat > .env << 'EOF'
REACT_APP_API_URL=http://localhost:5000/api
EOF

# Verify
cat .env
```

### 3.4 Frontend File Structure

```bash
# You should have:
# frontend/
# ├── public/
# │   └── index.html
# ├── src/
# │   ├── components/
# │   │   ├── ItemForm.js
# │   │   └── ItemCard.js
# │   ├── pages/
# │   │   ├── Register.js
# │   │   ├── Login.js
# │   │   └── Dashboard.js
# │   ├── services/
# │   │   └── api.js
# │   ├── styles/
# │   │   ├── App.css
# │   │   ├── Auth.css
# │   │   └── Dashboard.css
# │   ├── App.js
# │   └── index.js
# ├── .env
# ├── package.json
# └── node_modules/

ls -la src/
```

---

## 🚀 STEP 4: Run the Application

### 4.1 Terminal 1 - Start Backend

```bash
# Terminal 1
cd ~/Desktop/Item-Management/backend
npm start

# Expected output:
# Server running on http://localhost:5000
# MongoDB connected: cluster.mongodb.net
```

### 4.2 Terminal 2 - Start Frontend

```bash
# Terminal 2 (Open new terminal tab: Cmd + T)
cd ~/Desktop/Item-Management/frontend
npm start

# Expected output:
# Compiled successfully!
# You can now view lost-found-frontend in the browser.
# On Your Network: http://192.168.x.x:3000
```

### 4.3 Open Browser

```bash
# Automatically opens http://localhost:3000
# If not, manually open: http://localhost:3000
```

---

## ✅ STEP 5: Test the Application

### 5.1 Register a New User

```
URL: http://localhost:3000
1. Click "Register here"
2. Fill in:
   - Name: Test User
   - Email: test@example.com
   - Password: password123
3. Click Register
4. Should redirect to Dashboard
```

### 5.2 Add an Item

```
1. Fill in Add Item Form:
   - Item Name: Blue Backpack
   - Description: Lost my blue backpack
   - Type: Lost
   - Location: Central Park
   - Date: 2024-01-15
   - Contact: test@example.com
2. Click "Add Item"
3. Should see item in the list
```

### 5.3 Search Items

```
1. Enter "Blue" in search box
2. Click Search
3. Should show matching items
```

### 5.4 Update Item

```
1. Click "Edit" button on your item
2. Form updates with item data
3. Change any field
4. Click "Update Item"
```

### 5.5 Delete Item

```
1. Click "Delete" button
2. Confirm deletion
3. Item should be removed
```

### 5.6 Logout

```
1. Click "Logout" button
2. Should redirect to Login page
3. Token is cleared from localStorage
```

---

## 🔍 Verify Everything is Working

### Check Backend

```bash
# In backend terminal, should see:
# MongoDB connected: <your-cluster>.mongodb.net
# Server running on http://localhost:5000

# Test API
curl http://localhost:5000
# Should return: {"message":"Lost & Found Item Management System API"}
```

### Check Frontend

```bash
# In frontend terminal, should see:
# Compiled successfully!
# Local: http://localhost:3000

# Browser should show:
# Login/Register page
```

### Check Database

```bash
# Go to MongoDB Atlas
# Select your cluster
# Go to "Collections"
# Should see "lost-found" database with "users" and "items" collections
```

---

## 📁 Project Structure - Complete

```
~/Desktop/Item-Management/
│
├── backend/
│   ├── config/
│   │   └── database.js              # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js        # Register/Login logic
│   │   └── itemController.js        # CRUD operations
│   ├── middleware/
│   │   └── authMiddleware.js        # JWT verification
│   ├── models/
│   │   ├── User.js                  # User schema
│   │   └── Item.js                  # Item schema
│   ├── routes/
│   │   ├── authRoutes.js            # Auth endpoints
│   │   └── itemRoutes.js            # Item endpoints
│   ├── server.js                    # Main server file
│   ├── package.json                 # Dependencies
│   ├── .env                         # Environment variables
│   ├── .env.example                 # Example env
│   └── node_modules/                # Dependencies (auto-created)
│
├── frontend/
│   ├── public/
│   │   ├── index.html               # Main HTML
│   │   └── favicon.ico              # Icon
│   ├── src/
│   │   ├── components/
│   │   │   ├── ItemForm.js          # Add/Edit form
│   │   │   └── ItemCard.js          # Item display
│   │   ├── pages/
│   │   │   ├── Register.js          # Register page
│   │   │   ├── Login.js             # Login page
│   │   │   └── Dashboard.js         # Main dashboard
│   │   ├── services/
│   │   │   └── api.js               # Axios instance
│   │   ├── styles/
│   │   │   ├── App.css              # Global styles
│   │   │   ├── Auth.css             # Auth pages
│   │   │   └── Dashboard.css        # Dashboard
│   │   ├── App.js                   # Main app
│   │   └── index.js                 # React entry
│   ├── package.json                 # Dependencies
│   ├── .env                         # Environment
│   ├── .env.example                 # Example
│   └── node_modules/                # Dependencies
│
├── README.md                        # Project docs
├── .gitignore                       # Git ignore
└── setup.sh                         # Setup script
```

---

## 🐛 Troubleshooting

### Port 5000 Already in Use

```bash
# Find process using port 5000
lsof -i :5000

# Kill the process (replace PID)
kill -9 <PID>

# Or use different port
# Change PORT in backend/.env
```

### Port 3000 Already in Use

```bash
# Find process using port 3000
lsof -i :3000

# Kill it
kill -9 <PID>

# Or let React choose another port (yes when prompted)
```

### MongoDB Connection Failed

```bash
# Check connection string in .env
cat backend/.env

# Verify:
# 1. Username and password are correct
# 2. IP address is whitelisted in MongoDB Atlas
# 3. Cluster is active (not paused)
# 4. Network access is enabled
```

### Frontend Can't Connect to Backend

```bash
# Ensure backend is running
curl http://localhost:5000

# Check CORS is enabled in backend/server.js
# Should have: app.use(cors());

# Clear browser cache
# Cmd + Shift + R (hard refresh)
```

### Dependencies Missing

```bash
# Reinstall all dependencies
cd backend && npm install
cd ../frontend && npm install
```

### Clear Everything and Restart

```bash
# Backend
cd ~/Desktop/Item-Management/backend
rm -rf node_modules package-lock.json
npm install

# Frontend
cd ../frontend
rm -rf node_modules package-lock.json
npm install

# Then run again
```

---

## 📝 Useful Mac Commands

```bash
# List files
ls -la

# Change directory
cd <directory>

# Create directory
mkdir -p <directory>

# View file contents
cat <filename>

# Edit file (nano)
nano <filename>
# Ctrl + X to save

# Open in VS Code
code .

# Open in Finder
open .

# Check node version
node -v

# Check npm version
npm -v

# List running ports
lsof -i :3000  # Check port 3000

# Kill process
kill -9 <PID>

# Git initialization
git init
git add .
git commit -m "Initial commit"
```

---

## 🎯 Quick Reference - Commands to Run

```bash
# 1. Setup Backend
cd ~/Desktop/Item-Management/backend
npm install
echo "MONGO_URI=..." > .env
npm start

# 2. Setup Frontend (new terminal)
cd ~/Desktop/Item-Management/frontend
npx create-react-app .
npm install axios
npm start

# 3. Open Browser
open http://localhost:3000
```

---

## ✨ You're All Set!

🎉 Your Lost & Found Item Management System is ready!

**Credentials to test:**
- Email: test@example.com
- Password: password123

**API Base URL:** http://localhost:5000/api

**Frontend URL:** http://localhost:3000

Happy coding! 🚀
