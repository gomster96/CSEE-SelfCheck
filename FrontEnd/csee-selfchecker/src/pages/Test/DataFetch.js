import React, { useState, useEffect } from 'react';
import axios from 'axios';
function DataFetch() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/lecture/3')
      .then((res, req) => {
        res.req.method = req.headers['access-control-request-method'];
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetch;
