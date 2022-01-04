import React from "react";
import { Link } from "react-router-dom";

import "../style/sign_in.css";

export const AdminSignIn = () => {
  return (
    <div>
      <div className="container-sign-in">
        <div>
          <h1 className="sign-in-title">Sign in</h1>
        </div>
        <div className="sign-in-div">
          <form className="sign-in-form">
            <label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </label>
            <label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </label>
            <Link
              to="/adminPanel"
              type="submit"
              id="sign-in-button"
              value="Sign In"
            >
              Sign in
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
