import img from "../../assets/about.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get("/catagories");
      setCat(res.data);
    };
    getCat();
  }, []);

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
          {cat.map((c) => (
            <Link to={`/?cat=${c.name}`}>
              <li className="sidebar__list-item" key={c._id}>
                {c.name}
              </li>
            </Link>
          ))}
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
