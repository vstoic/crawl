// src/components/app.js

import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import MainPage from "./main/main.js";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import VenueContainer from "../components/venues/venue_show"
import VenueDetailsContainer from "../components/venues/venue_show_container"
const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route exact path="/venueDetail/:id" component={VenueDetailsContainer} />
      <Route exact path="/Venue" component={VenueContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <Route path="/" component={MainPage} />
      {/* <Route exact path="/Venue" component={Venue} /> */}
    </Switch>
  </div>
);

export default App;
