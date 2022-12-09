import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { questionForClient, questionForClientById } from "api/question-for-client";

const initialState = {
    answer: [],
    questions: [],
};

export const getQuestionForClient = createAsyncThunk("client/getQestionForClient", async () => {
    try {
        const response = await questionForClient();
        return response;
    } catch (error) {
        return error.message;
    }
});

export const getQuestionForClientById = createAsyncThunk(
    "client/getQuestionForClientById",
    async (id) => {
        try {
            const response = await questionForClientById(id);
            return response;
        } catch (error) {
            return error.message;
        }
    }
);

export const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {},
    extraReducers: {
        [getQuestionForClient.fulfilled]: (state, action) => {
            state.answer = action.payload;
        },
        [getQuestionForClientById.fulfilled]: (state, action) => {
            state.questions = action.payload;
        },
    },
});

// export const {} = clientSlice.actions;
