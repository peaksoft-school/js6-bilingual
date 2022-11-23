const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { getQuestionById, deleteQuestionById, switcherQuestion } = require("api/question-query");

const initialState = {
    questions: [],
};

export const getQuestionList = createAsyncThunk(
    "question/getQuestionList",
    async (id, { rejectWithValue }) => {
        try {
            const questionById = await getQuestionById(id);
            return questionById;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteQuestion = createAsyncThunk("question/deleteQuestion", async (id) => {
    await deleteQuestionById(id);
});

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
        [getQuestionList.fulfilled]: (state, action) => {
            state.questions = action.payload;
        },
    },
});
