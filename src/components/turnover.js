import React, { Component } from 'react'
import "../style/turnover.css"

export class turnover extends Component {
    render() {
        return (
            <div>
                <div id="addturnover" class="overlay">
                    <div class="popup">
                        <div class="pop-div">
                            <h2 />
                            <a class="close" href="#">&times;</a>
                            <form class="turnover-form">
                                <p class="select">Select Employee</p>
                                <select name="employee" class="employee" value="Employee">
                                    <option value="" disabled selected hidden>
                                        Employee
                                    </option>
                                </select>
                                <button class="button-design" type="submit" value="Submit">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default turnover
