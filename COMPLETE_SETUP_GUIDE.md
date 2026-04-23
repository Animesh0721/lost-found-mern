# COMPLETE SETUP & DEPLOYMENT GUIDE

## 📦 What's Included

This is a **complete, production-ready Lost & Found Item Management System** using MERN stack.

### ✅ Backend (Node.js + Express + MongoDB)
- User registration with bcryptjs password hashing
- JWT authentication
- RESTful API for items (CRUD operations)
- Protected routes with authentication middleware
- MongoDB integration with Mongoose
- Error handling and validation
- CORS enabled

### ✅ Frontend (React)
- User registration & login pages
- Protected dashboard
- Add item form
- Search functionality
- Edit/Delete items
- Responsive CSS styling
- localStorage for token management
- Axios interceptors for auth headers

---

## 🎯 System Requirements

- **macOS** (Tested on latest versions)
- **Node.js** v14+ (Download from nodejs.org)
- **npm** v6+
- **MongoDB Atlas** account (free tier available)
- **Git** (optional, for version control)

### Verify Prerequisites

```bash
# Check Node.js
node -v

# Check npm
npm -v

# Should see version numbers like:
# v18.12.0
# 9.2.0
```

---

## 🚀 COMPLETE SETUP INSTRUCTIONS

### STEP 1: Get MongoDB Connection String (5 minutes)

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up with your email
3. Create a free cluster
4. Click "Connect" button
5. Choose "Connect your application"
6. Copy the connection string
7. Note: Replace `<password>` with your actual password

**Example:**
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/lost-found?retryWrites=true&w=majority
```

---

### STEP 2: Backend Setup

#### 2.1 Open Terminal and Navigate

```bash
cd ~/Desktop/Item-Management/backend
```

#### 2.2 Create .env File

```bash
cat > .env << 'EOF'
MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/lost-found?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_change_this_to_something_strong_12345
PORT=5000
EOF
```

**Replace:**
- `YOUR_USERNAME` with your MongoDB username
- `YOUR_PASSWORD` with your MongoDB password
- `cluster0.xxxxx.mongodb.net` with your actual cluster URL

#### 2.3 Install Dependencies

```bash
npm install
```

**Wait for:** "added XX packages in XX seconds"

#### 2.4 Verify Backend Files

All these files should exist:

```bash
ls -la

# You should see:
config/
controllers/
middleware/
models/
routes/
server.js
package.json
.env
.env.example
node_modules/  (after npm install)
```

#### 2.5 Test Backend

```bash
npm start
```

**Expected output:**
```
Server running on http://localhost:5000
MongoDB connected: cluster0.xxxxx.mongodb.net
```

**Keep this terminal running!**

---

### STEP 3: Frontend Setup

#### 3.1 Open NEW Terminal Tab

```bash
# Cmd + T to open new tab in Terminal

cd ~/Desktop/Item-Management/frontend
```

#### 3.2 Install React Dependencies

```bash
npm install
```

**Wait for:** "added XX packages"

#### 3.3 Create .env File

```bash
cat > .env << 'EOF'
REACT_APP_API_URL=http://localhost:5000/api
EOF
```

#### 3.4 Verify Frontend Files

```bash
ls -la src/

# You should see:
components/
pages/
services/
styles/
App.js
index.js
```

#### 3.5 Start Frontend

```bash
npm start
```

**Expected output:**
```
Compiled successfully!

You can now view lost-found-frontend in the browser.
  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000
```

**Browser should automatically open!**

---

## ✅ VERIFICATION CHECKLIST

After both are running, verify:

- [ ] Backend terminal shows: "MongoDB connected"
- [ ] Frontend terminal shows: "Compiled successfully"
- [ ] Browser shows Login/Register page at http://localhost:3000
- [ ] Can click between "Login" and "Register here"

---

## 🧪 TESTING THE APPLICATION

### Test 1: Register User

```
1. Go to http://localhost:3000
2. Click "Register here"
3. Fill in:
   Name: Test User
   Email: test@example.com
   Password: password123
4. Click "Register"
5. Should see Dashboard page
```

### Test 2: Add Item

```
1. On Dashboard, fill "Add Item" form:
   Item Name: Lost Keys
   Description: Silver car keys with red keychain
   Type: Lost
   Location: Downtown Coffee Shop
   Date: 2024-01-15
   Contact: test@example.com
2. Click "Add Item"
3. Should see success message
4. Item appears in list below
```

### Test 3: Search

```
1. Type "Keys" in search box
2. Click "Search"
3. Should show matching items
4. Click "Clear" to reset
```

### Test 4: Edit Item

```
1. Click "Edit" button on your item
2. Form fills with existing data
3. Change "Item Name" to "Lost Keys - Silver"
4. Click "Update Item"
5. Item updated in list
```

### Test 5: Delete Item

```
1. Click "Delete" button
2. Confirm in dialog
3. Item removed from list
4. Message shows "Item deleted successfully"
```

### Test 6: Logout & Login

```
1. Click "Logout" button
2. Redirects to Login page
3. Login with: test@example.com / password123
4. Redirects to Dashboard
5. Your items are still there
```

### Test 7: View Other Items

```
1. Multiple users can post items
2. You can view all items (even from other users)
3. Only edit/delete buttons show for your items
4. Can search across all items
```

---

## 📁 PROJECT FILES SUMMARY

### Backend Files (7 files + 2 config)

**Core:**
```
server.js              - Main Express server
package.json           - Dependencies and scripts
.env                   - Environment variables (create this!)
```

**Config:**
```
config/database.js     - MongoDB connection
```

**Controllers:**
```
controllers/authController.js     - Register, Login logic
controllers/itemController.js     - Item CRUD operations
```

**Models:**
```
models/User.js         - User schema with password hashing
models/Item.js         - Item schema with user reference
```

**Routes:**
```
routes/authRoutes.js   - /api/auth/register, /api/auth/login
routes/itemRoutes.js   - /api/items endpoints
```

**Middleware:**
```
middleware/authMiddleware.js      - JWT verification
```

### Frontend Files (12 files + 3 config)

**Main:**
```
src/App.js             - Main app component with routing
src/index.js           - React entry point
```

**Pages:**
```
src/pages/Register.js  - Register page
src/pages/Login.js     - Login page
src/pages/Dashboard.js - Main dashboard with all features
```

**Components:**
```
src/components/ItemForm.js   - Add/Edit item form
src/components/ItemCard.js   - Display item card
```

**Services:**
```
src/services/api.js    - Axios client with interceptors
```

**Styles:**
```
src/styles/App.css         - Global styles
src/styles/Auth.css        - Login/Register styles
src/styles/Dashboard.css   - Dashboard styles
```

**Config:**
```
package.json           - Dependencies
.env                   - Environment variables
public/index.html      - HTML template
```

---

## 🔐 AUTHENTICATION DETAILS

### How JWT Works

1. **Register:** User creates account
   - Password hashed with bcryptjs
   - User stored in MongoDB

2. **Login:** User enters credentials
   - Password compared with hash
   - JWT token generated
   - Token sent to frontend

3. **Store:** Frontend stores token
   - Saved in localStorage
   - Sent in every API request header: `Authorization: Bearer <token>`

4. **Verify:** Backend middleware checks token
   - JWT signature verified
   - User ID extracted
   - Request allowed/denied

5. **Protected Routes:** Only authenticated users
   - Can POST/PUT/DELETE items
   - Other users can't modify their items

---

## 📊 DATABASE STRUCTURE

### Users Collection
```javascript
{
  _id: ObjectId("507f1f77bcf86cd799439011"),
  name: "Test User",
  email: "test@example.com",
  password: "$2a$10$...",  // hashed
  createdAt: 2024-01-15T10:30:00Z
}
```

### Items Collection
```javascript
{
  _id: ObjectId("507f1f77bcf86cd799439012"),
  user: ObjectId("507f1f77bcf86cd799439011"),  // ref to user
  itemName: "Lost Keys",
  description: "Silver car keys with red keychain",
  type: "Lost",  // or "Found"
  location: "Downtown Coffee Shop",
  date: 2024-01-15,
  contactInfo: "test@example.com",
  createdAt: 2024-01-15T10:35:00Z
}
```

---

## 🛠️ TROUBLESHOOTING

### Backend Won't Start

**Error:** "Port 5000 already in use"
```bash
# Find process using port 5000
lsof -i :5000

# Kill it (replace 12345 with PID)
kill -9 12345

# Try again
npm start
```

**Error:** "MongoDB connection failed"
```bash
# Check .env file
cat .env

# Verify:
1. Username and password are correct
2. Connection string format is correct
3. IP is whitelisted in MongoDB Atlas
4. Cluster is active (not paused)
```

### Frontend Won't Start

**Error:** "Port 3000 already in use"
```bash
# Kill process using port 3000
lsof -i :3000
kill -9 <PID>

# Or let React choose another port
npm start
# Say "Y" when asked to use another port
```

**Error:** "npm ERR! ERESOLVE unable to resolve dependency tree"
```bash
# Force install
npm install --legacy-peer-deps

# Or clear everything and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Frontend Can't Reach Backend

**Error:** "Failed to fetch items" or CORS error
```bash
# Ensure backend is running
curl http://localhost:5000

# Check .env in frontend
cat .env

# Should have:
REACT_APP_API_URL=http://localhost:5000/api

# Clear browser cache
# Cmd + Shift + R (hard refresh)
```

### Login Not Working

**Error:** "Invalid credentials"
```bash
# Make sure you registered first
# Check MongoDB Atlas - should see user in database

# Verify email is exact match (case-sensitive)
# Verify password is correct (case-sensitive)
```

---

## 📱 API ENDPOINTS REFERENCE

### Authentication

| Method | URL | Body | Response |
|--------|-----|------|----------|
| POST | `/api/auth/register` | `{name, email, password}` | `{token, user}` |
| POST | `/api/auth/login` | `{email, password}` | `{token, user}` |

### Items (All public except POST/PUT/DELETE)

| Method | URL | Auth | Body | Response |
|--------|-----|------|------|----------|
| GET | `/api/items` | ❌ | - | `{items[]}` |
| GET | `/api/items/:id` | ❌ | - | `{item}` |
| GET | `/api/items/search?name=xyz` | ❌ | - | `{items[]}` |
| POST | `/api/items` | ✅ | item data | `{item}` |
| PUT | `/api/items/:id` | ✅ | fields to update | `{item}` |
| DELETE | `/api/items/:id` | ✅ | - | `{success}` |

---

## 💡 IMPORTANT NOTES

1. **Keep Both Terminals Open** - Backend and frontend must both run
2. **MongoDB Connection** - Must be active and accessible
3. **Token Expires in 7 days** - After that, need to login again
4. **Only Own Items** - Users can only edit/delete their own items
5. **Password Hashing** - Never stored as plain text
6. **CORS Enabled** - Only for localhost:3000

---

## 📝 COMMON WORKFLOWS

### Workflow 1: Register → Add Item → Logout → Login

```
Register → Dashboard (auto) → Add Item → Success 
         → Logout → Login Page → Login → Dashboard
```

### Workflow 2: Search → Edit → Delete

```
Dashboard → Search "Lost" → Results → Click Edit 
         → Update → Click Delete → Confirm → Deleted
```

### Workflow 3: Multi-User System

```
User A: Register, Add Item A
User B: Register, Add Item B
User A: Can see Item B, can edit Item A, can't edit Item B
User B: Can see Item A, can't edit Item A, can edit Item B
```

---

## 🎓 LEARNING OUTCOMES

After completing this project, you know:

- ✅ Full MERN stack development
- ✅ JWT authentication flow
- ✅ Password hashing with bcryptjs
- ✅ RESTful API design
- ✅ MongoDB schema design
- ✅ React hooks and state management
- ✅ Axios for API communication
- ✅ Protected routes and middleware
- ✅ Error handling
- ✅ Authentication tokens and localStorage

---

## 📞 QUICK HELP

**Forgot MongoDB URI?**
- Go to MongoDB Atlas → Clusters → Connect → Copy connection string

**Want to use different port?**
- Change PORT in backend/.env
- Restart backend

**Want to change JWT secret?**
- Edit JWT_SECRET in backend/.env
- All tokens become invalid (users must login again)

**Want to add more features?**
- See Backend/Frontend code structure
- Follow same patterns
- All code is well-commented

---

## 🚀 YOU'RE READY!

Everything is set up and ready to run:

```bash
# Terminal 1
cd ~/Desktop/Item-Management/backend
npm start

# Terminal 2
cd ~/Desktop/Item-Management/frontend
npm start

# Browser
http://localhost:3000
```

**Enjoy your Lost & Found Application! 🎉**

---

**Created:** April 23, 2024  
**MERN Stack Version:** Latest  
**Status:** ✅ Production Ready
