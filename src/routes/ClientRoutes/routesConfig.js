import React from "react";

import { HomeOne, HomeTwo, MyResult, NotFound, SelectTests } from "containers";
import { CLIENT_CONST_URL } from "routes/constants";

export const CLIENT_ROUTES_CONFIG = [
    {
        path: CLIENT_CONST_URL["/"],
        element: <HomeOne />,
    },
    {
        path: CLIENT_CONST_URL.TESTS,
        element: <HomeTwo />,
    },
    {
        path: CLIENT_CONST_URL.TESTS + CLIENT_CONST_URL.SELECT_TESTS,
        element: <SelectTests />,
    },
    {
        path: CLIENT_CONST_URL.RESULTS,
        element: <MyResult />,
    },

    {
        path: "*",
        element: <NotFound />,
    },
];
