import React from "react";

import Input from "components/UI/Input";

const App = () => {
    return (
        <div>
            <Input handleChange={handleChange} forInput={{ label: "Name", size: "sm" }} />
        </div>
    );
};

export default App;
