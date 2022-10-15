import React from "react";

import { Add } from "@mui/icons-material";
import ButtonStyled from "components/UI/Button";

const App = () => {
    const someClick = () => {
        console.log("some");
    };
    return (
        <ButtonStyled
            text="Add new"
            variant="contained"
            color="success"
            click={someClick}
            icon={<Add fontSize="small" />}
        />
    );
};

export default App;
