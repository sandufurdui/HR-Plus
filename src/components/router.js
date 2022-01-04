import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AuthPage } from "../pages/auth";
import { UserDashboardPage } from "../pages/user_dashboard";
import { AdminPage } from "../pages/admin";

function router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/userDashboard">
          <UserDashboardPage />
        </Route>
        <Route path="/adminPanel">
          <AdminPage />
        </Route>
        <Route>
          <AuthPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default router;
