import React from "react";
import "./Header.css";
import img from "../../assets/profile1.png";
const Header = () => {
  return (
    <header className="header">
      <nav className="nav__container">
        <div className="header__social">
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

        <div className="header__list">
          <ul className="header__list-item">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Write</li>
            <li>Logout</li>
          </ul>
        </div>
        <div className="header__right">
          <img className="header__img" src={img} alt="profile img" />
          <a className="header__search-icon">
            <i className="header__search-icon bx bx-search-alt-2"></i>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
