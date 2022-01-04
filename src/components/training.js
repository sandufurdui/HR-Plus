import React from 'react'

function training() {
    return (
        <div>
            <div id="addtraining" class="overlay">{/*change id to the respective meed name*/}
                <div class="popup">
                    <div class="pop-div">
                        <a class="close" href="#">&times;</a>
                        <form class="training-form">
                            <p class=" text-color text-size text-design">
                                Training Time and Duration
                            </p>
                            <div class=" display-style">
                                <p class="date-select text-color text-size">Date</p>
                                <input type="date" name="date" class="date-input " />
                            </div>
                            <div class=" display-style">
                                <p class="text-color text-size">
                                    Instruction Hours
                                </p>
                                <input type="number" name="ins-hours" max="10" min="1" class="pretty-input " placeholder="hours" />
                            </div>
                            <div class=" display-style ">
                                <p class=" text-color text-size">Training Length</p>
                                <input type="number" name="training-length" max="10" min="1" class="pretty-input " placeholder="hours" />
                            </div>
                            <p class=" text-color text-size text-design">
                                Trainer(s) Information
                            </p>
                            <div class="display-style ">
                                <p class="text-color text-size">Trainers Assigned</p>
                                <input type="number" name="tr-assigned" max="10" min="1" class="pretty-input " placeholder="hours" />
                            </div>
                            <div class=" display-style ">
                                <p class="text-color text-size">Trainers Pay Rate</p>
                                <input type="text" name="hours" class="pretty-input" placeholder="0.00" />
                            </div>
                            <div class=" display-style ">
                                <p class="training-costs text-color text-size">
                                    Training Costs
                                </p>
                                <input type="text" name="costs" class=" pretty-input" placeholder="0.00" />
                            </div>
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

export default training
