import React from "react";

import Calendar from "../components/CalendarComp";

import UserAvatar from "../assets/user-avatar.png";
import Logo from "../assets/HR-app_logo-white.svg";

import "../style/user_dashboard.css";
import "../style/footer.css";

export const UserDashboardPage = () => {
  return (
    <div className="user-dashboard">
      <div className="employee-info">
        <div className="image">
          <img src={UserAvatar} alt="UserAvatar" />
        </div>
        <div className="info">
          <p className="employee-surname-name">Employee Name</p>
          <p className="employee-surname-name">Employee Surame</p>
          <p className="email-work-hours">Email: employee@org.com</p>
          <p className="email-work-hours">Work Hours: xx</p>
        </div>
      </div>
      <div className="calendar">
        <Calendar />
      </div>
      <div className="footer">
        <div className="inf">
          <img className="logo" src={Logo} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim{" "}
          </p>
        </div>
        <div className="contacts">
          <a href="" className="about">
            About
          </a>
          <a href="" className="help_center">
            Help Center{" "}
          </a>
          <a href="" className="contact_us">
            Contact Us{" "}
          </a>
        </div>
        <div className="follow">
          <h3>Follow us</h3>
          <img className="insta" src="../instagram.png" />
          <img className="facebook" src="../facebook.png" />
          <img className="twitter" src="../twitter.png" />
        </div>
      </div>
    </div>
  );
};
