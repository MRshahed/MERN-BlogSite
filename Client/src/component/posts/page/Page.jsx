import "./Page.css";
import Sidebar from "../../sidebar/Sidebar";
import Img from "../../../assets/post1.jpg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Page = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <div className="page__container">
      <div className="page__content">
        <img src={post.photo} alt="post cover" className="page__img" />

        <h1 className="page__title">
          {post.title}
          <div className="page__edit-container">
            <i className="page__edit-icon bx bxs-edit"></i>
            <i className="page__edit-icon bx bxs-trash"></i>
          </div>
        </h1>

        <div className="page__info">
          <Link to={`/?user=${post.username}`}>
            <p className="page__author">{post.username}</p>
          </Link>
          <p className="page__date">
            {new Date(post.createdAt).toDateString()}
          </p>
        </div>

        <h3 className="page__description">{post.description}</h3>
      </div>
      <Sidebar />
    </div>
  );
};

export default Page;
