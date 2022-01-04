import React, { Component } from "react";

import { AdminSignIn } from "./admSignInComp";
import EmployeeAuth from "./employeeAuth";

import Logo from "../assets/HR-app_logo.svg";

export class auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChoose: true,
      showEmployee: false,
      showAdmin: false,
    };
    this.EmployeeChoose = this.EmployeeChoose.bind(this);
    this.AdminChoose = this.AdminChoose.bind(this);
  }

  EmployeeChoose() {
    this.setState({
      showEmployee: true,
      showChoose: false,
    });
  }
  AdminChoose() {
    this.setState({
      showAdmin: true,
      showChoose: false,
    });
  }

  render() {
    return (
      <div>
        {this.state.showChoose ? (
          <section
            className="u-align-center u-clearfix u-grey-10 u-section-1"
            id="sec-c036"
          >
            <div className="u-clearfix u-sheet u-sheet-1">
              <div className="clear u-align-center u-container-style u-custom-color-1 u-group u-radius-50 u-shape-round u-group-1">
                <div>
                  <div>
                    <h3 className="u-text u-text-default u-text-1 welcome">
                      Welcome to
                    </h3>
                    <div className="centered-content">
                      <img className="logo" src={Logo} />
                    </div>
                  </div>
                  <div className="choose centered-content">
                    <button
                      className="employee choose_button"
                      onClick={this.EmployeeChoose}
                    >
                      Employee
                    </button>
                    <button
                      className="choose_button"
                      onClick={this.AdminChoose}
                    >
                      Admin
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {this.state.showEmployee ? <EmployeeAuth /> : null}
        {this.state.showAdmin ? <AdminSignIn /> : null}
      </div>
    );
  }
}

export default auth;
