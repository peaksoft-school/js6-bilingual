import { baseAxios } from "./axios-config";

export const questionForClient = async () => {
    const response = await baseAxios.get("/test/getAll");
    return response.data;
};

export const questionForClientById = async (id) => {
    const response = await baseAxios.get(`/test/client/${id}`);
    return response.data;
};
