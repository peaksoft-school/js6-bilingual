import React, { useState } from "react";

import CheckBox from "components/UI/CheckBox";

const App = () => {
    const [value, setValue] = useState(null);
    const changeHandler = () => {
        setValue(true);
    };
    return (
        <div>
            App
            <CheckBox onChange={changeHandler} value={value} boxcolor="red" />
        </div>
    );
};

export default App;
