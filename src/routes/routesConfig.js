import React from "react";

import { LandingPage, SignIn, SignUp, NotFound } from "containers";

import Layout from "layout/Layout";
import { Navigate } from "react-router-dom";
import { getUserInfo } from "services/saveUser";

import AdminRoutes from "./AdminRoutes/index";
import ClientRoutes from "./ClientRoutes";
import { RoutesUrl, UsersRole } from "./constants";
import PrivateRoute from "./PrivateRoute";

// TODO need to clean cookies or use localestorage
const user = getUserInfo();
const isAuth = (PrivateComponent) => {
    if (user?.role === UsersRole.client) {
        return <Navigate to="/home" replace />;
    }
    if (user?.role === UsersRole.admin) {
        return <Navigate to="/admin" replace />;
    }
    return PrivateComponent;
};

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
                <Layout>
                    <AdminRoutes />
                </Layout>
            </PrivateRoute>
        ),
    },

    {
        path: RoutesUrl.SignUp,
        element: isAuth(<SignUp />),
    },

    {
        path: RoutesUrl.SignIn,
        element: isAuth(<SignIn />),
    },

    {
        path: "*",
        element: <NotFound />,
    },
];
