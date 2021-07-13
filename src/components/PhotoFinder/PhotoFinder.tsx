import React, { useState, useEffect } from 'react';
import './PhotoFinder.scss';
import { IPhoto } from '../../types/Photo';
import { getPhoto } from '../../api';
import PhotoPreview from './../PhotoPreview/PhotoPreview';
import angleRight from './../../assets/images/angle-right.png';

export default function PhotoFinder() {
  const [photo, setPhoto] = useState<IPhoto>();

  useEffect(() => {
    (async () => {
      setPhoto(await getPhoto());
    })();
  }, []);

  const renderPhoto = () => {
    if (photo?.media_type === 'image') {
      return <PhotoPreview photo={photo} />;
    } else {
      return (
        <p className="photo-finder__text">
          Sorry... we couldn't display that photo, please try again.
        </p>
      );
    }
  };

  const nextPhoto = async () => {
    setPhoto(await getPhoto());
  };

  return (
    <div className="photo-finder">
      <div className="photo-finder__wrapper">
        <div className="photo-finder__content">{renderPhoto()}</div>
        <button className="photo-finder__button" onClick={() => nextPhoto()}>
          Następne
          <img className="photo-finder__right" src={angleRight} alt="" />
        </button>
      </div>
    </div>
  );
}
