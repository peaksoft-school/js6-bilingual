import React from "react";

import PopUp from "components/UI/PopUp";

import "./App.css";

const App = () => {
    return (
        <div className="app">
            <PopUp titleIs="File saved " textIs="Successfully saved" typeIs="Success" />
            <PopUp titleIs="Error" textIs="Please fill in all fields" typeIs="danger" />
            <PopUp titleIs="Error" textIs="Please fill in all fields" typeIs="danger" />
            <PopUp titleIs="Error" textIs="Please fill in all fields" typeIs="danger" />
        </div>
    );
};

export default App;
