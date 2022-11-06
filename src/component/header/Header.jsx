import React from "react";
import "./Header.css";
import img from "../../assets/profile1.png";
const Header = () => {
  return (
    <header className="header">
      <nav className="nav__container">
        <div className="header__logo">
          <a href="index.html" className="header__logo-text">
            Wonder Land
          </a>
        </div>

        <div className="header__list">
          <ul className="header__list-item">
            <li>Home</li>
            <li>Posts</li>
            <li>Write</li>
            <li>Logout</li>
          </ul>
        </div>
        <div className="header__right">
          <img className="header__img" src={img} alt="profile img" />
          <a className="header__search-icon" alt="search icon">
            <i className="header__search-icon bx bx-search-alt-2"></i>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
