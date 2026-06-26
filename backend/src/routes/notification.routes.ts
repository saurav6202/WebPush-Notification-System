import { Router } from "express";
import { handleSubscribe, handleUnsubscribe } from "../controllers/notification.controller";
const router = Router();

router.post("/subscribe", handleSubscribe);
router.delete("/unsubscribe", handleUnsubscribe);

export default router;