import React from 'react';

interface Props {
  status: 'active' | 'inactive' | 'pending' | 'error';
  label: string;
}

export const StatusBadge: React.FC<Props> = ({ status, label }) => {
  const config = {
    active: 'bg-emerald-100 text-emerald-700',
    inactive: 'bg-gray-100 text-gray-600',
    pending: 'bg-amber-100 text-amber-700',
    error: 'bg-rose-100 text-rose-700',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${config[status]}`}>
      {label}
    </span>
  );
};