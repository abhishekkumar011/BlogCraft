# ✏️ Blog Craft

A blog platform built with the MERN stack (MongoDB, Express, React, Node.js).
This project demonstrates end-to-end skills: authentication, authorization, CRUD operations, file uploads, and frontend integration.

---

## 🚀 Features
🔐 User Authentication
- Signup and login with JWT-based authentication.
- Secure password hashing with bcrypt.
- JWT stored securely in localStorage.

📝 Blog Post Management
- Create posts with title, content, and image.
- View all posts.
- View a single post.
- Update & delete posts.

☁️ Cloudinary Integration
- Upload and manage post images.

---

## 🛠️ Tech Stack
- **Frontend** - React.js, Tailwind.css
- **Backend** - Node.js, Express.js, MongoDB
- **Others** Cloudinary, Multer, JWT, bcrypt
- **Deployment** - Frontend (vercel), Backend (Render)

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/abhishekkumar011/BlogCraft.git
cd blog-craft

```
### Backend Setup

Install dependencies:
```bash
cd backend
npm install

```

Create a .env file inside backend/:
```bash
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
TOKEN_EXPIRY=
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

Start backend:
```bash
npm run start
```

### Frontend Setup

Install dependencies:
```bash
cd frontend
npm install

```

Create a .env file inside backend/:
```bash
VITE_API_URL=http://localhost:5000/api
```

Start Frontend:
```bash
npm run start
```
