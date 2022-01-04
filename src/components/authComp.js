import React, { Component } from 'react'
import SignIn from "./admSignInComp"
import EmployeeAuth from "./employeeAuth"
import Logo from '../images/HR-app_logo.svg';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {button } from 'react-router-dom'
import App from "../App"

export class auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showChoose: true,
            showEmployee: false,
            showAdmin: false,
        };
        this.EmployeeChoose = this.EmployeeChoose.bind(this);
        this.AdminChoose = this.AdminChoose.bind(this);
    }
    
      EmployeeChoose() {
        this.setState({
          showEmployee: true,
          showChoose: false,
        });
      }
      AdminChoose() {
        this.setState({
          showAdmin: true,
          showChoose: false,
        });
      }
      
    render() {
        
        return( 
            <div>{this.state.showChoose ? (
                <section class="u-align-center u-clearfix u-grey-10 u-section-1" id="sec-c036">
                <div class="u-clearfix u-sheet u-sheet-1">
                    <div class="clear u-align-center u-container-style u-custom-color-1 u-group u-radius-50 u-shape-round u-group-1">
                        <div>
                            <div>
                                <h3 class="u-text u-text-default u-text-1 welcome">Welcome to</h3>
                                <div className="centered-content">
                                  <img class="logo" src={Logo} />
                                </div>  
                            </div>
                            <div class="choose centered-content">
                                <button  class="employee choose_button" onClick={this.EmployeeChoose}>Employee</button>
                                <button class="choose_button" onClick={this.AdminChoose} >Admin</button> 
                            </div>
                        </div>
                    </div>
                </div>
                </section>
              ) : (
                null
              )}
                
            {this.state.showEmployee ?
               <EmployeeAuth /> :
               null
            }
            {this.state.showAdmin ?
               <SignIn /> :
               null
            }
            </div>
        )    
    }
}

export default auth

