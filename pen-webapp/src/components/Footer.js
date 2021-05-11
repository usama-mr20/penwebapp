import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className=" container">
        <div className="row">
          <div className="col-sm">
            <Link to="/" className="logoName">
              PEN APP
            </Link>
            <p id="aboutInfoF">
              Keeping notes has never <br />
              been so easy without PEN.
            </p>
          </div>

          <div className="col-sm">
            <ul>
              <h4>Useful Links</h4>
              <Link to="/dashboard"> Dashboard</Link>
              <br />
              <Link to="/features">Features</Link>
              <br />
              <Link to="/about">About</Link>
            </ul>
          </div>
          <div className="col-sm">
            <ul>
              <h4>Contact</h4>
              <p>Contact information will be available soon.</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
