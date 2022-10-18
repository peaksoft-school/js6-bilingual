import React from "react";

import { Button } from "@mui/material";
import styled from "styled-components";

const StyledButton = ({ children, variant, disabled, color, sx, icon }) => {
    console.log(icon);
    return (
        <StyleButton variant={variant} color={color} sx={sx} disabled={disabled}>
            {icon}
            {children}
        </StyleButton>
    );
};

export default StyledButton;

const StyleButton = styled(Button)`
    &.MuiButton-root {
        height: 42px;
        color: #ffffff;
        border-radius: 8px;
        background: #3a10e5;
        padding: 13px 24px;
        font-size: 14px;
    }
    &.MuiButton-root:hover {
        background: rgba(58, 16, 229, 0.9);
    }
    &.MuiButton-root:active {
        background: #3007da;
    }
    &.MuiButton-containedPrimary:disabled,
    &.MuiButton-containedSecondary:disabled,
    &.MuiButton-outlinedPrimary:disabled {
        background: #ffffff;
        border: 2px solid #c4c4c4;
        color: #c4c4c4;
        box-shadow: 0px 1px 2px rgba(196, 196, 196, 0.2);
    }
    &.MuiButton-containedSecondary {
        background-color: #2ab930;
    }
    &.MuiButton-containedSecondary:hover {
        background: #31cf38;
    }
    &.MuiButton-containedSecondary:active {
        background: #08af10;
    }
    &.MuiButton-outlinedPrimary {
        color: #3a10e5;
        border: 2px solid #3a10e5;
        background: #ffffff;
    }
    &.MuiButton-outlinedPrimary:hover {
        background: #3a10e5;
        color: #ffffff;
    }
    &.MuiButton-outlinedSuccess {
        color: #4c4859;
        background-color: #ffffff;
        border: 2px solid #4c4859;
    }
    &.MuiButton-outlinedSuccess:hover {
        color: #ffffff;
    }

    &.MuiButton-containedSuccess:disabled {
        background: #c4c4c4;
        box-shadow: 0px 1px 2px rgba(196, 196, 196, 0.2), 0px 1px 2px rgba(196, 196, 196, 0.2);
        color: #ffffff;
    }
`;
