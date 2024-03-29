import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import { Text, Avatar, Flex, Box } from "@chakra-ui/react";

import { GetEmployeeByEmail } from "../services";
import { useApi } from "../services/useApi";

import Calendar from "../components/CalendarComp";

import UserAvatar from "../assets/user-avatar.png";
import Logo from "../assets/HR-app_logo-white.svg";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";


import "../style/footer.css";

export const UserDashboardPage = () => {
  const history = useHistory();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [employee, setEmployee] = useState(null);
  const request = useApi();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      history.push("/");
      return;
    }
    if (user) {
      request((accessToken) =>
        GetEmployeeByEmail(user.email, accessToken)
      ).then((employee) => {
        if (employee.data.id) {
          setEmployee(employee.data);
        }
      });
    }
  }, [isAuthenticated, history, isLoading, user]);

  if (!user || !employee) {
    return null;
  }

  return (
    <div className="user-dashboard">
      <Flex background="blue.900" p={5}>
        <Avatar size="2xl" name={user.name} src={user.picture || UserAvatar} />

        <Flex ml={5} flexDirection="column" justifyContent="space-between">
          <Text color="blue.50" fontSize="3xl">
            {user.name}
          </Text>
          <Box>
            <Text color="blue.50">Email: {user.email}</Text>
            <Text color="blue.50">Work Hours: {employee.work_hours}</Text>
          </Box>
        </Flex>
      </Flex>
      <div className="calendar">
        <Calendar />
      </div>
      <div className="footer">
        <div className="inf">
          <img className="logo" src={Logo} alt="company" />
          <p>
            Business driven. People focused{" "}
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
          <p>Follow us</p>
          <div className="icons">
            <img className="insta" src={Instagram} />
            <img className="facebook" src={Facebook} />
            <img className="twitter" src={Twitter} />
          </div>
        </div>
      </div>
    </div>
  );
};
