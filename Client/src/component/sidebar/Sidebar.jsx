import img from "../../assets/about.jpg";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar__container">
      {/* <div className="sidebar__item">
        <h1 className="about__title">About</h1>
        <img src={img} alt="about img" className="about__img" />
        <p className="about_description">
          Reprehenderit culpa nisi irure tempor. Reprehenderit culpa nisi irure
          tempor.
        </p>
      </div> */}
      <div className="sidebar__item">
        <h1 className="about__title">Catagories</h1>
        <ul className="sidebar__list">
          <li className="sidebar__list-item">Life</li>
          <li className="sidebar__list-item">Music</li>
          <li className="sidebar__list-item">Travel</li>
          <li className="sidebar__list-item">Tech</li>
          <li className="sidebar__list-item">Sports</li>
          <li className="sidebar__list-item">Cinema</li>
        </ul>
      </div>
      <div className="sidebar__item">
        <h1 className="about__title">Follow Us</h1>
        <div className="sidebar__social">
          <a className="header__social-icon">
            <i className="bx bxl-instagram"></i>
          </a>
          <a className="header__social-icon">
            <i className="bx bxl-twitter"></i>
          </a>
          <a className="header__social-icon">
            <i className="bx bxl-facebook-circle"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
