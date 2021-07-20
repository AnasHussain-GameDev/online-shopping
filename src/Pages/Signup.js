import React from "react";

const Signup = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col align-middle mt-4 p-3 rounded-2 bg-dark mx-3 text-white text-center flex-column">
          <form action="">
            <label className="mb-3 fw-bold h3 text-secondary">
              Signup Form
            </label>
            <div className="form-group">
              <label htmlFor="username" className="form-label">
                Full Name
              </label>
              <input
                className="form-control mb-3"
                type="text"
                name="username"
                id="username"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                className="form-control mb-3"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                className="form-control  mb-3"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone No.</label>
              <input
                className="form-control mb-3"
                type="tel"
                name="phone"
                id="phone"
              />
            </div>
            <button className="btn btn-primary p-2" type="submit">
              SignUp
            </button>
          </form>
        </div>
        <div className=" col align-middle mt-4 mx-3 p-3 rounded-2 bg-dark text-white text-center flex-column">
          <form action="">
            <label className="mb-3 fw-bold h3 text-secondary">Sign in</label>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                className="form-control mb-3"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                className="form-control  mb-3"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <button className="btn btn-primary p-2" type="submit">
              SignIn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
