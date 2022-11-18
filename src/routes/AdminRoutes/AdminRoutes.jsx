import React from "react";

import AdminTest from "components/admin-test/AdminTest";

import CreateTest from "components/admin-test/CreateTest";

import NewTest from "components/admin-test/NewTest";

import Layout from "layout/Layout";

import { Navigate, Route, Routes } from "react-router-dom";

function AdminRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate replace to="/admin" />} />
                <Route path="/admin" element={<Layout />}>
                    <Route index element={<Navigate replace to="/admin/tests" />} />
                    <Route path="tests" element={<AdminTest />} />
                    <Route path="create-test" element={<CreateTest />} />
                    <Route path="update-test/:id" element={<NewTest />} />
                </Route>
                <Route
                    path="/*"
                    element={
                        <div>
                            <h1>Not found</h1>
                        </div>
                    }
                />
            </Routes>
        </div>
    );
}

export default AdminRoutes;