import { Request, Response } from "express";

let subscriptions: PushSubscription[] = [];

export const handleSubscribe = (req: Request, res: Response) => {
  subscriptions.push(req.body.subscription);
  console.log(subscriptions);
  return res.json({ subscriptions, success: true });
};

export const handleUnsubscribe = async (req: Request, res: Response) => {
  const { endpoint } = req.body;
  console.log("endpoint: ", endpoint);
  subscriptions = subscriptions.filter((sub) => sub.endpoint !== endpoint);
  return res.json({
    success: true,
    message: "Subscription removed",
  });
};
