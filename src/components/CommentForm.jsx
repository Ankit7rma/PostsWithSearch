// src/components/CommentForm.jsx
import React, { useState } from "react";

const CommentForm = ({ postId, onAddComment }) => {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim() && message.trim()) {
      onAddComment({ postId, userName, message });
      setUserName("");
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your Name:
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Comment Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
