import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { getPhoto } from './../../api';

// components
import PhotoPreview from './../PhotoPreview/PhotoPreview';

// types
import { IPhoto } from './../../types/Photo';

export default function App() {
  const [photo, setPhoto] = useState<IPhoto>();

  useEffect(() => {
    (async () => {
      setPhoto(await getPhoto());
    })();
  }, []);

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
          <Route path="/">{photo && <PhotoPreview photo={photo} />}</Route>
        </Switch>
      </div>
    </Router>
  );
}

const Favorite = () => <h2>Zapisane</h2>;
