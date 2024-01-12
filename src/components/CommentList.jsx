// src/components/CommentList.jsx
import React from "react";

const CommentList = ({ postId, comments }) => {
  const postComments = comments.filter((comment) => comment.postId === postId);

  return (
    <div>
      <ul>
        {postComments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.userName}</strong>: {comment.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
