import React from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { DartsListPage } from "./DartsListPage";
import './App.css';

export const App =()=> {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Dartsozók</span>
              </NavLink>
              </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" exact element={<DartsListPage />} />
      </Routes>
    </Router>
  );
};
