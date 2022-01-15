import React, { Component } from 'react'
import "../style/calendar.css"
import Calendar from 'react-calendar';
import AddWorkHours from "./addWorkHrs";
import "../style/pop.css";

export class CalendarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCalendar: true,
      showWorkHrs: false,
    };
    this.addWorkHrsPop = this.addWorkHrsPop.bind(this);
  }

  addWorkHrsPop() {
    this.setState({
      showWorkHrs: true,
    });
  }

  HideaddWorkHrs() {
    this.setState({
      showWorkHrs: false,
    });
  }
  render() {
    return (
      <div>
        {this.state.showCalendar ? (
          <div>
            <Calendar onClickDay={this.addWorkHrsPop} id="date" view="day" className="main_calendar " tileClassName="tile_date" />
          </div>
        ) : null}
        {this.state.showWorkHrs ? <AddWorkHours /> : null}
      </div>
    );
  }

}

export default CalendarComp;

