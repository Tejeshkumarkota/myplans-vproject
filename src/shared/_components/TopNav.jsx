import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RouteConstants } from "../constants/RouteConstants";

export default function TopNav() {

  const location = useLocation();

  return (
    <div className="nav w-100">
      <nav className="navbar navbar-expand-lg w-100">
        <div className="container-fluid">
          <Link className="navbar-brand" to={RouteConstants.HOME}>
            <img src="/assets/images/logo.png" height="40" width="40" className="img-fluid" alt="Logo" />            
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
                <Link className={"nav-link" + (location.pathname === RouteConstants.HOME ? " active" : "")} to={RouteConstants.HOME}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link" + (location.pathname === RouteConstants.ABOUT_US ? " active" : "")} to={RouteConstants.ABOUT_US}>
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link" + (location.pathname === RouteConstants.GALLERY ? " active" : "")} to={RouteConstants.GALLERY}>
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link" + (location.pathname === RouteConstants.CONTACT_US ? " active" : "")} to={RouteConstants.CONTACT_US}>
                  Contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={RouteConstants.LOGIN}>
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
