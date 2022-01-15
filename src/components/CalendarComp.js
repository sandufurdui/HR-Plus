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

  hideAddWorkHrs() {
    this.setState({
      showWorkHrs: false,
    });
  }
  render() {
    return (
      <div>
       
          <div>
            <Calendar onClickDay={this.addWorkHrsPop} id="date" view="day" className="main_calendar " tileClassName="tile_date" />
          </div>
        ) 
        {this.state.showWorkHrs && (
          <AddWorkHours onClose={() => this.hideAddWorkHrs()} />
        )}
      </div>
    );
  }

}

export default CalendarComp;

