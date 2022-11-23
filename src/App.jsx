import React from "react";

import ListenSelectTest from "components/ListenSelectTest";

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
            <ListenSelectTest />
            <RoutesRender />
        </div>
    );
};

export default App;
