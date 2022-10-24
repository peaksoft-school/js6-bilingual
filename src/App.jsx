import React from "react";

import Autoplay from "components/LandingPage/Autoplay";

import SecondarySlider from "components/LandingPage/SecondarySlider";

import "./App.css";

const App = () => {
    return (
        <div className="app">
            <SecondarySlider />
            <Autoplay />
        </div>
    );
};

export default App;
