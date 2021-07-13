import React, { useState, useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// components
import PhotoOfTheDay from './../PhotoOfTheDay/PhotoOfTheDay';
import PhotoFinder from './../PhotoFinder/PhotoFinder';

export default function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" to="/">
                Strona główna
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/zdjecie-dnia">
                Zdjęcie dnia
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/zapisane">
                Zapisane
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/zapisane">
            <Favorite />
          </Route>
          <Route path="/zdjecie-dnia">
            <PhotoOfTheDay />
          </Route>
          <Route path="/">
            <PhotoFinder />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const Favorite = () => <h2>Zapisane</h2>;
