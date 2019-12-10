import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my.api.mockaroo.com',
});

export default api;
