import React from "react";
import type {
  PermissionStatus,
  SubscriptionStatus,
} from "../types/notification";
import Loader from "./Loader";

interface Props {
  permission: PermissionStatus;
  subscription: SubscriptionStatus;
  onEnable: () => void;
  onDisable: () => void;
  isLoading: boolean;
}

export const EnableNotificationsButton: React.FC<Props> = ({
  permission,
  subscription,
  onEnable,
  onDisable,
  isLoading,
}) => {
  const enabled = permission === "granted" && subscription === "subscribed";

  return (
    <button
      onClick={subscription === "subscribed" ? onDisable : onEnable}
      disabled={isLoading || permission === "denied"}
      className="px-6 py-3 bg-indigo-600 text-white rounded-xl disabled:opacity-50 cursor-pointer"
    >
      {isLoading ? (
        <Loader />
      ) : subscription === "subscribed" ? (
        "Disable Notificatoin"
      ) : (
        "Enable Notifications"
      )}
    </button>
  );
};
