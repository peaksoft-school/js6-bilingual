import axios from "axios";

const baseURL = "https://finishreact-default-rtdb.firebaseio.com";

const api = axios.create({
    baseURL,
});

export default api;
