import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseAxios } from "api/axios-config";
import axios from "axios";

export const deleteOption = createAsyncThunk("question/deleteOption", async (id, { dispatch }) => {
    const info = await baseAxios.delete(`/option/${id}`);
    return info;
});
