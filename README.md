# Lost & Found Item Management System - MERN Stack

A complete Lost & Found Item Management System built with MongoDB, Express, React, and Node.js.

## 🎯 Features

- User Authentication (Register/Login with JWT)
- Add, Update, Delete Lost/Found Items
- Search Items by Name
- View All Items with Details
- User-specific Item Management
- Protected Routes
- Clean UI with Responsive Design

## 🛠️ Tech Stack

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs for Password Hashing
- CORS for Cross-Origin Requests

### Frontend
- React 18
- Axios for API Calls
- CSS3 for Styling
- localStorage for Token Management

## 📁 Project Structure

```
Item-Management/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── itemController.js
│   ├── models/
│   │   ├── User.js
│   │   └── Item.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── itemRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ItemForm.js
│   │   │   └── ItemCard.js
│   │   ├── pages/
│   │   │   ├── Register.js
│   │   │   ├── Login.js
│   │   │   └── Dashboard.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── styles/
│   │   │   ├── App.css
│   │   │   ├── Auth.css
│   │   │   └── Dashboard.css
│   │   ├── App.js
│   │   └── index.js
│   ├── .env.example
│   └── package.json
```

## 🚀 Quick Setup (Mac)

### 1️⃣ Create Project Structure

```bash
# Create main directory
mkdir -p ~/Desktop/Item-Management
cd ~/Desktop/Item-Management

# Create backend structure
mkdir -p backend/{config,controllers,models,routes,middleware}

# Create frontend structure
mkdir -p frontend/src/{components,pages,services,styles}
mkdir -p frontend/public
```

### 2️⃣ Backend Setup

```bash
cd backend

# Initialize Node project
npm init -y

# Install dependencies
npm install express cors mongoose bcryptjs jsonwebtoken dotenv nodemon

# Copy all backend files (already created)

# Create .env file
cp .env.example .env
```

**Edit `.env` file:**
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/lost-found?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_12345
PORT=5000
```

### 3️⃣ Frontend Setup

```bash
cd ../frontend

# Create React app with npx
npx create-react-app .

# Install Axios
npm install axios

# Copy all frontend files (already created)
```

### 4️⃣ Run the Application

#### Terminal 1 - Backend:
```bash
cd ~/Desktop/Item-Management/backend
npm start
```

Backend runs on: **http://localhost:5000**

#### Terminal 2 - Frontend:
```bash
cd ~/Desktop/Item-Management/frontend
npm start
```

Frontend runs on: **http://localhost:3000**

## 📌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Items
- `POST /api/items` - Add item (Protected)
- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get item by ID
- `GET /api/items/search?name=xyz` - Search items
- `PUT /api/items/:id` - Update item (Protected)
- `DELETE /api/items/:id` - Delete item (Protected)

## 🔐 Authentication Flow

1. User registers with name, email, password
2. Password is hashed using bcryptjs
3. JWT token is generated and sent to client
4. Token stored in localStorage
5. Token sent in Authorization header for protected routes
6. Middleware verifies token before allowing access

## 📝 Sample Request Examples

### Register
```json
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Add Item
```json
POST /api/items
Headers: Authorization: Bearer <token>
{
  "itemName": "Blue Backpack",
  "description": "Blue backpack with laptop compartment",
  "type": "Lost",
  "location": "Central Park, NYC",
  "date": "2024-01-15",
  "contactInfo": "john@example.com"
}
```

## 🧪 Testing the System

1. **Register**: Create a new account on the Register page
2. **Login**: Login with your credentials
3. **Dashboard**: Add an item (Lost or Found)
4. **Search**: Search for items by name
5. **Update**: Edit your own items
6. **Delete**: Delete your items
7. **View**: See all items in the database

## ⚠️ Important Notes

- MongoDB connection is required (use MongoDB Atlas for free cloud hosting)
- JWT secret should be a strong random string in production
- CORS is enabled for localhost:3000
- Passwords are hashed before storing in database
- Only item owners can update/delete their items
- Token expires in 7 days

## 🐛 Troubleshooting

### Backend won't start
```bash
# Check if port 5000 is already in use
lsof -i :5000
# Kill process using port 5000
kill -9 <PID>
```

### MongoDB connection failed
- Check your MONGO_URI in .env
- Ensure MongoDB Atlas cluster is active
- Verify IP whitelist includes your IP

### Frontend can't connect to backend
- Ensure backend is running on http://localhost:5000
- Check CORS configuration in server.js
- Clear browser cache and localStorage

## 📦 Dependencies

**Backend:**
- express: Web framework
- mongoose: MongoDB ODM
- bcryptjs: Password hashing
- jsonwebtoken: JWT authentication
- cors: Cross-origin requests
- dotenv: Environment variables

**Frontend:**
- react: UI library
- axios: HTTP client
- react-scripts: Build tool

## 🎓 Learning Points

- JWT-based authentication
- Protected routes and middleware
- MongoDB schema design
- React state management
- Axios interceptors
- Async/await patterns
- Error handling
- CRUD operations

## 📄 License

ISC

---

**Ready to use! Follow the Quick Setup section to get started.**
