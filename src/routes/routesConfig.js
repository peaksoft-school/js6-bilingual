import React from "react";

import { Home, Admin, LandingPage, SignIn, SignUp, NotFound } from "containers";

import AdminRoutes from "./AdminRoutes";
import ClientRoutes from "./ClientRoutes";
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
                <ClientRoutes />
            </PrivateRoute>
        ),
    },

    {
        path: RoutesUrl.Admin,
        element: (
            <PrivateRoute expectedRoles={[UsersRole.admin]}>
                <AdminRoutes />
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

    {
        path: "*",
        element: <NotFound />,
    },
];
