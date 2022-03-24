import React from "react";
import { Router, Route } from "react-router-dom";
import App from "../App";
import DebounceDemo from "../pages/debounce";
import ThrottlingDemo from "../pages/throttling";

const DefaultRoutes = () => (
  <Router>
    <Route path="/" element={<App />} />
    <Route exact path="/throttling" component={ThrottlingDemo} />
    <Route exact path="/debounce" component={DebounceDemo} />
    {/*  <Route exact path="/home" component={}/> */}
  </Router>
);

export default DefaultRoutes;
