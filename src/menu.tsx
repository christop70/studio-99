import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      {/* Top Bar */}
      <div className="bg-dark text-white py-2">
        <div className="container d-flex justify-content-between">
          <div className="d-flex gap-3">
            <Link to="/" className="text-white text-decoration-none">
              STUDIO NETWORK
            </Link>
            <Link to="/" className="text-white text-decoration-none">
              STUDIO MUSIC
            </Link>
            <Link to="/" className="text-white text-decoration-none">
              STUDIO MOVIES
            </Link>
            <Link to="/" className="text-white text-decoration-none">
              STUDIO ON LOCATION
            </Link>
          </div>
          <div>
            <Link to="/login" className="text-white text-decoration-none">
              LOGIN
            </Link>{" "}
            /{" "}
            <Link to="/sign-up" className="text-white text-decoration-none">
              SIGN UP
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            STUDIO LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/livestream" className="nav-link">
                  Livestream
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/show-line-up" className="nav-link">
                  Show Line Up
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/demo-drop" className="nav-link">
                  Demo Drop
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-us" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
