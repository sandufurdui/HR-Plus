import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { AuthPage } from "../pages/auth";
import { UserDashboardPage } from "../pages/user_dashboard";
import { AdminPage } from "../pages/admin";
import { SignInSSO } from "./sign-in-sso";
import { CreateCompany } from "../pages/create-company";


function router() {
  const isAdmin = localStorage.getItem('role') === 'ADMIN'
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/userDashboard">
          <UserDashboardPage />
        </Route>
        <Route path="/adminPanel">
        {/* <AdminPage /> */}
          {isAdmin ? (<AdminPage />) : (<Redirect to="/userDashboard" />)}
        </Route>
        <Route path="/sign-in-sso">
          <SignInSSO />
        </Route>
        <Route path="/create-company">
          <CreateCompany />
        </Route>
        <Route>
          <AuthPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default router;
