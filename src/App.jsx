import React from "react";

import { userRequest } from "features/authSlice";
import { useDispatch } from "react-redux";

import RoutesRender from "routes/routes-render";
import { getUserInfo } from "services/saveUser";
import "./App.css";

const App = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(userRequest(getUserInfo()));
    }, []);

    return (
        <div className="app">
            <RoutesRender />
        </div>
    );
};

export default App;
