import "./Write.css";
import Img from "../../assets/home.jpg";

const Write = () => {
  return (
    <div className="write__container">
      <img src={Img} alt="post img" className="write__img" />
      <form className="write__form">
        <div className="write__form-group">
          <label htmlFor="fileInput">
            <i className="bx bx-image-add add__icon"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />

          <input
            className="write__title"
            type="text"
            placeholder="Write Your Title..."
            autoFocus={true}
          />
        </div>

        <div className="write__form-group">
          <textarea
            placeholder="Write Your Story..."
            className="write__story"
            type="text"
          ></textarea>
        </div>
        <button className="publish__button" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
