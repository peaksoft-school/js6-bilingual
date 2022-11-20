import axios from "axios";
import { logout } from "utils/helpers/helpers";

import { BASE_URL } from "./baseUrl";

const headers = {
    "Content-Type": "application/json",
};

const baseAxios = axios.create({ baseURL: BASE_URL, headers });

// const token = getToken();

baseAxios.interceptors.request.use((config) => {
    const updatedConfig = { ...config };
    const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJwZWFrc29mdCBob3VzZSIsImV4cCI6MTY3Mzc4NTI3MiwiaWF0IjoxNjY4NjAxMjcyLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.8thao8sPL8KybbugDazSZxDhL5ZTozrXC51XpldKXHI";
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
