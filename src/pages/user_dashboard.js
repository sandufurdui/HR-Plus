import React from "react";

import Calendar from "../components/CalendarComp";

import UserAvatar from "../assets/user-avatar.png";
import Logo from "../assets/HR-app_logo-white.svg";

import "../style/user_dashboard.css";
import "../style/footer.css";

export const UserDashboardPage = () => {
  return (
    <div class="user-dashboard">
      <div class="employee-info">
        <div class="image">
          <img src={UserAvatar} alt="UserAvatar" />
        </div>
        <div class="info">
          <p class="employee-surname-name">Employee Name</p>
          <p class="employee-surname-name">Employee Surame</p>
          <p class="email-work-hours">Email: employee@org.com</p>
          <p class="email-work-hours">Work Hours: xx</p>
        </div>
      </div>
      <div class="calendar">
        <Calendar />
      </div>
      <div class="footer">
        <div class="inf">
          <img class="logo" src={Logo} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim{" "}
          </p>
        </div>
        <div class="contacts">
          <a href="" class="about">
            About
          </a>
          <a href="" class="help_center">
            Help Center{" "}
          </a>
          <a href="" class="contact_us">
            Contact Us{" "}
          </a>
        </div>
        <div class="follow">
          <h3>Follow us</h3>
          <img class="insta" src="../instagram.png" />
          <img class="facebook" src="../facebook.png" />
          <img class="twitter" src="../twitter.png" />
        </div>
      </div>
    </div>
  );
};
