import { useEffect, useState } from "react";
import type {
  NotificationItem,
  PermissionStatus,
  SubscriptionStatus,
  ServiceWorkerStatus,
} from "../types/notification";
import NotificationService from "../services/notification.service";
import { showError, showSuccess, showWarning } from "../utils/toast";
import { getDeviceInfo } from "../utils/device";

export function usePushNotifications() {
  const [permission, setPermission] = useState<PermissionStatus>("default");

  const [subscription, setSubscription] =
    useState<SubscriptionStatus>("not-subscribed");

  const [serviceWorker, setServiceWorker] =
    useState<ServiceWorkerStatus>("not-registered");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    try {
      await NotificationService.registerServiceWorker();
      setServiceWorker("active");
      const permission = await NotificationService.getPermission();
      setPermission(permission);
      const subscription = await NotificationService.syncSubscriptionState();
      setSubscription(subscription ? "subscribed" : "not-subscribed");
    } catch (error) {
      console.error(error);
    }
  };

  const enableNotifications = async () => {
    try {
      setLoading(true);
      const permission = await NotificationService.requestPermission();
      setPermission(permission);
      if (permission !== "granted") {
        showWarning("Notification permission denied.");
        return;
      }
      const subscription = await NotificationService.subscribe();
      const deviceInfo = getDeviceInfo();
      const response = await await NotificationService.saveSubscription({
        subscription,
        userId: "student_101",
        deviceInfo,
      });
      if (response.success) {
        showSuccess("Notification enabled.");
        setSubscription("subscribed");
      }
    } catch (error) {
      console.error(error);
      console.log("err: ", error)
      showWarning("Failed to enable notifications.");
    } finally {
      setLoading(false);
    }
  };

  const disableNotification = async () => {
    try {
      setLoading(true);
      await NotificationService.unsubscribe();
      setSubscription("not-subscribed");
      showSuccess("Notification disabled");
    } catch (error) {
      console.error(error);
      showError("Failed to unsubscribe");
    } finally {
      setLoading(false);
    }
  };

  return {
    permission,
    subscription,
    serviceWorker,
    loading,
    enableNotifications,
    disableNotification,
  };
}
