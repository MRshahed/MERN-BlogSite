import "./Write.css";
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../context/Context";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description: desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="write__container">
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="post img"
          className="write__img"
        />
      )}

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
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="write__form-group">
          <textarea
            placeholder="Write Your Story..."
            className="write__story"
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button
          className="publish__button"
          type="submit"
          onClick={handleSubmit}
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
