import { ADMIN_CONST_URL } from "routes/constants";

const { ADD, TEST, QUESTION } = ADMIN_CONST_URL;

export const ADMIN_ROUTES_URL = {
    "/": "/",
    TEST,
    ADD_TEST: TEST + ADD,
    QUESTIONS: TEST + QUESTION,
};
