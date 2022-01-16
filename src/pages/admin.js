import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

import { GetEmployeeByEmail, GetCompanyById } from "../services";
import { useApi } from "../services/useApi";

import Dropdown from "../components/dropdown";

import Logo from "../assets/HR-app_logo-white.svg";
import UserAvatar from "../assets/user-avatar.png";

import "../style/admin_panel.css";

export const AdminPage = () => {
  const history = useHistory();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [employee, setEmployee] = useState(null);
  const [company, setCompany] = useState(null);
  const request = useApi();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      history.push("/");
      return;
    }
    if (user) {
      getUserAndCompanyData();
    }
  }, [isAuthenticated, history, isLoading, user]);

  const getUserAndCompanyData = async () => {
    const employee = await request((accessToken) =>
      GetEmployeeByEmail(user.email, accessToken)
    );

    if (employee.data.id) {
      setEmployee(employee.data);

      const company = await request((accessToken) =>
        GetCompanyById(employee.data.company_id, accessToken)
      );
      if (company.data.id) {
        setCompany(company.data);
      }
    }
  };

  return (
    <div className="user-dashboard">
      <div className="employee-info ">
        <div className="image">
          <img src={UserAvatar} alt="userAvatar" />
        </div>
        <div className="info">
          <p className="employee-surname-name">{user?.name}</p>
          <p className="email-work-hours">Work hours: {employee?.work_hours}</p>
          <p className="email-work-hours">Company: {company?.name}</p>
          <p className="email-work-hours">HR Manager</p>
        </div>
      </div>

      <div className="content">
        <div className="date centered-content margin-top-25">
          <div className="start-date">
            <label className="start-date-label" htmlFor="start">
              Start date:
            </label>
            <input
              className="margin-right-25"
              type="date"
              id="start"
              min="2021-01-01"
              max="2030-12-31"
            />
          </div>
          <div className="end-date">
            <label className="start-date-label" htmlFor="end">
              End date:
            </label>
            <input
              className="margin-right-25"
              type="date"
              id="end"
              min="2021-01-01"
              max="2030-12-31"
            />
          </div>
        </div>

        <div className="centered-content margin-top-25">
          <Dropdown />
        </div>
        <div className="costs">
          <div className="row centered-content">
            <div className="section section1  margin-right-75">
              <p className="title">Absenteeism Cost</p>
              <p className="cost">$ 1bil</p>
            </div>
            <div className="section section2">
              <p className="title">Separation Cost</p>
              <p className="cost">$ 1bil</p>
            </div>
          </div>
          <div className="row centered-content margin-bottom">
            <div className="section section3 margin-right-75">
              <p className="title">Replacement Cost</p>
              <p className="cost">$ 1bil</p>
            </div>
            <div className="section section4">
              <p className="title">Training Cost</p>
              <p className="cost">$ 1bil</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="inf">
          <img className="logo" src={Logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </p>
        </div>
        <div className="contacts">
          <a href="" className="about">
            About
          </a>
          <a href="" className="help_center">
            Help Center
          </a>
          <a href="" className="contact_us">
            Contact Us
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
