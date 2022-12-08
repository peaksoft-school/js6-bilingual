import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { questionForClient } from "api/question-for-client";

const initialState = {
    answer: [],
};

export const getQuestionForClient = createAsyncThunk("client/getQestionForClient", async () => {
    try {
        const response = await questionForClient();
        return response;
    } catch (error) {
        return error.message;
    }
});

export const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {},
    extraReducers: {
        [getQuestionForClient.fulfilled]: (state, action) => {
            state.answer = action.payload;
        },
    },
});

// export const {} = clientSlice.actions;