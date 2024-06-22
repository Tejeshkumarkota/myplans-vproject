import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const nav = useNavigate();
  const goToLogin = () => nav("/login");

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-body">
              <h1 className="text-center title">Register</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    autoComplete="off"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Create Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
                <button
                  onClick={goToLogin}
                  type="button"
                  className="btn btn-primary"
                >
                  Register
                </button>
                <Link
                  to="/login"
                  className="text-primary text-decoration-none mx-2"
                >
                  Have an account? Login now
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
