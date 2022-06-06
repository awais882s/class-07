import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages for navigations
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import About from "../Components/About";
import Company from "../Components/Company";
export default function Routing() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/Company">
            <Company />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
