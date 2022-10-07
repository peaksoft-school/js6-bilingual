import React from "react";

import Radio from "@mui/material/Radio";

import { styled } from "@mui/material/styles";

function RadioButton({ onChange, value }) {
    return <StyledRadio onChange={onChange} value={value} />;
}

export default RadioButton;

const StyledRadio = styled(Radio)`
    &.MuiButtonBase-root {
        width: 18px;
        height: 18px;
        color: #9a9a9a;
    }
    &.Mui-checked {
        width: 18px;
        height: 18px;
        color: #3a10e5;
    }
`;
