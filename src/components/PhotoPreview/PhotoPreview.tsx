import React, { useState, useEffect } from 'react';
import './PhotoPreview.scss';
import { IPhoto } from './../../types/Photo';
import saveIcon from './../../assets/images/save.png';

export default function PhotoPreview(props: { photo: IPhoto }) {
  const { photo } = props;

  return (
    <div className="photo-preview">
      <h3 className="photo-preview__title">{photo.title}</h3>
      <div className="photo-preview__wrapper">
        <img className="photo-preview__image" src={photo.url} alt="" />
        <button className="photo-preview__button">
          <img className="photo-preview__save" src={saveIcon} alt="" />
          Zapisz
        </button>
      </div>
      <p className="photo-preview__description">{photo.explanation}</p>
    </div>
  );
}
