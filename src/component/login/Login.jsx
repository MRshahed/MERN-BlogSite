import "./Login.css";

const Login = () => {
  return (
    <div className="login__containenr">
      <form className="login__form">
        <h1 className="login__title">Login</h1>
        <div className="login__input">
          <label>Email</label>
          <input type="email" placeholder="Your Email" />

          <label>Password</label>
          <input type="password" placeholder="Your Password" />
        </div>
        <button type="submit" className="login__button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
