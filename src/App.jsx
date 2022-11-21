import React from "react";

<<<<<<< HEAD
import DropDown from "components/UI/DropDown";

=======
import { userRequest } from "features/authSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import RoutesRender from "routes/routes-render";
import { getUserInfo } from "services/saveUser";
>>>>>>> 150fef2e1f85d44cef518d284e15d531ea828694
import "./App.css";

const items = [
    { text: "text1", value: "ema1" },
    { text: "text2", value: "ema2" },
    { text: "text3", value: "em3" },
    { text: "text4", value: "em4" },
    { text: "text5", value: "em5" },
    { text: "text6", value: "em6" },
    { text: "text7", value: "em7" },
    { text: "text8", value: "em8" },
    { text: "text9", value: "em9" },
    { text: "text10", value: "em10" },
];
const App = () => {
<<<<<<< HEAD
    const [dropState, setdropState] = React.useState(items[0]);
    console.log(dropState);
    return (
        <div className="app">
            <DropDown
                stylecss={{ width: "400px" }}
                items={items}
                dropState={dropState}
                setDropState={setdropState}
            />
=======
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(userRequest(getUserInfo()));
    }, []);

    return (
        <div className="app">
            <RoutesRender />
>>>>>>> 150fef2e1f85d44cef518d284e15d531ea828694
        </div>
    );
};

export default App;
