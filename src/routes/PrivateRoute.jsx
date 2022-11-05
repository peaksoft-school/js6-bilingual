import React from "react";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { RoutesUrl, UsersRole } from "./constants";

const PrivateRoute = ({ expectedRoles, children }) => {
    const user = useSelector((state) => state.auth.data);
    const UserRoles = user?.role;
    if (expectedRoles.find((role) => role === UserRoles)) {
        return children;
    }
    return <Navigate to={`${RoutesUrl.SignIn}`} />;
};

export default PrivateRoute;
