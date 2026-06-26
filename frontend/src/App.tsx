import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { NotificationStatusCard } from "./components/NotificationStatusCard";
import { EnableNotificationsButton } from "./components/EnableNotificationsButton";
import { TestNotificationPanel } from "./components/TestNotificationPanel";
import { NotificationHistory } from "./components/NotificationHistory";

import type {
  NotificationItem,
  PermissionStatus,
  SubscriptionStatus,
  ServiceWorkerStatus,
} from "./types/notification";

import { subscribeUser } from "./utils/urlBase64ToUint8Array";
import api from "./lib/axios";
import { showSuccess, showWarning } from "./utils/toast";
import { Toaster } from "sonner";
import { usePushNotifications } from "./hooks/usePushNotifications";

const App = () => {
  const {
    permission,
    subscription,
    serviceWorker,
    loading,
    enableNotifications,
    disableNotification,
  } = usePushNotifications();
  return (
    <>
      <Toaster position="top-right" richColors closeButton />
      <div className="max-w-3xl mx-auto p-6 space-y-6 bg-amber-50 min-w-screen h-screen px-52">
        <Header />

        <NotificationStatusCard
          permission={permission}
          subscription={subscription}
          serviceWorker={serviceWorker}
        />

        <EnableNotificationsButton
          permission={permission}
          subscription={subscription}
          onEnable={enableNotifications}
          onDisable={disableNotification}
          isLoading={loading}
        />

        {/* <TestNotificationPanel onSend={sendTest} isEnabled={isEnabled} /> */}

        {/* <NotificationHistory items={history} /> */}
      </div>
    </>
  );
};

export default App;
