import "./Settings.css";
import { useContext, useState } from "react";
import axios from "axios";

import { Context } from "../context/Context";
const PF = "http://localhost:5000/images/";

const Settings = () => {
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasseword] = useState("");
  const [fullname, setFullname] = useState("");
  const [desc, setDesc] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updateUser = {
      userName,
      email,
      password,
      fulName: fullname,
      proDisc: desc,
      userId: user._id,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updateUser.profilepic = filename;

      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.put(`/users/${user._id}`, updateUser);
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="settings__container">
      <div className="settings__content">
        <div className="settings__profile">
          <img
            src={file ? URL.createObjectURL(file) : PF + user.profilepic}
            alt="user Profile"
            className="user__profile"
          />

          <div className="button__section">
            <label htmlFor="fileInput">
              <span className="upload__button">Upload New</span>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />

            <button type="button" className="upload__button remove__button">
              Remove Picture
            </button>
          </div>
        </div>
        <hr />

        <form className="settings__info">
          <div className="settings__info-content">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              value={user.fulName}
              onChange={(e) => setFullname(e.target.value)}
            />

            <label>Username</label>
            <input
              type="text"
              placeholder="Usernrame"
              value={user.username}
              onChange={(e) => setUserName(e.target.value)}
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="********"
              onChange={(e) => setPasseword(e.target.value)}
            />

            <label>Bio</label>
            <textarea
              type="text"
              className="settings__textarea"
              placeholder="Write about yourself..."
              value={user.proDisc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="settings__button"
            onClick={handleUpdate}
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
