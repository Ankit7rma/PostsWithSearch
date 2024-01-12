// src/components/PostForm.jsx
import React, { useState } from "react";

const PostForm = ({ onAddPost }) => {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim() && message.trim()) {
      onAddPost({ userName, message });
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
        Post Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
