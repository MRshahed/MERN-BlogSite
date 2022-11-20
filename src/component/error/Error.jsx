import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <section className="page_404">
      <div className="error__container">
        <div className="four_zero_four_bg">
          <h1 className="error__title">404</h1>
        </div>

        <div className="contant_box_404">
          <h3 className="error__info">Look like you're lost!</h3>
          <p className="error__info-p">
            The page you are looking for not avaible
          </p>

          <Link to={"/"} className="link_404">
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
