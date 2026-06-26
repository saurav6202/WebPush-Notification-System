import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="pb-6 border-b">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        📡 School OS Notifications
      </h1>
      <p className="text-gray-500 text-sm">Manage your push notifications</p>
    </header>
  );
};