import React from "react";

import Input from "components/UI/Input";

const App = () => {
    const [value, setValue] = React.useState("");
    React.useEffect(() => {
        console.log(value);
    }, [value]);
    return (
        <div>
            <Input setValue={setValue} value={value} forInput={{ label: "Name", size: "sm" }} />
        </div>
    );
};

export default App;
