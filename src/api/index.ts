const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.nasa.gov',
});

const baseParams = { api_key: process.env.REACT_APP_NASA_API_KEY };

export async function getPhoto() {
  try {
    const response = await api.get(`/planetary/apod?api_key=${baseParams.api_key}&date=2020-06-06`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
