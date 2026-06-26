import { Schema, model } from "mongoose";

import { Document } from "mongoose";

interface IPushSubscription extends Document {
  userId: string;

  endpoint: string;

  expirationTime: number | null;

  keys: {
    auth: string;
    p256dh: string;
  };

  browser: string;

  deviceInfo: {
    browser: string;
    browserVersion: string;
    os: string;
    platform: string;
    userAgent: string;
  };

  createdAt: Date;

  updatedAt: Date;
}

const pushSubscriptionSchema = new Schema<IPushSubscription>(
  {
    userId: {
      type: String,
      required: false,
      index: true,
    },

    endpoint: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    expirationTime: {
      type: Number,
      default: null,
    },

    keys: {
      auth: {
        type: String,
        required: true,
      },

      p256dh: {
        type: String,
        required: true,
      },
    },

    browser: {
      type: String,
      default: "Unknown",
    },

    deviceInfo: {
      browser: String,
      browserVersion: String,
      os: String,
      platform: String,
      userAgent: String,
    },
  },
  {
    timestamps: true,
  },
);

pushSubscriptionSchema.index({ userId: 1, endpoint: 1 }, { unique: true });

export default model<IPushSubscription>(
  "PushSubscription",
  pushSubscriptionSchema,
);
