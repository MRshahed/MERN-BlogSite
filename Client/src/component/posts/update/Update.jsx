import "../../write/Write.css";
import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { Context } from "../../context/Context";
const PF = "http://localhost:5000/images/";
const Write = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const [post, setPost] = useState({});
  const [img, setImg] = useState(null);
  const path = location.pathname.split("/")[2];
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.description);
      setImg(res.data.photo);
    };

    getPost();
  }, [path]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPost = {
      username: user.username,
      title,
      description: desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedPost.photo = filename;

      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.put(`/posts/${post._id}`, updatedPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="write__container">
      <img
        src={file ? URL.createObjectURL(file) : PF + img}
        alt="post img"
        className="write__img"
      />

      <form className="write__form">
        <div className="write__form-group">
          <label htmlFor="fileInput">
            <i className="bx bx-image-add add__icon"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />

          <input
            className="write__title"
            type="text"
            placeholder="Write Your Title..."
            autoFocus={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="write__form-group">
          <textarea
            placeholder="Write Your Story..."
            className="write__story"
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button
          className="publish__button"
          type="submit"
          onClick={handleSubmit}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Write;
