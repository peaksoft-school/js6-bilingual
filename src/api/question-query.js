import { baseAxios } from "./axios-config";

export const getQuestionById = async (id) => {
    const response = await baseAxios.get(`/question/${id}`);
    return response.data;
};

export const deleteQuestionById = async (id) => {
    const response = await baseAxios.delete(`/question/${id}`);
    return response.data;
};

export const switcherQuestion = async (id) => {
    const response = await baseAxios.put(`/question/enable-disable/${id}`);
    return response.data;
};
