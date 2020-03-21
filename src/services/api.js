import axios from 'axios';

const api = axios.create({
  baseURL: 'https://samples.openweathermap.org/data/2.5/weather',
});

export default api;
