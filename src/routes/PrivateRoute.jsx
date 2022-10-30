import React from "react";

import { Navigate } from "react-router-dom";

import { RoutesUrl, UsersRole } from "./constants";

const PrivateRoute = ({ expectedRoles, children }) => {
    const UserRoles = UsersRole.admin;
    if (expectedRoles.find((role) => role === UserRoles)) {
        return children;
    }
    return <Navigate to={`/${RoutesUrl.SignIn}`} />;
};

export default PrivateRoute;
