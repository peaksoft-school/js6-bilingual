import { configureStore } from "@reduxjs/toolkit";

import { injectStore } from "../api/axios-config";
import { testsPostSlice } from "./slices/adminTestActions";
import { questionsSlice } from "./slices/questionSlice";

export const store = configureStore({
    reducer: {
        test: testsPostSlice.reducer,
        question: questionsSlice.reducer,
    },
});

injectStore(store);
