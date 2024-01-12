// src/components/PostList.jsx
import React from "react";
import CommentList from "./CommentList";

const PostList = ({ posts, comments }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.userName}</h3>
          <p>{post.message}</p>
          <CommentList postId={post.id} comments={comments} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
