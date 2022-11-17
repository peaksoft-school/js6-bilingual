import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data: null,
};
const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userRequest: (state, action) => {
            state.data = action.payload;
        },
    },
});
export default authSlice;
export const { userRequest } = authSlice.actions;
