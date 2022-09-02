import axios from 'axios';
// import {store} from '../store';
export const Base = 'http://127.0.0.1:8000';

const http = axios.create({
    baseURL: `${Base}/`,
    headers: { 'Content-Type': 'application/json' }
});

// http.interceptors.request.use(
//     function (config) {
//         const token = store.getState().auth.token;
//         if (token) config.headers.Authorization = `Bearer ${token}`;
//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// );

export default http;