import React, { useContext } from "react";
import "./Header.css";
import img from "../../assets/profile1.png";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { LogOut } from "../context/Actions";
const Header = () => {
  const { user, dispatch } = useContext(Context);

  const HangleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <header className="header">
      <nav className="nav__container">
        <div className="header__logo">
          <Link to={"/"} className="header__logo-text">
            Wonder Land
          </Link>
        </div>

        <div className="header__list">
          <ul className="header__list-item">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/posts"}>Posts</Link>
            </li>
            <li>
              <Link to={"/write"}>Write</Link>
            </li>
            {user && <li onClick={HangleLogout}>Logout</li>}
          </ul>
        </div>
        <div className="header__right">
          {user ? (
            <Link to={"/settings"}>
              <img className="header__img" src={img} alt="profile img" />
            </Link>
          ) : (
            <ul className="header__list-item">
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/register"}>Register</Link>
              </li>
            </ul>
          )}

          <span className="header__search-icon" alt="search icon">
            <i className="header__search-icon bx bx-search-alt-2"></i>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
