import React from "react";

import { NotFound, Results, Start } from "containers";
import { CLIENT_CONST_URL } from "routes/constants";

export const CLIENT_ROUTES_CONFIG = [
    {
        path: CLIENT_CONST_URL["/"],
        element: <Start />,
    },

    {
        path: CLIENT_CONST_URL.RESULTS,
        element: <Results />,
    },

    {
        path: "*",
        element: <NotFound />,
    },
];
