import React from "react";

const Signup = () => {
  return (
    <div className="container m-3 p-4 border-secondary rounded-2 bg-dark text-secondary text-center">
      <form action="">
        <label className="mb-3 font-weight-bolder h3">Signup Form</label>
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
  );
};

export default Signup;
