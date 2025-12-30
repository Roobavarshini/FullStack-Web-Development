import React, { useState } from "react";

function BlogLayout() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      alert("Please enter a comment!");
      return;
    }
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div className="blog-container">
      <h2>📰 Simple Blog Page</h2>

      <div className="post">
        <h3>Understanding React Basics</h3>
        <p>
          React is a popular JavaScript library used to build interactive user
          interfaces. It uses components and state to update the UI efficiently.
        </p>
      </div>

      <div className="comments-section">
        <h3>💬 Comments</h3>

        <form onSubmit={addComment}>
          <input
            type="text"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit">Post</button>
        </form>

        {comments.length === 0 ? (
          <p>No comments yet</p>
        ) : (
          <ul>
            {comments.map((c, index) => (
              <li key={index}>{c}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Internal CSS */}
      <style>{`
        .blog-container {
          max-width: 700px;
          margin: 40px auto;
          padding: 20px;
          background: #f5f7fa;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .post {
          margin-bottom: 25px;
        }

        .comments-section h3 {
          margin-bottom: 10px;
        }

        form {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
        }

        input {
          flex: 1;
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #aaa;
        }

        button {
          padding: 10px 15px;
          background: #4caf50;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        button:hover {
          background: #388e3c;
        }

        ul {
          list-style: none;
          padding-left: 0;
        }

        li {
          background: white;
          padding: 8px;
          border-radius: 6px;
          margin-bottom: 6px;
        }

        @media (max-width: 600px) {
          .blog-container {
            margin: 20px;
          }
          form {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}

export default BlogLayout;
