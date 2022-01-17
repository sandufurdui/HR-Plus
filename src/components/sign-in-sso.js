import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

import { GetEmployeeByEmail } from "../services";
import { useApi } from "../services/useApi";

export const SignInSSO = () => {
  const history = useHistory();
  const { user, isAuthenticated } = useAuth0();
  const request = useApi();

  useEffect(() => {
    if (isAuthenticated && user) {
      request((accessToken) =>
        GetEmployeeByEmail(user.email, accessToken)
      ).then((employee) => {
        if (employee && employee.data.id) {
          history.push(
            employee.data.role === "admin" ? "/adminPanel" : "/userDashboard"
          );
        }
      });
    }
  }, [isAuthenticated, user, history]);

  return <div>Logging in...</div>;
};
