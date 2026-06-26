import React, { useState } from "react";

interface Props {
  onSend: (msg: string) => void;
  isEnabled: boolean;
}

export const TestNotificationPanel: React.FC<Props> = ({
  onSend,
  isEnabled,
}) => {
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSend(message);
    setMessage("");
  };

  return (
    <form onSubmit={submit} className="flex gap-2">
      <input
        className="border p-2 flex-1 rounded-lg"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={!isEnabled}
        placeholder="Test message"
      />

      <button
        className="px-6 py-3 bg-indigo-700 text-white rounded-xl disabled:opacity-50 cursor-pointer"
        disabled={!isEnabled}
      >
        Send
      </button>
    </form>
  );
};
