import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { questionForClient, questionForClientById } from "api/question-for-client";
import { store } from "store";

const initialState = {
    answer: {
        testId: 0,
        questionsAnswers: [],
        answer: "",
    },
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
    reducers: {
        addAnswer: (state, action) => {
            const prevState = current(state.answer.questionsAnswers);
            const copyState = [...prevState];
            copyState.push(action.payload.options);
            const findItem = copyState.findIndex(
                (item) => item.questionId === action.payload.questionId
            );
            console.log(findItem);
            console.log(copyState);
            state.answer = {
                testId: action.payload.testId,
                answer: action.payload.answer,
                questionsAnswers: copyState,
            };
        },
    },
    extraReducers: {
        [getQuestionForClient.fulfilled]: (state, action) => {
            state.answer = action.payload;
        },
        [getQuestionForClientById.fulfilled]: (state, action) => {
            state.questions = action.payload;
        },
    },
});

export const { addAnswer } = clientSlice.actions;
