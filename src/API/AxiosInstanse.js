import axios from "axios";

export const BASE_URL = "https://localhost:7073/";

const $api = axios.create ({
    withCredentials: true,
    baseURL: BASE_URL,
})

$api.interceptors.request.use ((config)=> {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    return config;
})

export default $api;