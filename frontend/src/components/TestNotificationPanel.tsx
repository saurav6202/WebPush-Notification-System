import { useState } from "react";
import api from "../lib/axios";
import { showSuccess, showWarning } from "../utils/toast";

interface Props {
  disabled?: boolean;
}

export const TestNotificationPanel = ({ disabled }: Props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [url, setUrl] = useState("/");
  const [loading, setLoading] = useState(false);

  const sendNotification = async () => {
    if (!title || !body) {
      showWarning("Title and body required");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/notifications/send", {
        payload: {
          title,
          body,
          url,
          type: "test",
        },
      });

      if (res.data.success) {
        showSuccess("Notification sent 🚀");
        setTitle("");
        setBody("");
        setUrl("/");
      }
    } catch (err) {
      console.error(err);
      showWarning("Failed to send notification");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-5 space-y-4">
      <h2 className="text-lg font-semibold">Test Notification Panel (Admin)</h2>

      <input
        className="w-full border p-2 rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full border p-2 rounded"
        placeholder="Message"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <input
        className="w-full border p-2 rounded"
        placeholder="URL (optional)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button
        onClick={sendNotification}
        disabled={disabled || loading}
        className={`px-4 py-2 rounded text-white ${
          disabled || loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
        }`}
      >
        {loading ? "Sending..." : "Send Notification"}
      </button>
    </div>
  );
};
