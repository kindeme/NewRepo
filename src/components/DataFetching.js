import React, { useState, useEffect } from "react";
import axios from "axios";
// fetching a single element from api
// const url = "https://jsonplaceholder.typicode.com/posts";
// fetching a single element from api

function DataFetching() {
  // fetching agle element from api
  // const [posts, setPosts] = useState([]);
  /// fetching agle element from api
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  return (
    <div>
      {/* Fetch a sinlge element  */}
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <br />
      {post.title}
      {/* <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul> */}
    </div>
  );
}

export default DataFetching;
