import React from 'react';
import type { PermissionStatus, SubscriptionStatus, ServiceWorkerStatus } from '../types/notification';
import { StatusBadge } from './StatusBadge';

interface Props {
  permission: PermissionStatus;
  subscription: SubscriptionStatus;
  serviceWorker: ServiceWorkerStatus;
}

export const NotificationStatusCard: React.FC<Props> = ({
  permission,
  subscription,
  serviceWorker,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm">
      <h2 className="font-semibold mb-4">Notification Status</h2>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Permission</span>
          <StatusBadge status={permission === 'granted' ? 'active' : permission === 'denied' ? 'error' : 'pending'} label={permission} />
        </div>

        <div className="flex justify-between">
          <span>Subscription</span>
          <StatusBadge status={subscription === 'subscribed' ? 'active' : 'inactive'} label={subscription} />
        </div>

        <div className="flex justify-between">
          <span>Service Worker</span>
          <StatusBadge status={serviceWorker === 'active' ? 'active' : 'inactive'} label={serviceWorker} />
        </div>
      </div>
    </div>
  );
};