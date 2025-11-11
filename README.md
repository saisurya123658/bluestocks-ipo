# 🚀 Bluestock IPO Management System

The **Bluestock IPO Management System** is a full-stack web application built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.
It allows users to perform complete **CRUD (Create, Read, Update, Delete)** operations for managing IPO listings efficiently.

---

## 📁 Project Structure

This project consists of two separate applications that must be run on different servers:

```
Bluestock_Project/
│
├── backend/   # Node.js + Express + MongoDB (API Server)
└── client/    # React.js Frontend (User Interface)
```

---

## 🧽 Clone This Project

To get a copy of this project up and running on your local machine, follow these steps 👇

### Step 1: Clone the Repository

```bash
git clone https://github.com/KaranSingh52ED/Bluestock_Project.git
```

---

## ⚙️ Backend Setup (Node.js + Express + MongoDB)

### Step 2: Navigate to the Backend Folder

```bash
cd Bluestock_Project/backend
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Create a `.env` File

Create a `.env` file in the **backend/** directory and add your environment variables:

```env
PORT=8001
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/bluestock
JWT_SECRET=your_jwt_secret_key

EMAIL_USER=your_email@example.com
EMAIL_PASS=your_password
EMAIL_FROM=your_email@example.com
```

> ⚠️ Replace `<username>` and `<password>` with your MongoDB credentials.
> You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a free cloud database.

---

### Step 5: Run the Backend Server

```bash
npm start
```

The backend server will start at:
👉 **[http://localhost:8001](http://localhost:8001)**

---

## 💻 Frontend Setup (React.js)

### Step 6: Navigate to the Client Folder

```bash
cd ../client
```

### Step 7: Install Dependencies

```bash
npm install
```

### Step 8: Create a `.env` File (Optional)

You can create a `.env` file in the **client/** directory for the API base URL:

```env
REACT_APP_API_URL=http://localhost:8001
```

---

### Step 9: Run the React Development Server

```bash
npm start
```

The frontend server will run at:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🧩 Features

✅ Add New IPO Listings

✅ Update or Edit IPO Details

✅ Delete IPO Records

✅ View All Listed IPOs

✅ Search & Filter IPOs

✅ Secure Authentication using JWT

✅ RESTful API Architecture

---

## 🔧 Tech Stack

| Layer               | Technology                                  |
| ------------------- | ------------------------------------------- |
| **Frontend**        | React.js, Axios, Tailwind CSS / Material UI |
| **Backend**         | Node.js, Express.js                         |
| **Database**        | MongoDB (via Mongoose)                      |
| **Authentication**  | JWT (JSON Web Token)                        |
| **Email Service**   | Nodemailer                                  |
| **Version Control** | Git & GitHub                                |

---

## 🧑‍💻 API Documentation

Once the backend server is running, you can explore all APIs using:

* **Postman**, or
* Visit `http://localhost:8001/api`

---

## ☁️ MongoDB Atlas Setup (Optional for Cloud Database)

If you don’t have MongoDB installed locally, follow these quick steps:

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Create a new **Cluster** (Free Tier works fine)
4. Click on **Database Access → Add New User** and create credentials
5. Go to **Network Access → Allow access from all IPs (`0.0.0.0/0`)**
6. Get your **Connection String (URI)** and replace it in `.env`:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/bluestock
```

---

## 🧑‍🤝 Contributors

* **Sai Surya** — (Team Lead & Backend SDE)

---

## 📜 License

This project is licensed under the **Bluestock Fintech License**.
For more details, visit 👉 [Bluestock Fintech](https://bluestock.in/)

---

## 💡 Quick Start Summary

| Command                       | Description                      |
| ----------------------------- | -------------------------------- |
| `git clone <repo-url>`        | Clone the project                |
| `cd backend && npm install`   | Install backend dependencies     |
| `cd client && npm install`    | Install frontend dependencies    |
| `npm start` (in both folders) | Run backend and frontend servers |
| Visit `http://localhost:3000` | Access the web app               |

---


---

## 🌐 Deployment (Optional)

To deploy this project:

* **Frontend:** Use [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com)
* **Backend:** Use [Render](https://render.com) or [Railway](https://railway.app)
* **Database:** Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

💙 **Developed with passion by the Bluestock Team**

## ⭐ Support

If you like my projects or found them helpful, please consider giving a **star** 🌟 to support my work — it really motivates me to create more amazing projects!
👉 [Click here to Star my GitHub Profile](https://github.com/saisurya123658)
[![GitHub stars](https://img.shields.io/github/stars/saisurya123658?style=social)](https://github.com/saisurya123658)

