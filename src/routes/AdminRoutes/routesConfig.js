import React from "react";

import { AddNewTest, Admin, NotFound, Question, Test } from "containers";

import { ADMIN_ROUTES_URL } from "./adminRoutesUrl";

export const ADMIN_ROUTES_CONFIG = [
    {
        path: ADMIN_ROUTES_URL["/"],
        element: <Admin />,
    },
    {
        path: ADMIN_ROUTES_URL.TEST,
        element: <Test />,
    },
    {
        path: ADMIN_ROUTES_URL.ADD_TEST,
        element: <AddNewTest />,
    },
    {
        path: ADMIN_ROUTES_URL.QUESTIONS,
        element: <Question />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];
