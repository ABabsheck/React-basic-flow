import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from "./home";
import Services from "./services";
import About from "./about";

class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <NavLink activeClassName="active" to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/services">
                Services
              </NavLink>
            </li>
          </ul>

          <switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
          </switch>
        </div>
      </Router>
    );
  }
}

export default Navigation;
