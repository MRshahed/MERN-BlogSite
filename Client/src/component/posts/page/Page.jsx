import "./Page.css";
import Sidebar from "../../sidebar/Sidebar";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
const PF = "http://localhost:5000/images/";
const Page = () => {
  const location = useLocation();
  const { user } = useContext(Context);
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id} `, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="page__container">
      <div className="page__content">
        <img src={PF + post.photo} alt="post cover" className="page__img" />

        <h1 className="page__title">
          {post.title}
          {user && user.username === post.username && (
            <div className="page__edit-container">
              <i className="page__edit-icon bx bxs-edit"></i>
              <i
                className="page__edit-icon bx bxs-trash"
                onClick={handleDelete}
              ></i>
            </div>
          )}
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
