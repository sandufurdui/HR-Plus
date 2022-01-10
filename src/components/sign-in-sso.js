import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

import { GetEmployeeByEmail } from "../services";

export const SignInSSO = () => {
  const history = useHistory();
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      GetEmployeeByEmail(user.email).then((employee) => {
        if (employee.data.id) {
          history.push(
            employee.data.role === "admin" ? "/adminPanel" : "/userDashboard"
          );
        }
      });
    }
  }, [isAuthenticated, user, history]);

  return <div>Logging in...</div>;
};
