import React from "react";

import { userRequest } from "features/authSlice";
import { useDispatch } from "react-redux";
import { AudioPlayerProvider } from "react-use-audio-player";
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
            {/* <Loader /> */}
            <AudioPlayerProvider>
                <RoutesRender />
            </AudioPlayerProvider>
        </div>
    );
};

export default App;
