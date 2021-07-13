import React, { useState, useEffect } from 'react';
import './App.scss';
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

  const renderPhotoPreview = () => {
    if (photo?.media_type === 'image') {
      return <PhotoPreview photo={photo} />;
    } else {
      return <p>Sorry... there's no photo for today.</p>;
    }
  };

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
          <Route path="/">{renderPhotoPreview()}</Route>
        </Switch>
      </div>
    </Router>
  );
}

const Favorite = () => <h2>Zapisane</h2>;
