import "./Settings.css";
import Img from "../../assets/profile1.png";

const Settings = () => {
  return (
    <div className="settings__container">
      <div className="settings__content">
        <div className="settings__profile">
          <img src={Img} alt="user Profile" className="user__profile" />

          <div className="button__section">
            <button type="button" className="upload__button">
              Upload New
            </button>

            <button type="button" className="upload__button remove__button">
              Remove Picture
            </button>
          </div>
        </div>
        <hr />

        <form className="settings__info">
          <div className="settings__info-content">
            <label>Name</label>
            <input type="text" placeholder="Shahed Hossen" />

            <label>Username</label>
            <input type="text" placeholder="MRshahed" />

            <label>Email</label>
            <input type="email" placeholder="shahedhossensaad@gmail.com" />

            <label>Password</label>
            <input type="password" placeholder="********" />

            <label>Bio</label>
            <textarea
              type="text"
              className="settings__textarea"
              placeholder="Hello there! i'm a Web Developer. just love what i do and do what i love"
            />
          </div>
          <button type="submit" className="settings__button">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
