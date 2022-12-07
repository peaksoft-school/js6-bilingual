import React from "react";

import { HomeOne, HomeTwo, MyResult, NotFound } from "containers";
import { CLIENT_CONST_URL } from "routes/constants";

export const CLIENT_ROUTES_CONFIG = [
    {
        path: CLIENT_CONST_URL["/"],
        element: <HomeOne />,
    },
    {
        path: CLIENT_CONST_URL.HOMETWO,
        element: <HomeTwo />,
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
