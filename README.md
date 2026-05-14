# Minimal MERN Event Registration System

A simple, minimalist full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project allows users to register for an event, storing the data securely in a local MongoDB database.

## 🛠️ Tech Stack
- **Frontend**: React.js, functional components, Hooks (useState, fetch API), simple CSS
- **Backend**: Node.js, Express.js
- **Database**: Local MongoDB (`mongodb://127.0.0.1:27017/eventDB`)

## 📁 Project Structure
```text
event-registration/
├── backend/
│   ├── server.js               # Express server entry point
│   ├── models/
│   │   └── Registration.js     # Mongoose schema
│   ├── routes/
│   │   └── registerRoute.js    # API route handler
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.js              # Main React component
│   │   ├── index.js            # React root
│   │   └── index.css           # Minimal styles
│   ├── public/
│   │   └── index.html
│   └── package.json
```

## 🚀 Step-by-Step Setup Instructions

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and a local instance of [MongoDB](https://www.mongodb.com/try/download/community) installed and running.

### 1. Backend Setup

1. Open a terminal and navigate to the `backend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
   *(This installs `express`, `mongoose`, and `cors`)*
3. Start the backend server:
   ```bash
   npm start
   ```
   or for development mode (auto-restart):
   ```bash
   npm run dev
   ```
   **Expected output:**
   ```
   ✅ Connected to MongoDB (eventDB)
   🚀 Server running at http://localhost:5000
   ```

### 2. Frontend Setup

1. Open a new terminal and navigate to the `frontend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
   *(This installs React, ReactDOM, and React Scripts)*
3. Start the React development server:
   ```bash
   npm start
   ```
   The application will automatically open in your browser at `http://localhost:3000`.

## ⚙️ How it Works

1. The frontend (`App.js`) captures the user's Full Name, Email, Phone, and Event Name.
2. On submit, it sends a `POST` request to `http://localhost:5000/register` using the `fetch` API.
3. The backend (`registerRoute.js`) validates the incoming data.
4. If valid, it saves the data into the local MongoDB instance using the Mongoose model (`Registration.js`).
5. A success response is sent back to the frontend, which clears the form and shows a success message.

## 🗄️ Database Details
- **Database Name**: `eventDB`
- **Collection Name**: `registrations`
- **Connection String**: `mongodb://127.0.0.1:27017/eventDB`
