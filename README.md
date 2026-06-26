# 🔔 Web Push Notification System

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-8-47A248?logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-success)

A full-stack **Web Push Notification System** built with **React**, **TypeScript**, **Express.js**, **MongoDB**, and **Service Workers**. It allows users to subscribe for push notifications and enables sending notifications to all registered devices directly from a web dashboard.

---

## ✨ Features

- 📩 Browser Push Notifications
- 🔐 Notification Permission Handling
- 📡 Push Subscription Management
- 💾 Store Subscriptions in MongoDB
- 🚀 Send Notifications to All Subscribers
- 📱 Works Across Multiple Browsers & Devices
- 📝 Notification History (Frontend)
- ⚡ Built with TypeScript
- 🎨 Modern React UI

---

## 🏗️ Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Axios
- Vite

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- web-push

---

## 📂 Project Structure

```
web-push-notification-system/
│
├── client/                 # React App
│   ├── src/
│   ├── public/
│   └── ...
│
├── server/                 # Express API
│   ├── src/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── ...
│
└── README.md
```

---

## 🔄 System Architecture

```
                React Application
                       │
                       ▼
           Notification Manager
                       │
      ┌────────────────┴────────────────┐
      ▼                                 ▼
Permission Manager              Service Worker
      │                                 │
      ▼                                 ▼
Push Subscription              Push Events
      │
      ▼
      Express API
      │
      ▼
      MongoDB
      │
      ▼
 web-push Library
      │
      ▼
Browser Push Service
      │
      ▼
 User Device
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/saurav6202/WebPush-Notification-System.git

cd WebPush-Notification-System
```

---

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## Backend Setup

```bash
cd server

npm install

npm run dev
```

Runs on:

```
http://localhost:4000
```

---

## Environment Variables

Create a `.env` file inside the server directory.

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

VAPID_PUBLIC_KEY=your_public_key

VAPID_PRIVATE_KEY=your_private_key

VAPID_EMAIL=mailto:your@email.com
```

---

## Generate VAPID Keys

```bash
npx web-push generate-vapid-keys
```

Copy the generated keys into your `.env` file.

---

## Notification Flow

1. User opens the application.
2. Browser asks for notification permission.
3. Service Worker is registered.
4. User subscribes to Push Notifications.
5. Subscription is stored in MongoDB.
6. Admin sends a notification.
7. Backend retrieves all subscriptions.
8. web-push sends notifications.
9. Browser displays the notification.

---

## MongoDB Subscription Schema

```ts
{
  _id,
  userId,
  endpoint,
  keys: {
    auth,
    p256dh
  },
  browser,
  device,
  createdAt,
  updatedAt
}
```

---

## API Endpoints

### Subscribe

```
POST /api/notifications/subscribe
```

Stores a new push subscription.

---

### Unsubscribe

```
DELETE /api/notifications/unsubscribe
```

Removes an existing subscription.

---

### Send Notification

```
POST /api/notifications/send
```

Sends a push notification to all subscribers.

---

## Future Improvements

- User Authentication
- Topic-Based Notifications
- Scheduled Notifications
- Notification Analytics
- Retry Failed Deliveries
- Device Management
- Admin Dashboard
- Rate Limiting
- Docker Support
- Unit & Integration Tests
- CI/CD Pipeline

---

## License

This project is licensed under the MIT License.

---

## Author

**Saurav**

Built with ❤️ using React, TypeScript, Express.js, MongoDB, and Web Push API.