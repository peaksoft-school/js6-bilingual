import React from "react";

import Header from "components/UI/HeaderClient";

import { useDispatch } from "react-redux";

import RoutesRender from "routes/routes-render";
import { getUserFromCookies } from "services/saveUser";
import { setUser } from "store/slices/authSlice";
import "./App.css";

const App = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(setUser(getUserFromCookies()));
    }, []);

    return (
        <div className="app">
            <Header />
        </div>
    );
};

export default App;
