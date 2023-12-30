import React, { useState, useEffect } from 'react';

function Posts() {
  const [postList, setPost] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts?limit=10&skip=10')
      .then(response => response.json())
      .then(json => setPost(json.posts))
  }, []);

  return (
    <div>
    <h3>Posts List</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Reactions</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {postList.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.reactions}</td>
              <td>
                {post.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Posts;
