import { configureStore } from "@reduxjs/toolkit";

import { testsPostSlice } from "./slices/adminTestActions";

import { authSlice } from "./slices/auth-slice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        test: testsPostSlice.reducer,
    },
});
