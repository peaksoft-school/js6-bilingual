const { createSlice } = require("@reduxjs/toolkit");

const tokenFromLS = localStorage.getItem("Token");

const initialState = {
    user: {
        token: tokenFromLS || null,
        role: null,
    },
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
});

export const authActions = authSlice.actions;