import React from 'react';
import './Navbar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from '../Profile/Profile'

function Navbar() {
  return (
    <Router>
      <ul className="navbar">
        <li className="navItem"><Link to="/">Home</Link></li>
        <li className="navItem"><Link to="/profile">About</Link></li>
        <li className="navItem"><Link to="/profile">Profile</Link></li>
      </ul>
      <Switch>
          <Route path="/about">
            <Profile />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
    </Router>
  )
}

export default Navbar
