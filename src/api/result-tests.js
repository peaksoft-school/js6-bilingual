import { baseAxios } from "./axios-config";

export const getResultTests = async () => {
    const response = await baseAxios.get("/result");
    return response.data;
};
