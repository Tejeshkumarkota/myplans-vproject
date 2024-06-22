import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function TopNav() {

  const location = useLocation();

  return (
    <div className="nav w-100">
      <nav className="navbar navbar-expand-lg w-100">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/images/logo.png" height="40" width="40" className="img-fluid" alt="Logo" />            
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={"nav-link" + (location.pathname === "/" ? " active" : "")} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link" + (location.pathname === "/about-us" ? " active" : "")} to="/about-us">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link" + (location.pathname === "/gallery" ? " active" : "")} to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link" + (location.pathname === "/contact-us" ? " active" : "")} to="/contact-us">
                  Contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link" + (location.pathname === "/login" ? " active" : "")} to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
