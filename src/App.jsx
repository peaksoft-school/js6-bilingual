import React from "react";

import ControlledAccordions from "components/Accordion";

import "./App.css";

const data = [
    {
        panel: "panel1",
        answer: "lPlease take the test in a separate, quiet room. Close all other windows and close all other programs before starting the test.An external USB keyboard or mouse can be used during the test. However, when answering test questions, you should only type on one keyboard and use one mouse. Don't switch between multiple keyboards or mice.fvdlfg ldfgkdfg ldkfgdfgldf lkdfgdkfgdfg ldfkgdjgkldgf ldkfgdjfgldg dlfkgdgjkldfg dlfkgdjfglkdgd ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd ddddddddddddddddddddddd",
        question: "What is Billiggual?",
    },
    { panel: "panel2", answer: "dd", question: "ww" },
];

const App = () => {
    return (
        <div className="app">
            <ControlledAccordions data={data} />
        </div>
    );
};

export default App;
