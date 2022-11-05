import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import Cookie from "js-cookie";

export const postData = createAsyncThunk("post/data", async (userInfo) => {
    try {
        const { data } = await axios.post(
            "http://ec2-54-93-233-9.eu-central-1.compute.amazonaws.com/api/auth/register",
            userInfo
        );
        Cookie.set("userInfo", JSON.stringify(data));
        return data;
    } catch (error) {
        return error;
    }
});

const initialState = {
    isLoading: false,
    data: null,
    error: "",
};
const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userRequest: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(postData.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(postData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(postData.rejected, (state) => {
            state.isLoading = false;
            state.data = [];
            state.error = state.error.message;
        });
    },
});
export default authSlice;
export const { userRequest } = authSlice.actions;
