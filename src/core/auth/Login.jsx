import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { RouteConstants } from "../../shared/constants/RouteConstants";

const Login = () => {

    const nav = useNavigate();
    const goToList = () => 
        nav(RouteConstants.LIST_CATEGORY);
    
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-body">
                <h1 className="text-center title">Login</h1>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      autoComplete="off"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      autoComplete="off"
                    />
                  </div>
                  <button onClick={goToList} type="button" className="btn btn-primary">
                    Login
                  </button>
                  <Link to={RouteConstants.REGISTER} className="text-primary text-decoration-none mx-2">Register now</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
