import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/zapisane">Zapisane</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/zapisane">
            <Favorite />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => <h2>Home</h2>;

const Favorite = () => <h2>Zapisane</h2>;
