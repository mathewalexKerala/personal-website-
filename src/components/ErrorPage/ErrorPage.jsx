import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="errorpage">
      <h1>404 Error Page</h1>

      <section className="error-container">
        <span>4</span>
        <span>
          <span className="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div className="link-container">
        <Link to="/" className="more-link">
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
