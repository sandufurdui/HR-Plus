import React, { Component } from 'react'
import "../style/sign_in.css"
import AdminPanel from "./adminPanel"
import {
  Link
} from "react-router-dom";

export class admSignInComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adminPanelRoute: "/adminPanel",
        };
    }

    
    
    render() {
        return (
                <div>
                    <div class="container-sign-in">
                    <div><h1 class="sign-in-title">Sign in</h1> </div>
                    <div class="sign-in-div">
                      <form class="sign-in-form" >
                        <label>
                          <input type="email" id="email" name="email" placeholder="Email"  required/>
                        </label>
                        <label>
                          <input type="password" name="password" id="password" placeholder="Password" required/>
                        </label>
                        <Link to="/adminPanel" type="submit"  id="sign-in-button" value="Sign In">Sign in</Link>
                      </form>
                    </div>  
                  </div> 
                </div>
        )
    }
}

export default admSignInComp