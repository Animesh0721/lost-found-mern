# 🚀 Quick Start Reference

## ⚡ 5-Minute Setup

### Terminal 1 - Backend
```bash
cd ~/Desktop/Item-Management/backend
npm install
# Edit .env with your MongoDB URI
npm start
```

### Terminal 2 - Frontend
```bash
cd ~/Desktop/Item-Management/frontend
npm install
npm start
```

### Open Browser
```
http://localhost:3000
```

---

## 📌 Key Files Reference

| File | Purpose |
|------|---------|
| `backend/server.js` | Main backend server |
| `backend/config/database.js` | MongoDB connection |
| `backend/controllers/authController.js` | Register/Login logic |
| `backend/controllers/itemController.js` | Item CRUD operations |
| `backend/middleware/authMiddleware.js` | JWT verification |
| `frontend/src/App.js` | Main React component |
| `frontend/src/pages/Dashboard.js` | Main dashboard page |
| `frontend/src/services/api.js` | Axios API client |

---

## 🔐 Authentication Flow

```
User Input (Email/Password)
         ↓
Backend validates credentials
         ↓
bcryptjs compares passwords
         ↓
JWT token generated
         ↓
Token sent to frontend
         ↓
Stored in localStorage
         ↓
Sent in every protected request
         ↓
Middleware verifies JWT
         ↓
Request processed / Denied
```

---

## 📦 API Endpoints

### Auth
| Method | Endpoint | Body |
|--------|----------|------|
| POST | `/api/auth/register` | name, email, password |
| POST | `/api/auth/login` | email, password |

### Items
| Method | Endpoint | Auth | Body |
|--------|----------|------|------|
| POST | `/api/items` | ✅ | itemName, description, type, location, date, contactInfo |
| GET | `/api/items` | ❌ | - |
| GET | `/api/items/:id` | ❌ | - |
| GET | `/api/items/search?name=xyz` | ❌ | - |
| PUT | `/api/items/:id` | ✅ | Any field to update |
| DELETE | `/api/items/:id` | ✅ | - |

---

## 🧪 Test Scenarios

### Scenario 1: Register & Login
1. Go to http://localhost:3000
2. Click "Register here"
3. Fill form and register
4. Auto redirects to Dashboard
5. Logout
6. Login with same credentials

### Scenario 2: Add Item
1. Login
2. Fill "Add Item" form
3. Click "Add Item"
4. Item appears in list

### Scenario 3: Search Items
1. Type item name in search box
2. Click "Search"
3. Results filtered
4. Click "Clear" to reset

### Scenario 4: Update Item
1. Click "Edit" on your item
2. Form fills with item data
3. Change field
4. Click "Update Item"

### Scenario 5: Delete Item
1. Click "Delete" button
2. Confirm dialog
3. Item removed

---

## 🛠️ Environment Variables

### Backend (.env)
```
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
JWT_SECRET=your_secret_key_here_make_it_strong
PORT=5000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

---

## 📱 Features Implemented

- ✅ User Registration with password hashing
- ✅ JWT-based Login
- ✅ Add new items
- ✅ View all items
- ✅ Search items by name
- ✅ Edit own items only
- ✅ Delete own items only
- ✅ Protected routes
- ✅ Error handling
- ✅ Responsive design
- ✅ Logout functionality

---

## 🔒 Security Features

- ✅ Password hashing with bcryptjs
- ✅ JWT token-based auth
- ✅ Protected routes
- ✅ Owner verification for updates/deletes
- ✅ CORS configured
- ✅ Input validation
- ✅ Token expiry (7 days)

---

## 📊 Database Schema

### User
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  createdAt: Date
}
```

### Item
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref User),
  itemName: String,
  description: String,
  type: String (Lost/Found),
  location: String,
  date: Date,
  contactInfo: String,
  createdAt: Date
}
```

---

## 🐛 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Port 5000 in use | `lsof -i :5000` then `kill -9 <PID>` |
| MongoDB won't connect | Verify MONGO_URI and IP whitelist |
| Frontend won't load | Clear cache: Cmd+Shift+R |
| Dependencies missing | `npm install` in respective folder |
| CORS error | Backend not running or different port |

---

## 📚 Useful Commands

```bash
# Install dependencies
npm install

# Start backend
npm start

# Start frontend
npm start

# Stop server
Ctrl + C

# View database
MongoDB Atlas console

# Check ports
lsof -i :3000
lsof -i :5000

# Kill process
kill -9 <PID>

# Git
git add .
git commit -m "message"
git push
```

---

## 🎓 What You Learned

1. MERN stack development
2. JWT authentication
3. Password hashing
4. Protected routes
5. RESTful API design
6. React state management
7. Axios for API calls
8. MongoDB schema design
9. Middleware concept
10. Error handling

---

## 📞 Support Resources

- MongoDB Docs: https://docs.mongodb.com
- Express Docs: https://expressjs.com
- React Docs: https://react.dev
- JWT Info: https://jwt.io
- Mongoose Docs: https://mongoosejs.com

---

**Happy Coding! 🚀**

Last Updated: April 23, 2024
