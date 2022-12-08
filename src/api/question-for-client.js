import { baseAxios } from "./axios-config";

export const questionForClient = async () => {
    const response = await baseAxios.get("/test/getAll");
    return response.data;
};
