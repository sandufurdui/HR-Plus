import React, {useState} from 'react'
import "../style/calendar.css"
import Calendar from 'react-calendar';


const CalendarComp = props => (
  <div>
    <Calendar onClickDay={(value) => alert('New date is: ', value)} view="day" className="main_calendar" tileClassName="tile_date"/>
  </div>
)

export default CalendarComp

