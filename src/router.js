import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound";
import CameraContainer from "./Container/CameraContainer"
import CalendarContainer from "./Container/CalendarContainer"
import Success from "./components/Success/Success"
import Fail from "./components/Fail/Fail"



// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>
      <Route path="/camera" component={CameraContainer}/>
      <Route path="/calendar" component={CalendarContainer}/>
      <Route path="/success" component={Success}/>
      <Route path="/fail" component={Fail}/>

      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
