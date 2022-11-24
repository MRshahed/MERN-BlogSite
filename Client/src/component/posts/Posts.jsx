import Sidebar from "../sidebar/Sidebar";
import Post from "./Post";
import "./Posts.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPost();
  }, [search]);
  return (
    <section className="posts" id="posts">
      <div className="posts__container">
        {posts.map((p) => (
          <Post post={p} key={p._id} />
        ))}
      </div>

      <div className="sidebar">
        <Sidebar />
      </div>
    </section>
  );
};

export default Posts;
