import React, { useState, useEffect } from 'react';
import './PhotoPreview.scss';
import { IPhoto } from './../../types/Photo';

export default function PhotoPreview(props: { photo: IPhoto }) {
  const { photo } = props;
  console.log(photo);

  return <img className="photo-preview" src={photo.url} alt="" />;
}
