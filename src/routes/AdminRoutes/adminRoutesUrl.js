import { ADMIN_CONST_URL } from "routes/constants";

const { ADD, TEST, UPDATETEST, QUESTIONTOTEST, CREATE_TEST, CREATE_QUESTION, UPDATE_QUESTION } =
    ADMIN_CONST_URL;

export const ADMIN_ROUTES_URL = {
    "/": "/",
    TEST,
    ADD_TEST: TEST + ADD,
    UPDATE: UPDATETEST,
    QUESTION_TO_TEST: UPDATETEST + QUESTIONTOTEST,
    CREATE_TEST,
    CREATE_QUESTION: `test-:id/${CREATE_QUESTION}`,
    UPDATE_QUESTION,
    RESULTS_CHECK,
};
