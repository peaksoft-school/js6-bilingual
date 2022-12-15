export const RoutesUrl = {
    "/": "/",
    Admin: "/admin/*",
    Home: "/home/*",
    SignUp: "/sign-up",
    SignIn: "/sign-in",
};

export const UsersRole = {
    admin: "ADMIN",
    client: "CLIENT",
};

// ////////////////////////////////////////////////////////////////////////////////////////////////
// ---------------------------  FOR ADMIN
// ----------------------------------------------------------------------------------------------

export const ADMIN_CONST_URL = {
    "/": "/",
    TEST: "/tests",
    CREATE_TEST: "/create-test",
    UPDATETEST: "update-test/:id",
    QUESTIONTOTEST: "/question-to-test/",
    CREATE_QUESTION: "create-question",
    UPDATE_QUESTION: "update-question/:id",
    SUBMITED_TEST: "submited-tests",
<<<<<<< HEAD
    CHECK: "check/:id",
=======
    CHECK_TESTS: "/check/:test",
>>>>>>> 773fc4abb7744d5b03e466de3da4e172031af823
};

// ///////////////////////////////////////////////////////////////////////////////////////////////
// ---------------------------  FOR CLIENT
// ----------------------------------------------------------------------------------------------

export const CLIENT_CONST_URL = {
    "/": "/tests",
    RESULTS: "results",
    TESTS: "/tests/:id",
    SELECT_TESTS: "/select-words-test",
};
