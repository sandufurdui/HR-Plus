import React from 'react'
import "../temp/sample.css"

function sample() {
    return (
        <div>
            <a class="dark-bg " href="#addpop" >pop trigger </a>
            <div id="addpop" class="overlay">{/*change id to the respective meed name*/}
                <div class="popup">
                    <div class="pop-div">
                        <h2 />
                        <a class="close" href="#">&times;</a>
                        {/*useless shit*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sample
