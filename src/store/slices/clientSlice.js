import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { questionForClient, questionForClientById } from "api/question-for-client";
import produce from "immer";

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
        console.log("hi");
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
            const base = current(state.answer.questionsAnswers);

            const findItem = base.findIndex((item) => {
                return item.questionId === action.payload.options.questionId;
            });
            let newState;
            if (findItem >= 0) {
                newState = produce(base, (draft) => {
                    draft[findItem].optionAnswerId = [...action.payload.options.optionAnswerId];
                });
            } else {
                newState = produce(base, (draft) => {
                    draft.push(action.payload.options);
                });
            }
            state.answer = {
                testId: action.payload.testId,
                answer: action.payload.answer,
                questionsAnswers: newState,
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
