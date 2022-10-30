import React from "react";

import { Navigate } from "react-router-dom";

import { RoutesUrl, UsersRole } from "./constants";

const PrivateRoute = ({ expectedRoles, children }) => {
    const UserRoles = UsersRole.client;
    if (expectedRoles.find((role) => role === UserRoles)) {
        return children;
    }
    return <Navigate to={`/${RoutesUrl.SignIn}`} />;
};

export default PrivateRoute;
