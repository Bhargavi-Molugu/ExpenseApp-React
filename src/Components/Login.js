import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-5">
          <h2 className="heading-section">Login #09</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="login-wrap py-5">
            <h3 className="text-center mb-0">Welcome</h3>
            <p className="text-center">
              Sign in by entering the information below
            </p>
            <form action="#" className="login-form">
              <div className="form-group">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-user"></span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  required=""
                />
              </div>
              <div className="form-group">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-lock"></span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required=""
                />
              </div>
              <div className="form-group d-md-flex">
                <div className="w-100 text-md-right">
                  <a href="#">Forgot Password</a>
                </div>
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn form-control btn-primary rounded submit px-3">
                  Get Started
                </button>
              </div>
            </form>
            <div className="w-100 text-center mt-4 text">
              <p className="mb-0">Don't have an account?</p>
              <a href="#">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
