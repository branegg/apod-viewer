import { IPhoto } from '../types/Photo';

const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.nasa.gov',
});

const baseParams = { api_key: process.env.REACT_APP_NASA_API_KEY };

export async function getPhotoOfTheDay(): Promise<IPhoto> {
  try {
    const response = await api.get(`/planetary/apod?api_key=${baseParams.api_key}`);
    const photo = response.data;
    console.log(photo);
    return photo;
  } catch (error) {
    let res = 'Sorry, something went wrong';

    console.error(error.message);

    switch (error.response.status) {
      case '400': {
        res = "Sorry, there's no photo for today";
      }
    }
    throw new Error(res);
  }
}

export async function getPhoto(): Promise<IPhoto> {
  try {
    const response = await api.get(`/planetary/apod?api_key=${baseParams.api_key}&count=1`);
    const photo = response.data[0];
    const { date } = photo;

    const seenPhotos: string[] = JSON.parse(localStorage.getItem('seenPhotos') || '[]');

    if (seenPhotos.includes(date)) {
      return getPhoto();
    }

    seenPhotos.push(date);

    localStorage.setItem('seenPhotos', JSON.stringify(seenPhotos));

    return photo;
  } catch (error) {
    let res = 'Sorry, something went wrong';

    console.error(error.message);

    switch (error.response.status) {
      case '400': {
        res = "Sorry, there's no photo for today";
      }
    }
    throw new Error(res);
  }
}

export async function getPhotos() {
  try {
    const response = await api.get(`/planetary/apod?api_key=${baseParams.api_key}&count=5`);
    return response.data;
  } catch (error) {
    let res = 'Sorry, something went wrong';

    console.error(error.message);

    switch (error.response.status) {
      case '400': {
        res = "Sorry, there's no photo for today";
      }
    }
    return res;
  }
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
