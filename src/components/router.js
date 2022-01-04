import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from "../pages/auth"
import UserDashboard from "../pages/user_dashboard"
import Admin from "../pages/admin"

function router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/userDashboard" >
                        <UserDashboard />
                    </Route>
                    <Route path="/adminPanel" >
                        <Admin />
                    </Route>
                    <Route >
                        <Auth />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default router
