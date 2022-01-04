import React from "react";

import "../style/meeting.css";

function meetingpop() {
  return (
    <div id="addmeet" className="overlay">
      <div className="popup">
        <div className="pop-div">
          <h2 />
          <a className="close" href="#">
            &times;
          </a>
          <form className="meeting-form">
            <div className="content">
              <input
                type="text"
                id="text"
                name="text"
                className="pretty-input "
                placeholder="Meeting name"
                required
              />
              <p className=" text-color text-size"> Date </p>
              <input type="date" name="date" className="date-box" required />
              <p className=" text-color text-size"> Time Duration </p>
              <input
                type="number"
                name="date"
                className="time-input"
                max="10"
                min="1"
                placeholder="hours"
                required
              />
              <p className=" text-color text-size "> Meeting Notes </p>
              <textarea className="notes" placeholder="Notes.. "></textarea>
              <div className="checkbox-div ">
                <div className="myCheckbox text-color ">
                  Interview
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    name="interview"
                  />
                </div>
              </div>
              <button className="button-design" type="submit" value="Submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default meetingpop;
