import React from "react";
import "../style/meeting.css";

function meetingpop() {
    return (
        <div id="addmeet" class="overlay">
            <div class="popup">
                <div class="pop-div">
                    <h2 />
                    <a class="close" href="#">
                        &times;
                    </a>
                    <form class="meeting-form">
                        <div class="content">
                            <input
                                type="text"
                                id="text"
                                name="text"
                                class="pretty-input "
                                placeholder="Meeting name"
                                required
                            />
                            <p class=" text-color text-size"> Date </p>
                            <input type="date" name="date" class="date-box" required />
                            <p class=" text-color text-size"> Time Duration </p>
                            <input
                                type="number"
                                name="date"
                                class="time-input"
                                max="10"
                                min="1"
                                placeholder="hours"
                                required
                            />
                            <p class=" text-color text-size "> Meeting Notes </p>
                            <textarea class="notes" placeholder="Notes.. ">
                            </textarea>
                            <div class="checkbox-div ">
                                <div class="myCheckbox text-color ">
                                    Interview
                                    <input
                                        type="checkbox"
                                        class="checkbox-input"
                                        name="interview"
                                    />
                                </div>
                            </div>
                            <button class="button-design" type="submit" value="Submit">
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
