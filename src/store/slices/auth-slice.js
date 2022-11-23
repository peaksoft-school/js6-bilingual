import Cookies from "js-cookie";

const { createSlice } = require("@reduxjs/toolkit");

// const tokenFromLS = localStorage.getItem("/test");

const cookies = Cookies.get("user") || "";

const authData = cookies ? JSON.parse(cookies) : cookies;

const initialState = authData
    ? {
          user: authData,
      }
    : {
          user: {
              token: null,
              role: null,
          },
      };

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
});

export const authActions = authSlice.actions;
