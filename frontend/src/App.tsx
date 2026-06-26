import { Header } from "./components/Header";
import { NotificationStatusCard } from "./components/NotificationStatusCard";
import { EnableNotificationsButton } from "./components/EnableNotificationsButton";

import { Toaster } from "sonner";
import { usePushNotifications } from "./hooks/usePushNotifications";
import { TestNotificationPanel } from "./components/TestNotificationPanel";

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

        <TestNotificationPanel disabled={subscription !== "subscribed"} />
      </div>
    </>
  );
};

export default App;

{
  /* <NotificationHistory items={history} /> */
}
