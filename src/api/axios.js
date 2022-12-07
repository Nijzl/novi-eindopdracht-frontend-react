import axios from '../api/axios';

export default axios.create({
    baseURL: 'http://localhost:3500'
});