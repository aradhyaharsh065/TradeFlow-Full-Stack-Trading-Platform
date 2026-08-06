# 📈 TradeFlow – Full Stack Trading Platform

TradeFlow is a full-stack trading platform inspired by Zerodha, developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application features a responsive landing page and an interactive trading dashboard where users can securely manage holdings, positions, watchlists, and orders through a modern user interface.

> ⚠️ **Disclaimer:** This project is developed for educational and portfolio purposes only. It is inspired by Zerodha and is not affiliated with or endorsed by Zerodha Broking Ltd.

---

## 🚀 Live Demo

🌐 **Application:** [TradeFlow Live](https://trade-flow-full-stack-trading-platf.vercel.app/login)

---

# 📖 Project Overview

TradeFlow is a full-stack web application developed to simulate the core workflow of a modern stock trading platform. The project consists of a responsive landing website and an interactive dashboard where authenticated users can manage holdings, positions, watchlists, and orders.

The frontend is built using React.js and communicates with a Node.js and Express.js backend through RESTful APIs. MongoDB Atlas provides persistent data storage, while JWT authentication ensures secure user access.
---

# ✨ Features

- 🔐 Secure JWT Authentication
- 📊 Interactive Trading Dashboard
- 📈 Real-Time Watchlist
- 💼 Holdings Management
- 📌 Positions Tracking
- 📝 Orders Management
- 🔗 RESTful API Integration
- 📱 Responsive User Interface
- ☁️ Deployed using Vercel, Render, and MongoDB Atlas

---

# 🛠️ Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | React.js, HTML5, CSS3 |
| Dashboard | React.js | Axios
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | JWT, bcrypt |
| Cloud & Deployment | Vercel, Render |

---

# 📂 Project Structure

```text
TradeFlow
│
├── Backend
│   ├── model
│   ├── schemas
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
│   └── index.js
│
├── dashboard
│
├── frontend
│
├── README.md
│
└── .gitignore

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/aradhyaharsh065/TradeFlow-Full-Stack-Trading-Platform.git
```

Navigate to the project directory.

```bash
cd TradeFlow-Full-Stack-Trading-Platform
```

---

## 2. Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file inside the **Backend** folder.

```env
MONGO_URL=your_mongodb_atlas_connection_string

JWT_SECRET=your_secret_key

PORT=3002
```

Start the backend server.

```bash
npm start
```

---

## 3. Frontend Setup

```bash
cd frontend

npm install

npm start
```

---

## 4. Dashboard Setup

```bash
cd dashboard

npm install

npm start
```

---

# ▶️ Running the Project

Start the backend server.

```bash
cd Backend

npm start
```

Start the frontend.

```bash
cd frontend

npm start
```

Start the dashboard.

```bash
cd dashboard

npm start
```

---

# 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/allHoldings` | Retrieve all holdings |
| GET | `/allPositions` | Retrieve all positions |
| GET | `/allOrders` | Retrieve all orders |


> Update the endpoint names if your backend routes are different.

---

# 🚀 Future Improvements

- 📈 Live Stock Market API Integration
- 💹 Buy/Sell Order Execution
- 📊 Advanced Portfolio Analytics
- 🔔 Real-time Notifications
- 👤 User Profile Management
- 🌙 Dark Mode Support

---

# 📚 Key Learnings

- Built a complete MERN stack application from development to deployment.
- Implemented secure JWT-based authentication and protected routes.
- Designed and consumed RESTful APIs using Axios.
- Worked with MongoDB Atlas for cloud database management.
- Deployed frontend and backend using Vercel and Render.
- Improved understanding of full-stack architecture and API integration.

---

# 👨‍💻 Author

**Aradhya Harsh**

- 📧 Email: aradhyaharsh065@gmail.com
- 💻 GitHub: https://github.com/aradhyaharsh065
- 🔗 LinkedIn: https://www.linkedin.com/in/aradhya-harsh-b44944374/

---
# 📄 License

This project is developed solely for educational and portfolio purposes. It is inspired by Zerodha and is not affiliated with, endorsed by, or associated with Zerodha Broking Ltd. or any of its affiliates.
