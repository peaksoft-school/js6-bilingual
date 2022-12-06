import { configureStore } from "@reduxjs/toolkit";

import { injectStore } from "../api/axios-config";
import { testsPostSlice } from "./slices/adminTestActions";
import authSlice from "./slices/authSlice";
import { questionsSlice } from "./slices/questionSlice";
import { testsSlice } from "./slices/resultTestsSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        test: testsPostSlice.reducer,
        question: questionsSlice.reducer,
        tests: testsSlice.reducer,
    },
});

injectStore(store);
