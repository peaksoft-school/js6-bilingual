import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { injectStore } from "../api/axios-config";
import { testsPostSlice } from "./slices/adminTestActions";
import authSlice from "./slices/authSlice";
import { questionsSlice } from "./slices/questionSlice";
import { testsSlice } from "./slices/resultTestsSlice";

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false,
});

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        test: testsPostSlice.reducer,
        question: questionsSlice.reducer,
        tests: testsSlice.reducer,
    },
    middleware: customizedMiddleware,
});

injectStore(store);
