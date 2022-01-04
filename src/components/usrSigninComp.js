import React, { Component } from "react";
import "../style/sign_in.css";

export class usrSigninComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignIn: true,
      showDashboard: false,
    };
    this.ShowUserDashboard = this.ShowUserDashboard.bind(this);
  }

  ShowUserDashboard() {
    this.setState({
      showDashboard: true,
      showSignIn: false,
    });
  }
  render() {
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
              <a
                href="/userDashboard"
                type="submit"
                id="sign-in-button"
                value="Sign In"
              >
                Sign in
              </a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default usrSigninComp;
