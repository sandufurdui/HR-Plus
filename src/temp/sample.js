import React from "react";

import "../temp/sample.css";

function sample() {
  return (
    <div>
      <a className="dark-bg " href="#addpop">
        pop trigger
      </a>
      <div id="addpop" className="overlay">
        {/*change id to the respective meed name*/}
        <div className="popup">
          <div className="pop-div">
            <h2 />
            <a className="close" href="#">
              &times;
            </a>
            {/*useless shit*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default sample;
