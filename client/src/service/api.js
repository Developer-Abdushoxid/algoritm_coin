import axios from "axios";
import { getTokenStorage } from "../helpers/localStorage";

const instance = axios.create({
    baseURL: 'http://localhost:8000/api',
});

instance.interceptors.request.use(config => { 
    const token = getTokenStorage('token');
    const authorization = token ? `Token ${token}` : '' 
    config.headers.Authorization = authorization
    return config
})

export default instance;