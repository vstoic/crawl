// src/components/app.js

import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import MainPage from "./main/main.js";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";


import VenueIndexContainer from "../components/venues/venue_index_container"
import VenueShowContainer from "../components/venues/venue_show_container"


const App = () => (
  <div>
    <NavBarContainer />
    <Switch>

      <Route exact path="/venueDetail/:id" component={VenueShowContainer} />
      <Route exact path="/Venue" component={VenueIndexContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <AuthRoute exact path="/login" component={LoginFormContainer} />


      <Route path="/" component={MainPage} />
      {/* <Route exact path="/Venue" component={Venue} /> */}
    </Switch>
  </div>
);

export default App;
