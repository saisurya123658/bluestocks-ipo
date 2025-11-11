# 🚀 Bluestock IPO Management System

The **Bluestock IPO Management System** is a full-stack web application built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.  
It allows users to perform complete **CRUD (Create, Read, Update, Delete)** operations for managing IPO listings efficiently.

---

## 📁 Project Structure

This project consists of two separate applications that must be run on different servers:

Bluestock_Project/
│
├── backend/ # Node.js + Express + MongoDB (API Server)
└── client/ # React.js Frontend (User Interface)

yaml
Copy code

---

## 🧭 Clone This Project

To get a copy of this project up and running on your local machine, follow these steps 👇

### Step 1: Clone the Repository

```bash
git clone https://github.com/KaranSingh52ED/Bluestock_Project.git
⚙️ Backend Setup (Node.js + Express + MongoDB)
Step 2: Navigate to the Backend Folder
bash
Copy code
cd Bluestock_Project/backend
Step 3: Install Dependencies
bash
Copy code
npm install
Step 4: Create a .env File
Create a .env file in the backend/ directory and add your environment variables:

env
Copy code
PORT=8001
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/bluestock
JWT_SECRET=your_jwt_secret_key

EMAIL_USER=your_email@example.com
EMAIL_PASS=your_password
EMAIL_FROM=your_email@example.com
⚠️ Replace <username> and <password> with your MongoDB credentials.
You can use MongoDB Atlas for a free cloud database.

Step 5: Run the Backend Server
bash
Copy code
npm start
The backend server will start at:
👉 http://localhost:8001

💻 Frontend Setup (React.js)
Step 6: Navigate to the Client Folder
bash
Copy code
cd ../client
Step 7: Install Dependencies
bash
Copy code
npm install
Step 8: Create a .env File (Optional)
You can create a .env file in the client/ directory for the API base URL:

env
Copy code
REACT_APP_API_URL=http://localhost:8001
Step 9: Run the React Development Server
bash
Copy code
npm start
The frontend server will run at:
👉 http://localhost:3000

🧩 Features
✅ Add New IPO Listings
✅ Update or Edit IPO Details
✅ Delete IPO Records
✅ View All Listed IPOs
✅ Search & Filter IPOs
✅ Secure Authentication using JWT
✅ RESTful API Architecture

🛠️ Tech Stack
Layer	Technology
Frontend	React.js, Axios, Tailwind CSS / Material UI
Backend	Node.js, Express.js
Database	MongoDB (via Mongoose)
Authentication	JWT (JSON Web Token)
Email Service	Nodemailer
Version Control	Git & GitHub

🧑‍💻 API Documentation
Once the backend server is running, you can explore all APIs using:

Postman, or

Visit http://localhost:8001/api

☁️ MongoDB Atlas Setup (Optional for Cloud Database)
If you don’t have MongoDB installed locally, follow these quick steps:

Go to MongoDB Atlas.

Sign up or log in.

Create a new Cluster (Free Tier works fine).

Click on Database Access → Add a new user with a strong password.

Go to Network Access → Allow access from all IPs (0.0.0.0/0).

Get your Connection String (URI) and replace it in .env:

ini
Copy code
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/bluestock
🧑‍🤝‍🧑 Contributors
Karan Singh — Email (Team Lead & Backend SDE)

📜 License
This project is licensed under the Bluestock Fintech License.
For more details, visit 👉 Bluestock Fintech

💡 Quick Start Summary
Command	Description
git clone <repo-url>	Clone the project
cd backend && npm install	Install backend dependencies
cd client && npm install	Install frontend dependencies
npm start (in both folders)	Run backend and frontend servers
Visit http://localhost:3000	Access the web app

📷 Screenshot (Optional)
Add a preview screenshot of your app here once deployed or running locally:

scss
Copy code
![Bluestock IPO Management Dashboard](screenshot.png)
🌐 Deployment (Optional)
To deploy this project:

Frontend: Use Vercel or Netlify

Backend: Use Render or Railway

Database: Use MongoDB Atlas
