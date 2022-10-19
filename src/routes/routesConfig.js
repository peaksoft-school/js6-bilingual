import React from "react";

import { Home, Admin, LandingPage, SignIn, SignUp } from "containers";

import { RoutesUrl, UsersRole } from "./constants";
import PrivateRoute from "./PrivateRoute";

export const routesConfig = [
    {
        path: RoutesUrl["/"],
        element: <LandingPage />,
    },

    {
        path: RoutesUrl.Home,
        element: (
            <PrivateRoute expectedRoles={[UsersRole.admin, UsersRole.client]}>
                <Home />
            </PrivateRoute>
        ),
    },

    {
        path: RoutesUrl.Admin,
        element: (
            <PrivateRoute expectedRoles={[UsersRole.admin]}>
                <Admin />
            </PrivateRoute>
        ),
    },

    {
        path: RoutesUrl.SignUp,
        element: <SignUp />,
    },

    {
        path: RoutesUrl.SignIn,
        element: <SignIn />,
    },
];
