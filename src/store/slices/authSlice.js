import { createSlice } from "@reduxjs/toolkit";
import { baseAxios } from "api/axios-config";
import { setUserToCookies } from "services/saveUser";

const initialState = {
    data: {},
};
const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload;
        },
    },
});
export default authSlice;
export const { setUser } = authSlice.actions;

export const asyncAuth = (useData, signInType) => {
    return async (dispatch) => {
        try {
            const { data } = await baseAxios.post(signInType, useData);
            dispatch(setUser(data));
            setUserToCookies(data);
            return data;
        } catch (e) {
            console.log(e);
        }
    };
};
