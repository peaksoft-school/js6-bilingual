import React from "react";

import { useDispatch } from "react-redux";

import RoutesRender from "routes/routes-render";
import { getUserInfo } from "services/saveUser";
import { userRequest } from "store/slices/authSlice";
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
