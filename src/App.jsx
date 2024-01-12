// src/App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [userName, setUserName] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNameSubmit = () => {
    setUserName(document.getElementById("nameInput").value);
  };

  const handlePostSubmit = () => {
    const postMessage = document.getElementById("postInput").value;
    const newPost = {
      user: userName,
      message: postMessage,
      comments: [],
    };
    setPosts([newPost, ...posts]);
    document.getElementById("postInput").value = "";
  };

  const handleCommentSubmit = (postIndex) => {
    const commentMessage = document.getElementById(
      `commentInput-${postIndex}`
    ).value;
    const updatedPosts = [...posts];
    updatedPosts[postIndex].comments.push({
      user: userName,
      message: commentMessage,
    });
    setPosts(updatedPosts);
    document.getElementById(`commentInput-${postIndex}`).value = "";
  };

  const handleSearch = () => {
    const filteredPosts = posts.filter(
      (post) =>
        post.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.comments.some((comment) =>
          comment.message.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setPosts(filteredPosts);
  };

  useEffect(() => {
    setLoading(true);
    // Simulate loading posts from an API
    setTimeout(() => {
      setLoading(false);
      setPosts([
        { user: "User1", message: "This is the first post", comments: [] },
        { user: "User2", message: "Another post here", comments: [] },
      ]);
    }, 2000);
  }, []);

  return (
    <div className="app-container">
      {!userName && (
        <div className="user-input">
          <label htmlFor="nameInput">Enter your name:</label>
          <input type="text" id="nameInput" placeholder="Enter Name " />
          <button onClick={handleNameSubmit}>Submit</button>
        </div>
      )}

      {userName && (
        <div>
          <div className="post-input">
            <textarea id="postInput" placeholder="Enter your post"></textarea>
            <button onClick={handlePostSubmit}>Create Post</button>
          </div>

          <div className="search-input">
            <input
              type="text"
              placeholder="Search posts and comments"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>

          {loading && <p>Loading...</p>}

          {!loading && posts.length > 0 ? (
            <div className="post-container">
              {posts.map((post, index) => (
                <div key={index} className="post">
                  <p>
                    {post.user}: {post.message}
                  </p>
                  {post.comments.map((comment, commentIndex) => (
                    <p key={commentIndex} className="comment">
                      {comment.user}: {comment.message}
                    </p>
                  ))}
                  <div className="comment-input">
                    <textarea
                      id={`commentInput-${index}`}
                      placeholder="Add a comment"
                    ></textarea>
                    <button onClick={() => handleCommentSubmit(index)}>
                      Add Comment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No posts to show. Create a post!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;