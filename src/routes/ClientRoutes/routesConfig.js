import React from "react";

import { MyResult, NotFound, Start } from "containers";
import { CLIENT_CONST_URL } from "routes/constants";

export const CLIENT_ROUTES_CONFIG = [
    {
        path: CLIENT_CONST_URL["/"],
        element: <Start />,
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
