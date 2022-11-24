import "./Login.css";
import { useContext, useRef } from "react";
import { Context } from "../context/Context";
import axios from "axios";
import { LoginError, LoginStart, LoginSuccess } from "../context/Actions";
import { Link } from "react-router-dom";

const Login = () => {
  const userref = useRef();
  const passRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(LoginStart);
    try {
      const res = await axios.post("/auth/login", {
        username: userref.current.value,
        password: passRef.current.value,
      });
      dispatch(LoginSuccess(res.data));
    } catch (e) {
      dispatch(LoginError);
    }
  };

  return (
    <div className="login__containenr">
      <form className="login__form">
        <h1 className="login__title">Login</h1>
        <div className="login__input">
          <label>Username</label>
          <input type="text" placeholder="Your Username" ref={userref} />

          <label>Password</label>
          <input type="password" placeholder="Your Password" ref={passRef} />
        </div>
        <button
          type="submit"
          className="login__button"
          onClick={handleSubmit}
          disabled={isFetching}
        >
          Login
        </button>
        <p className="register__footer-p">
          Don't Have an Account?{" "}
          <Link to={"/register"}>
            <b>Register</b>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
