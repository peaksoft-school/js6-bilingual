import { configureStore } from "@reduxjs/toolkit";

import { testsPostSlice } from "./slices/adminTestActions";

import { authSlice } from "./slices/auth-slice";
import { questionsSlice } from "./slices/questionSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        test: testsPostSlice.reducer,
        question: questionsSlice.reducer,
    },
});
