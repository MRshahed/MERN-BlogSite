import React, { useState, useEffect } from "react";
import img from "../../assets/homBG2.png";
import Posts from "../posts/Posts";
import "./Home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
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
    <section className="home" id="home">
      <div className="home__container">
        <div className="home__title">
          <span className="home__title-sm">Your Daily</span>
          <span className="home__title-lg">Blog</span>
        </div>
        <img src={img} className="home__img" alt="home img" />
      </div>
      <Posts Posts={posts} />
    </section>
  );
};

export default Home;
