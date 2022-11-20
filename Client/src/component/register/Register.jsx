import "./Register.css";

const Register = () => {
  return (
    <div className="register__containenr">
      <form className="register__form">
        <h1 className="register__title">Register</h1>
        <div className="register__input">
          <label>Username</label>
          <input type="text" placeholder="Your Username" />

          <label>Email</label>
          <input type="email" placeholder="Your Email" />

          <label>Password</label>
          <input type="password" placeholder="Your Password" />
        </div>
        <button type="submit" className="register__button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
