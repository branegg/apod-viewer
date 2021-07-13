import React, { useState, useEffect } from 'react';
import './PhotoPreview.scss';
import { IPhoto } from './../../types/Photo';

export default function PhotoPreview(props: { photo: IPhoto }) {
  return <img src={props.photo.url} alt="" />;
}
