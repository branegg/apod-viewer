import React, { useState, useEffect, } from 'react';
import './PhotoOfTheDay.scss';
import { IPhoto } from '../../types/Photo';
import { getPhotoOfTheDay } from './../../api';
import PhotoPreview from './../PhotoPreview/PhotoPreview';

export default function PhotoOfTheDay() {
  const [photo, setPhoto] = useState<IPhoto>();

  useEffect(() => {
    (async () => {
      setPhoto(await getPhotoOfTheDay());
    })();

    console.log(photo);
  }, []);

  const renderPhotoOfTheDay = () => {
    if (photo?.media_type === 'image') {
      return <PhotoPreview photo={photo} />;
    } else {
      return <p className="photo-of-the-day__text">Sorry... there's no photo for today.</p>;
    }
  };

  return <div className="photo-of-the-day">{renderPhotoOfTheDay()}</div>;
}
