# 📝 MERN Stack Todo List App

This is a full-stack **Todo List web application** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). The app allows users to create, edit, delete, and mark todos as complete.

---

## 🚀 Features

- Add a new todo
- Edit existing todos
- Mark todos as completed
- Delete todos
- Responsive UI with clean design
- Connected frontend and backend via RESTful APIs

---

## 🛠 Technologies Used

**Frontend:**
- React.js
- Axios
- CSS / Bootstrap (or Tailwind)

**Backend:**
- Node.js
- Express.js
- MongoDB (with Mongoose)

**Deployment:**
- Frontend: [Vercel](https://vercel.com)
- Backend: [Render](https://render.com) or [Railway](https://railway.app)

---

## 🔗 Live Links

- 🌐 **Frontend**: [https://your-frontend.vercel.app](https://your-frontend.vercel.app)
- 🌐 **Backend**: [https://your-backend.onrender.com](https://your-backend.onrender.com)
- 🎥 **Demo Video**: [https://drive.google.com/your-demo-video](https://drive.google.com/your-demo-video)

---

## ⚙️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/mern-todo-app.git
cd mern-todo-app
```

### 2. Backend Setup
```bash
cd server
npm install
touch .env
# Add the following to your .env:
# MONGO_URI=your_mongodb_connection_string
npm start
```

### 3. Frontend Setup
```bash
cd client
npm install
npm start
```

---

## 📂 Folder Structure

```
mern-todo-app/
├── client/         # React frontend
├── server/         # Express backend
├── README.md
```

---

## 📸 Demo Screenshots

> *[Add screenshots of your UI and APIs here]*

---

## 👨‍💻 Author

**Your Name**  
[LinkedIn](https://linkedin.com/in/yourprofile) | [GitHub](https://github.com/yourusername)

---

## 📌 Notes

- Ensure `.env` file is NOT pushed to GitHub.
- CORS is properly configured in `server.js`.
- MongoDB used from Atlas or local (based on your config).
- Deployed backend should support CRUD APIs for todos.
