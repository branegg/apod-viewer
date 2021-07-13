const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.nasa.gov',
});

const baseParams = { api_key: process.env.REACT_APP_NASA_API_KEY };

export async function getPhoto() {
  try {
    const response = await api.get(`/planetary/apod?api_key=${baseParams.api_key}&date=2021-06-06`);
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
