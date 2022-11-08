import axios from "axios";
import { getToken, logout } from "utils/helpers/helpers";

const BASE_URL = "http://ec2-54-93-233-9.eu-central-1.compute.amazonaws.com/api/";

const headers = {
    "Content-Type": "application/json",
};

const baseAxios = axios.create({ baseURL: BASE_URL, headers });

baseAxios.interceptors.request.use((config) => {
    const updatedConfig = { ...config };
    const token = getToken();
    if (token) {
        updatedConfig.headers.Authorization = `Bearer ${token}`;
    }
    return updatedConfig;
});

baseAxios.interceptors.response.use(
    (response) => {
        return Promise.resolve(response);
    },
    (error) => {
        if (error.response.status === 401) {
            logout();
        }
        return Promise.reject(error);
    }
);

export { baseAxios };
