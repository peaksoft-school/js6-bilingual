import React from "react";

import DropDown from "components/UI/DropDown";

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
        </div>
    );
};

export default App;
