import React from "react";
import "../style/replacement.css"

function replacement() {
  return (
    <div>
      <div id="addreplacement" className="overlay">
        <div className="popup">
          <div className="pop-div">
            <h2 />
            <a className="close" href="#">
              &times;
            </a>
            <form class="replacement-form">
              <p class=" text-design ">Advertising Detalis</p>
              <div class=" display-style ">
                <p class="text-color text-size">Advertising fees/termination</p>
                <input type="text" name="hours" class="input-design" placeholder="0.00" required />
              </div>
              <div class=" display-style">
                <p class="text-color text-size">Job vacancy communication time</p>
                <input type="number" name="hours" max="10" min="1" class="input-design " placeholder="hours" required />
              </div>

              <p class=" text-design ">Interviewing Detalis</p>
              <div class=" display-style">
                <p class="text-color text-size">Interview time</p>
                <input type="number" name="hours" max="10" min="1" class="input-design " placeholder="hours" required />
              </div>
              <div class=" display-style ">
                <p class="text-color text-size">Interviews amount</p>
                <input type="text" name="hours" class="input-design" placeholder="" required />
              </div>
              <div class=" display-style ">
                <p class="text-color text-size">Tests given</p>
                <input type="text" name="hours" class="input-design" placeholder="" required />
              </div>

              <p class=" text-design ">Costs</p>
              <div class=" display-style ">
                <p class="text-color text-size">Costs of materials/person</p>
                <input type="text" name="hours" class="input-design" placeholder="0.00" required />
              </div>
              <div class=" display-style ">
                <p class="text-color text-size">Costs of scoring/person</p>
                <input type="text" name="hours" class="input-design" placeholder="0.00" required />
              </div>

              <p class=" text-design ">Integration process</p>
              <div class=" display-style">
                <p class="text-color text-size">Pre-employment admin functions</p>
                <input type="number" name="hours" max="10" min="1" class="input-design " placeholder="hours" required />
              </div>
              <div class=" display-style">
                <p class="text-color text-size">Acquiring and disseminating</p>
                <input type="number" name="hours" max="10" min="1" class="input-design " placeholder="hours" required />
              </div>
              <div class=" display-style">
                <p class="date-select text-color text-size">Start date</p>
                <input type="date" name="date" class="date-input " required />
              </div>
              <div class=" display-style">
                <p class="date-select text-color text-size">End date</p>
                <input type="date" name="date" class="date-input " required />
              </div>


              <button class="button-design" type="submit" value="Submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default replacement;
