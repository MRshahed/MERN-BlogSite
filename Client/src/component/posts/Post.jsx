import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ post }) => {
  return (
    <div className="post__container">
      <div className="post__content">
        <img className="post__img" src={post.photo} alt={post.photo} />

        <div className="post__info">
          <div className="post__catagories">
            {post.catagories.map((c) => (
              <span className="post__catagory">{c.name}</span>
            ))}
          </div>
          <Link to={`/post/${post._id}`}>
            <span className="Post__title">{post.title}</span>
          </Link>
          <span className="post__date">
            {new Date(post.createdAt).toDateString()}
          </span>
          <p className="post__description">{post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
