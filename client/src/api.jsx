import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:6424/api'
});

export default api;