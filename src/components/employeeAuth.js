import React, { Component } from "react";

import SignIn from "./usrSigninComp";
import { EmployeeSignUp } from "./EmployeeSignUp";

import "../style/Home.css";

export class employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChoose: true,
      showSignIn: false,
      showSignUp: false,
    };
    this.SignInChosen = this.SignInChosen.bind(this);
    this.SignUpChoosen = this.SignUpChoosen.bind(this);
  }

  SignInChosen() {
    this.setState({
      showSignIn: true,
      showChoose: false,
    });
  }
  SignUpChoosen() {
    this.setState({
      showSignUp: true,
      showChoose: false,
    });
  }
  render() {
    return (
      <div>
        {this.state.showChoose && (
          <section
            className="u-align-center u-clearfix u-grey-10 u-section-1"
            id="sec-c036"
          >
            <div className="u-clearfix u-sheet u-sheet-1">
              <div className="u-align-center u-container-style u-custom-color-1 u-group u-radius-50 u-shape-round u-group-1">
                <div className="u-container-layout u-container-layout-1">
                  <div>
                    <h3 className="u-text u-text-default u-text-1"></h3>
                  </div>
                  <div className="choose centered-content">
                    <button
                      className="employee choose_button"
                      onClick={this.SignInChosen}
                    >
                      Sign in
                    </button>
                    <button
                      className="choose_button"
                      onClick={this.SignUpChoosen}
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {this.state.showSignIn && <SignIn />}
        {this.state.showSignUp && <EmployeeSignUp />}
      </div>
    );
  }
}

export default employee;
