import React from "react";

function training() {
  return (
    <div>
      <div id="addtraining" className="overlay">
        {/*change id to the respective meed name*/}
        <div className="popup">
          <div className="pop-div">
            <a className="close" href="#">
              &times;
            </a>
            <form className="training-form">
              <p className=" text-color text-size text-design">
                Training Time and Duration
              </p>
              <div className=" display-style">
                <p className="date-select text-color text-size">Date</p>
                <input type="date" name="date" className="date-input " />
              </div>
              <div className=" display-style">
                <p className="text-color text-size">Instruction Hours</p>
                <input
                  type="number"
                  name="ins-hours"
                  max="10"
                  min="1"
                  className="pretty-input "
                  placeholder="hours"
                />
              </div>
              <div className=" display-style ">
                <p className=" text-color text-size">Training Length</p>
                <input
                  type="number"
                  name="training-length"
                  max="10"
                  min="1"
                  className="pretty-input "
                  placeholder="hours"
                />
              </div>
              <p className=" text-color text-size text-design">
                Trainer(s) Information
              </p>
              <div className="display-style ">
                <p className="text-color text-size">Trainers Assigned</p>
                <input
                  type="number"
                  name="tr-assigned"
                  max="10"
                  min="1"
                  className="pretty-input "
                  placeholder="hours"
                />
              </div>
              <div className=" display-style ">
                <p className="text-color text-size">Trainers Pay Rate</p>
                <input
                  type="text"
                  name="hours"
                  className="pretty-input"
                  placeholder="0.00"
                />
              </div>
              <div className=" display-style ">
                <p className="training-costs text-color text-size">
                  Training Costs
                </p>
                <input
                  type="text"
                  name="costs"
                  className=" pretty-input"
                  placeholder="0.00"
                />
              </div>
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

export default training;
