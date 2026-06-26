import React from 'react';
import type{ NotificationItem } from '../types/notification';

export const NotificationHistory: React.FC<{ items: NotificationItem[] }> = ({ items }) => {
  return (
    <div className="bg-white p-4 rounded-xl border">
      <h2 className="font-semibold mb-3">History</h2>

      {items.length === 0 ? (
        <p className="text-gray-400">No notifications yet</p>
      ) : (
        items.map((n) => (
          <div key={n.id} className="border-b py-2">
            <p className="font-medium">{n.title}</p>
            <p className="text-sm text-gray-500">{n.body}</p>
          </div>
        ))
      )}
    </div>
  );
};