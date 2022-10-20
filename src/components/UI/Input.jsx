import React from "react";

import { TextField } from "@mui/material";

import styled, { css } from "styled-components";

const Input = ({
    forInput,
    colortext = "red",
    colorlabeltextandborderandhover = "#3A10E5",
    handleChange,
    sx,
}) => {
    // FOR INPUT colorlabeltextandborderandhover
    return (
        <CssTextField
            onChange={handleChange}
            colortext={colortext}
            colorlabeltextandborderandhover={colorlabeltextandborderandhover}
            {...forInput}
            sx={sx}
            id="custom-css-outlined-input"
        />
    );
};

const CssTextField = styled(TextField)`
    ${(props) => {
        return css`
            input {
                color: ${props.colortext} !important;
            }
            & label.Mui-focused {
                color: ${props.colorlabeltextandborderandhover};
            }
            & .MuiInput-underline:after {
                border-bottom-color: green;
            }
            & .MuiOutlinedInput-root {
                & fieldset {
                    bordercolor: #bdbdbd;
                }
                &:hover fieldset {
                    border-color: ${props.colorlabeltextandborderandhover};
                }
                &.Mui-focused fieldset {
                    border-color: ${props.colorlabeltextandborderandhover};
                }
            }
        `;
    }}
`;

export default Input;
