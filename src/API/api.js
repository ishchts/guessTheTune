import axios from 'axios';

const api = axios.create({
    baseURL: 'https://htmlacademy-react-2.appspot.com/guess-melody',
    timeout: 5000,
    withCredentials: true,
});

export default api;