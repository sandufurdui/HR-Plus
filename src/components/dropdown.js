import React, { Component } from "react";
import Turnover from "./turnover";
import Meeting from "./meetingpop";
import Replace from "./replacement"
import Training from "./training"
import Employee from "./employee"
import "../style/pop.css"

export class dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAdmin: true,
            showTurnover: false,
            showReplacement: false,
            showTraining: false,
            showMeeting: false,
            showEmployee: false,
        };
        this.TurnoverPop = this.TurnoverPop.bind(this);
        this.replacementPop = this.replacementPop.bind(this);
        this.trainingPop = this.trainingPop.bind(this);
        this.meetingPop = this.meetingPop.bind(this);
        this.employeePop = this.employeePop.bind(this);
    }

    TurnoverPop() {
        this.setState({
            showTurnover: true,
        });
    }

    hideTurnoverPop() {
        this.setState({
            showTurnover: false,
        });
    }

    replacementPop() {
        this.setState({
            showReplacement: true,
        });
    }

    hideReplacementPop() {
        this.setState({
            showReplacement: false,
        });
    }

    trainingPop() {
        this.setState({
            showTraining: true,
        });
    }

    hideTrainingPop() {
        this.setState({
            showTraining: false,
        });
    }

    meetingPop() {
        this.setState({
            showMeeting: true,
        });
    }

    hideMeetingPop() {
        this.setState({
            showMeeting: false,
        });
    }
    employeePop() {
        this.setState({
            showEmployee: true,
        });
    }

    hideEmployeePop() {
        this.setState({
            showEmployee: false,
        });
    }

    render() {
        return (
            <div>

                {this.state.showAdmin ? (
                    <div class="dropdown">
                        <button class="dropbtn"> some fun actions </button>
                        <div class="dropdown-content">
                            <a class="dark-bg" href="#addreplacement" onClick={this.replacementPop}>
                                + add replacement
                            </a>
                            <a class="dark-bg" href="#addturnover" onClick={this.TurnoverPop}>
                                + add turnover
                            </a>
                            <a class="dark-bg" href="#addtraining" onClick={this.trainingPop}>
                                + add training
                            </a>
                            <a class="dark-bg" href="#addemployee" onClick={this.employeePop}>
                                + add employee
                            </a>
                            <a class="dark-bg " href="#addmeet" onClick={this.meetingPop}>
                                + add meeting
                            </a>
                        </div>
                    </div>
                ) : null}
                {this.state.showReplacement ? (
                    <Replace />
                ) : null}
                {this.state.showTraining ? (
                   <Training /> 
                ) : null}
                {this.state.showMeeting ? <Meeting /> : null}
                {this.state.showTurnover ? <Turnover /> : null}
                {this.state.showEmployee ? <Employee /> : null}
            </div>
        );
    }
}

export default dropdown;
