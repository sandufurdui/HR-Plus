import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import { Text, Avatar, Flex, Box } from "@chakra-ui/react";

import { GetEmployeeByEmail } from "../services";

import Calendar from "../components/CalendarComp";

import UserAvatar from "../assets/user-avatar.png";
import Logo from "../assets/HR-app_logo-white.svg";

import "../style/user_dashboard.css";
import "../style/footer.css";

export const UserDashboardPage = () => {
  const history = useHistory();
  const { user, isAuthenticated } = useAuth0();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/");
      return;
    }
    GetEmployeeByEmail(user.email).then((employee) => {
      if (employee.data.id) {
        setEmployee(employee.data);
      }
    });
  }, [isAuthenticated, history]);

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
