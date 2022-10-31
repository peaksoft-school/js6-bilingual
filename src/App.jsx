import React from "react";

import "./App.css";
import Header from "components/LandingPage/Header";

import HeaderBottom from "components/LandingPage/HeaderBottom";

const App = () => {
    return (
        <div className="app">
            <Header Choice="false" />
            <HeaderBottom />
        </div>
    );
};

export default App;
