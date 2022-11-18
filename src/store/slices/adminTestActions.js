import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    getTestQuery,
    postQuestionsQuery,
    updateTestById,
    getTestQueryId,
    deleteById,
} from "api/tes-query";

const initialState = {
    tests: [],
    singleTest: null,
};

export const getTests = createAsyncThunk("test/getTests", async () => {
    try {
        const allTests = await getTestQuery();
        return allTests;
    } catch (error) {
        return error.message;
    }
});

export const getTestById = createAsyncThunk("test/getTestById", async (id, { rejectWithValue }) => {
    try {
        const testById = await getTestQueryId(id);
        return testById;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const postQuestions = createAsyncThunk(
    "test/postQuestions",
    async (value, { rejectWithValue, dispatch }) => {
        try {
            const response = await postQuestionsQuery(value);
            if (response.data) {
                dispatch(getTests());
            }
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateTest = createAsyncThunk(
    "test/updateTest",
    async (data, { rejectWithValue, dispatch }) => {
        console.log(data, "valeuuue");
        try {
            const updateTestData = await updateTestById(data.id, data.newInputValue);
            dispatch(getTests());
            return updateTestData;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);

export const deleteTest = createAsyncThunk("test/deleteTest", async (id, { dispatch }) => {
    await deleteById(id);
    dispatch(getTests());
});

export const testsPostSlice = createSlice({
    name: "test",
    initialState,
    reducers: {},
    extraReducers: {
        [getTests.fulfilled]: (state, action) => {
            state.tests = action.payload;
        },
        [getTestById.fulfilled]: (state, action) => {
            state.singleTest = action.payload;
        },
        [updateTest.fulfilled]: (state, action) => {
            console.log(action.payload);
        },
    },
});