import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import Users from "./pages/Users"
import About from "./pages/About";


export default function App() {
  return (
    <React.Fragment>
    <Router> 
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/users" element={<Users/>} />
      </Routes>
    </Router>
    </React.Fragment>
  );
}