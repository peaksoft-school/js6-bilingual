import { useParams } from "react-router-dom";

import { getTestById } from "./adminTestActions";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const {
    getQuestionById,
    deleteQuestionById,
    switcherQuestion,
    postQuestion,
    updateQuestion,
} = require("api/question-query");

const initialState = {
    questions: [],
};

export const getQuestionWithId = createAsyncThunk(
    "question/getQuestionWithId",
    async (id, { rejectWithValue }) => {
        try {
            const questionById = await getQuestionById(id);
            return questionById;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteQuestion = createAsyncThunk(
    "question/deleteQuestion",
    async ({ data }, { dispatch }) => {
        const info = await deleteQuestionById(data.questionId);
        dispatch(getTestById(data.testId));
        return info;
    }
);

export const sendingQuestion = createAsyncThunk(
    "question/sandingQuestion",
    async (question, props) => {
        try {
            const response = await postQuestion(question);
            return response;
        } catch (error) {
            props.rejectWithValue(error.message);
        }
    }
);

export const updateQuestionWithId = createAsyncThunk(
    "question/update",
    async ({ data }, { rejectWithValue }) => {
        try {
            const info = await updateQuestion(data.id, data.info);
            return info;
        } catch (error) {
            return rejectWithValue("error");
        }
    }
);
export const isActiveQuestion = createAsyncThunk(
    "question/isActiveQuestion",
    async (id, { rejectWithValue }) => {
        try {
            const response = await switcherQuestion(id);
            return response;
        } catch (error) {
            rejectWithValue(error.message);
        }
    }
);

export const questionsSlice = createSlice({
    name: "question",
    initialState,
    reducers: {},
    extraReducers: {
        [getQuestionWithId.fulfilled]: (state, action) => {
            state.questions = action.payload;
        },
    },
});
