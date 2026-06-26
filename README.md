# 🔔 Web Push Notification System

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-8-47A248?logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

A production-ready **Web Push Notification System** built with **React, TypeScript, Express.js, MongoDB, and the Web Push API**. This project demonstrates the complete push notification lifecycle—from browser permission and subscription management to sending notifications through **web-push** and delivering them via **Service Workers**, even when the website is closed.

---

## ✨ Features

* 🔔 Browser Push Notifications
* 🛡️ Notification Permission Management
* ⚙️ Service Worker Registration
* 📡 Push Subscription Management
* 💾 Store & Update Subscriptions in MongoDB
* 📤 Send Notifications to All Subscribers
* 🖱️ Open Custom URL on Notification Click
* 🧹 Automatic Cleanup of Expired Subscriptions
* 🌐 Works Across Multiple Browsers & Devices
* 📱 Responsive Admin Test Panel
* ⚡ Built with TypeScript
* 🎨 Modern UI with React & Tailwind CSS

---

## 🛠 Tech Stack

### Frontend

* React 19
* TypeScript
* Tailwind CSS
* Axios
* Vite

### Backend

* Node.js
* Express.js
* TypeScript
* MongoDB
* Mongoose
* web-push

---

## 📂 Project Structure

```text
WebPush-Notification-System/
│
├── frontend/
│   ├── public/
│   │   └── sw.js
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── utils/
│   │   └── ...
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── ...
│   └── package.json
│
└── README.md
```

---

# 🏗️ System Architecture

```text
                 React Application
                        │
                        ▼
             Notification Manager
                        │
         ┌──────────────┴──────────────┐
         ▼                             ▼
 Permission Manager             Service Worker
         │                             │
         ▼                             ▼
 Push Subscription             Push Event Listener
         │
         ▼
      Express API
         │
         ▼
       MongoDB
         │
         ▼
      web-push
         │
         ▼
 Browser Push Service (FCM)
         │
         ▼
      User Device
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/saurav6202/WebPush-Notification-System.git

cd WebPush-Notification-System
```

---

## 2. Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Runs on:

```text
http://localhost:5173
```

---

## 3. Backend Setup

```bash
cd backend

npm install

npm run dev
```

Runs on:

```text
http://localhost:4000
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the **backend** directory.

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

VAPID_PUBLIC_KEY=your_public_key

VAPID_PRIVATE_KEY=your_private_key

VAPID_EMAIL=mailto:your@email.com
```

---

# 🔑 Generate VAPID Keys

```bash
npx web-push generate-vapid-keys
```

Copy the generated keys into your `.env` file.

---

# 🔄 Notification Flow

```text
User visits website
        │
        ▼
Browser requests notification permission
        │
        ▼
Service Worker registered
        │
        ▼
Push subscription created
        │
        ▼
Subscription stored in MongoDB
        │
        ▼
Admin sends notification
        │
        ▼
Backend retrieves subscriptions
        │
        ▼
web-push sends notification
        │
        ▼
Service Worker receives push event
        │
        ▼
Browser displays notification
        │
        ▼
User clicks notification
        │
        ▼
Website opens to the specified URL
```

---

# 🗄️ Push Subscription Schema

```ts
{
  _id,
  userId,
  endpoint,
  expirationTime,
  keys: {
    auth,
    p256dh
  },
  deviceInfo: {
    browser,
    browserVersion,
    os,
    platform,
    userAgent
  },
  active,
  lastSeen,
  createdAt,
  updatedAt
}
```

---

# 📡 API Endpoints

### Subscribe

```http
POST /api/notifications/subscribe
```

Creates or updates a push subscription.

---

### Unsubscribe

```http
DELETE /api/notifications/unsubscribe
```

Removes a push subscription.

---

### Send Notification

```http
POST /api/notifications/send
```

Broadcasts a push notification to all active subscribers.

---

# 📋 Current Features

* ✅ Push Notifications
* ✅ Service Workers
* ✅ VAPID Authentication
* ✅ MongoDB Subscription Storage
* ✅ Multi-browser Support
* ✅ Notification Click Actions
* ✅ Device Tracking
* ✅ Automatic Subscription Updates
* ✅ Expired Subscription Cleanup

---

# 🚧 Future Improvements

* JWT Authentication
* User-Based Notifications
* Class-Based Notifications
* Topic & Group Notifications
* Scheduled Notifications
* Notification Templates
* Notification Analytics
* Retry Queue
* Device Management Dashboard
* Docker Support
* Unit & Integration Tests
* CI/CD Pipeline

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Saurav**

If you found this project helpful, consider giving it a ⭐ on GitHub.

Built with ❤️ using React, TypeScript, Express.js, MongoDB, Service Workers, and the Web Push API.
