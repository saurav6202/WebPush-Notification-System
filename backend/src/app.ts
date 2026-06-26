import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
// import webpush from "web-push";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);



import notificationRouter from "./routes/notification.routes";

app.use("/notifications", notificationRouter);

app.get("/", (_, res) => {
  res.send("Notificaiton server");
});

export default app;
