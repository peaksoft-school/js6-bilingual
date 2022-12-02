import { configureStore } from "@reduxjs/toolkit";

import { injectStore } from "../api/axios-config";
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

injectStore(store);
