import React from "react";
import img from "../../assets/homBG2.png";
import Posts from "../posts/Posts";
import "./Home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container">
        <div className="home__title">
          <span className="home__title-sm">Your Travel</span>
          <span className="home__title-lg">Blog</span>
        </div>
        <img src={img} className="home__img" alt="home img" />
      </div>
      <Posts />
    </section>
  );
};

export default Home;
