import React, { Component } from "react";
import "../style/turnover.css";

export class turnover extends Component {
  render() {
    return (
      <div>
        <div id="addturnover" className="overlay">
          <div className="popup">
            <div className="pop-div">
              <h2 />
              <a className="close" href="#">
                &times;
              </a>
              <form className="turnover-form">
                <p className="select">Select Employee</p>
                <select name="employee" className="employee" value="Employee">
                  <option value="" disabled selected hidden>
                    Employee
                  </option>
                </select>
                <button className="button-design" type="submit" value="Submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default turnover;
