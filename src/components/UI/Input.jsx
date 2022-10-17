import React from "react";

import { TextField } from "@mui/material";

import styled, { css } from "styled-components";

const Input = ({
    forInput,
    colortext = "gray",
    colorlabeltextandborderandhover = "#3A10E5",
    value,
    setValue,
}) => {
    // FOR INPUT colorlabeltextandborderandhover
    return (
        <CssTextField
            onChange={(e) => setValue(e.target.value)}
            value={value}
            colortext={colortext}
            colorlabeltextandborderandhover={colorlabeltextandborderandhover}
            {...forInput}
            fullWidth
            id="custom-css-outlined-input"
        />
    );
};

const CssTextField = styled(TextField)`
    ${(props) => {
        return css`
    & input: {
        color: ${props.colortext},
    },
    & label.Mui-focused: {
        color: ${props.colorlabeltextandborderandhover},
    },
    & .MuiInput-underline:after: {
        borderBottomColor: green,
    },
    & .MuiOutlinedInput-root: {
        & fieldset: {
            borderColor: #BDBDBD,
        },
        &:hover fieldset: {
            borderColor: ${props.colorlabeltextandborderandhover},
        },
        &.Mui-focused fieldset: {
            borderColor: ${props.colorlabeltextandborderandhover},
        },
    },
    
    `;
    }}
`;

export default Input;
