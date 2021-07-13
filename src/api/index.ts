const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.nasa.gov',
});

const baseParams = { api_key: process.env.REACT_APP_NASA_API_KEY };

export async function getPhoto() {
  try {
    const response = await api.get(`/planetary/apod?api_key=${baseParams.api_key}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
