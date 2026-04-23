#!/bin/bash

# ========================================
# LOST & FOUND ITEM MANAGEMENT SYSTEM
# Mac Terminal Commands - Copy & Paste
# ========================================

echo "🚀 Lost & Found Item Management System"
echo "========================================="
echo ""
echo "This script contains all commands to setup and run the system"
echo "Copy and paste commands into your terminal"
echo ""

# ========================================
# SECTION 1: PROJECT STRUCTURE CREATION
# ========================================

cat << 'EOF'

📋 SECTION 1: CREATE PROJECT STRUCTURE
========================================

# Navigate to Desktop
cd ~/Desktop

# Create main folder
mkdir -p Item-Management
cd Item-Management

# Create backend folders
mkdir -p backend/{config,controllers,models,routes,middleware}

# Create frontend folders
mkdir -p frontend/src/{components,pages,services,styles}
mkdir -p frontend/public

# Verify structure
tree

EOF

# ========================================
# SECTION 2: BACKEND SETUP
# ========================================

cat << 'EOF'

📦 SECTION 2: BACKEND SETUP
========================================

# Navigate to backend
cd ~/Desktop/Item-Management/backend

# Initialize npm
npm init -y

# Install dependencies (one command)
npm install express cors mongoose bcryptjs jsonwebtoken dotenv nodemon

# Create .env file with your MongoDB URI
# IMPORTANT: Replace with your actual MongoDB connection string!
cat > .env << 'ENVFILE'
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/lost-found?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_key_change_this_12345
PORT=5000
ENVFILE

# Verify .env was created
cat .env

# Start backend server
npm start

# Expected output:
# Server running on http://localhost:5000
# MongoDB connected: ...

EOF

# ========================================
# SECTION 3: FRONTEND SETUP (NEW TERMINAL)
# ========================================

cat << 'EOF'

⚛️ SECTION 3: FRONTEND SETUP (NEW TERMINAL TAB)
========================================

# Open new terminal tab (Cmd + T)

# Navigate to frontend
cd ~/Desktop/Item-Management/frontend

# Create React app (takes 3-5 minutes)
npx create-react-app .

# When prompted, type "y" to proceed

# Install Axios
npm install axios

# Create .env file
cat > .env << 'ENVFILE'
REACT_APP_API_URL=http://localhost:5000/api
ENVFILE

# Verify .env
cat .env

# Start frontend
npm start

# Expected output:
# Compiled successfully!
# Local: http://localhost:3000

# Browser will open automatically at http://localhost:3000

EOF

# ========================================
# SECTION 4: TESTING
# ========================================

cat << 'EOF'

🧪 SECTION 4: TESTING THE APPLICATION
========================================

After both backend and frontend are running:

1. Register User:
   - Go to http://localhost:3000
   - Click "Register here"
   - Enter: Name, Email, Password
   - Click "Register"
   - Should see Dashboard

2. Add Item:
   - Fill form: Name, Description, Type, Location, Date, Contact
   - Click "Add Item"
   - Item appears below

3. Search:
   - Type in search box
   - Click "Search"
   - Results filtered

4. Edit Item:
   - Click "Edit"
   - Update fields
   - Click "Update Item"

5. Delete Item:
   - Click "Delete"
   - Confirm

6. Logout:
   - Click "Logout"
   - Redirects to Login

EOF

# ========================================
# SECTION 5: TROUBLESHOOTING COMMANDS
# ========================================

cat << 'EOF'

🐛 SECTION 5: TROUBLESHOOTING COMMANDS
========================================

# Check if Node is installed
node -v
npm -v

# Check ports in use
lsof -i :3000
lsof -i :5000

# Kill process using port
kill -9 <PID>

# Reinstall dependencies
cd backend && npm install
cd ../frontend && npm install

# Clear npm cache
npm cache clean --force

# Remove and reinstall everything
cd backend
rm -rf node_modules package-lock.json
npm install

cd ../frontend
rm -rf node_modules package-lock.json
npm install

# View backend logs
cd backend && npm start

# View frontend logs
cd frontend && npm start

EOF

# ========================================
# SECTION 6: QUICK START (3 STEPS)
# ========================================

cat << 'EOF'

⚡ SECTION 6: QUICK START (3 STEPS)
========================================

Step 1: Backend (Terminal 1)
cd ~/Desktop/Item-Management/backend
npm install
npm start

Step 2: Frontend (Terminal 2)
cd ~/Desktop/Item-Management/frontend
npm install
npm start

Step 3: Open Browser
http://localhost:3000

EOF

# ========================================
# SECTION 7: MONGODB SETUP
# ========================================

cat << 'EOF'

🗄️ SECTION 7: MONGODB ATLAS SETUP
========================================

1. Go to: https://www.mongodb.com/cloud/atlas
2. Sign up (free tier available)
3. Create a cluster
4. Click "Connect"
5. Choose "Connect your application"
6. Copy connection string
7. Paste in backend/.env as MONGO_URI
8. Replace <password> with your actual password
9. Add database name: /lost-found

Example format:
mongodb+srv://myusername:mypassword@cluster0.xxxxx.mongodb.net/lost-found?retryWrites=true&w=majority

EOF

# ========================================
# SECTION 8: FILE STRUCTURE VERIFICATION
# ========================================

cat << 'EOF'

📁 SECTION 8: VERIFY FILE STRUCTURE
========================================

# Backend files check
cd ~/Desktop/Item-Management/backend
ls -la

# Should show:
# config/
# controllers/
# middleware/
# models/
# routes/
# server.js
# package.json
# .env
# node_modules/

# Frontend files check
cd ../frontend
ls -la src/

# Should show:
# components/
# pages/
# services/
# styles/
# App.js
# index.js

EOF

# ========================================
# SECTION 9: API TESTING WITH CURL
# ========================================

cat << 'EOF'

🔌 SECTION 9: TEST API WITH CURL
========================================

# Test backend is running
curl http://localhost:5000

# Register user
curl -X POST http://localhost:5000/api/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Test","email":"test@test.com","password":"123456"}'

# Login user
curl -X POST http://localhost:5000/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"test@test.com","password":"123456"}'

# Get all items
curl http://localhost:5000/api/items

# Search items
curl "http://localhost:5000/api/items/search?name=backpack"

EOF

# ========================================
# SECTION 10: USEFUL COMMANDS
# ========================================

cat << 'EOF'

💡 SECTION 10: USEFUL COMMANDS
========================================

# Open project in VS Code
cd ~/Desktop/Item-Management
code .

# Open project in Finder
open .

# Check git status
git status
git add .
git commit -m "Initial commit"

# Edit environment file
nano backend/.env
# Press Ctrl+X to save

# View backend logs in real-time
cd backend && npm start

# View frontend logs in real-time
cd frontend && npm start

# Stop running server
Ctrl + C

# List all npm packages installed
npm list

# Update npm packages
npm update

# Clean npm cache
npm cache clean --force

EOF

# ========================================
# COMPLETE COMMAND SEQUENCE
# ========================================

cat << 'EOF'

🎯 COMPLETE SETUP COMMAND SEQUENCE (COPY & PASTE ALL)
========================================

# 1. Setup Backend
cd ~/Desktop/Item-Management/backend
npm install

# 2. Create .env (EDIT with your MongoDB URI!)
cat > .env << 'ENVFILE'
MONGO_URI=mongodb+srv://YOUR_USER:YOUR_PASS@cluster.mongodb.net/lost-found?retryWrites=true&w=majority
JWT_SECRET=your_secret_key_here_12345
PORT=5000
ENVFILE

# 3. Start Backend
npm start

# ============ NEW TERMINAL TAB ============

# 4. Setup Frontend
cd ~/Desktop/Item-Management/frontend
npx create-react-app .
npm install axios

# 5. Create .env
cat > .env << 'ENVFILE'
REACT_APP_API_URL=http://localhost:5000/api
ENVFILE

# 6. Start Frontend
npm start

# ============ OPEN BROWSER ============

# Visit: http://localhost:3000

EOF

# ========================================
# IMPORTANT NOTES
# ========================================

cat << 'EOF'

⚠️ IMPORTANT NOTES
========================================

1. Keep both terminals running (Backend & Frontend)

2. MongoDB URI:
   - Get from MongoDB Atlas
   - Replace username:password
   - Update cluster name
   - Add database name: /lost-found

3. Environment Variables:
   - Never commit .env to git
   - Use .env.example as template
   - Change JWT_SECRET in production

4. First Time Setup:
   - Create React app takes 3-5 minutes
   - Don't interrupt the process
   - Wait for "Compiled successfully"

5. Port Issues:
   - Backend: localhost:5000
   - Frontend: localhost:3000
   - If ports in use, kill processes

6. Testing:
   - Register a test account first
   - Then add items
   - Test search, edit, delete

7. Browser Access:
   - http://localhost:3000 (Frontend)
   - http://localhost:5000 (Backend API)

EOF

# ========================================
# SUCCESS CHECKLIST
# ========================================

cat << 'EOF'

✅ SUCCESS CHECKLIST
========================================

After setup, verify:

[ ] Backend terminal shows: "Server running on http://localhost:5000"
[ ] Backend terminal shows: "MongoDB connected: ..."
[ ] Frontend terminal shows: "Compiled successfully"
[ ] Browser opens to: http://localhost:3000
[ ] Can see Login/Register page
[ ] Can click between Login and Register
[ ] Can register a new user
[ ] Can add an item
[ ] Can search items
[ ] Can edit an item
[ ] Can delete an item
[ ] Can logout
[ ] Can login again

If all checked ✅ - System is working perfectly!

EOF

# ========================================
# END OF SCRIPT
# ========================================

echo ""
echo "✅ Script complete! Copy commands above into your terminal."
echo "=================================================="
echo ""
echo "📌 Key Folders:"
echo "   Backend:  ~/Desktop/Item-Management/backend"
echo "   Frontend: ~/Desktop/Item-Management/frontend"
echo ""
echo "🌐 URLs:"
echo "   Frontend: http://localhost:3000"
echo "   Backend:  http://localhost:5000"
echo ""
echo "📚 Documentation:"
echo "   README.md              - Project overview"
echo "   COMPLETE_SETUP_GUIDE.md - Detailed setup"
echo "   MAC_SETUP_GUIDE.md      - Mac-specific guide"
echo "   QUICK_REFERENCE.md      - Quick reference"
echo ""
echo "Happy coding! 🚀"
echo "=================================================="
