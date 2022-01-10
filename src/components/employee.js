import React from "react";
import "../style/employee_pop_up.css"

function employee() {
  return (
    <div>
      <div id="addemployee" className="overlay">
        {/*change id to the respective meed name*/}
        <div className="popup">
          <div className="pop-div">
            <h2 />
            <a className="close" href="#">
              &times;
            </a>
            <form class="replacement-form">
              <input type="text" name="name" class="input-design" placeholder="Name" required />
              <input type="text" name="surname" class="input-design" placeholder="Surname" required />
              <input type="text" name="wage" class="input-design" placeholder="Wage" required />
              <input type="text" name="company-id" class="input-design" placeholder="Company ID" required />
              <input type="email" name="email" class="input-design" placeholder="Email" required />
              <input type="password" name="password" class="input-design" placeholder="Password" required />
              <input type="text" name="managed-by-id" class="input-design" placeholder="Managed by ID" required />
              <select name="role" class="role input-design" value="Role">
                <option value="" disabled selected hidden>
                  Role
                </option>
              </select>
              <div class=" display-style">
                <p class="text-color text-size">Start date</p>
                <input type="date" name="date" class="date-input " required />
              </div>
              <div class=" display-style">
                <p class="text-color text-size">End date</p>
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

export default employee;
