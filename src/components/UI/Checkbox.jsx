import React from "react";

import Checkbox from "@mui/material/Checkbox";

import { styled } from "@mui/material/styles";

function CheckBox({ onChange, value }) {
    return <StyledCheckbox onChange={onChange} value={value} />;
}

export default CheckBox;

const StyledCheckbox = styled(Checkbox)`
    &.MuiCheckbox-root {
        width: 18px;
        height: 18px;
        color: #9a9a9a;
    }
    &.Mui-checked {
        color: #2ab930;
    }
`;
