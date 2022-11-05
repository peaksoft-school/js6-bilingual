import React from "react";

import { ButtonUi } from "components/UI";
import "./App.css";

const App = () => {
    return (
        <div className="app">
            <ButtonUi
                text="register"
                mui={{ color: "primary", variant: "contained" }}
                style={{ maxWidth: "320px" }}
            />
        </div>
    );
};

export default App;
