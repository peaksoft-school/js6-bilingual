import React from "react";

import { TextField } from "@mui/material";

import styled from "styled-components";

const Input = ({ forInput, colorText = "gray", colorLabelTextAndBorderAndHover = "#3A10E5" }) => {
    // FOR INPUT colorLabelTextAndBorderAndHover

    const CssTextField = styled(TextField)({
        "& input": {
            color: colorText,
        },
        "& label.Mui-focused": {
            color: colorLabelTextAndBorderAndHover,
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "green",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#BDBDBD",
            },
            "&:hover fieldset": {
                borderColor: colorLabelTextAndBorderAndHover,
            },
            "&.Mui-focused fieldset": {
                borderColor: colorLabelTextAndBorderAndHover,
            },
        },
    });
    return <CssTextField {...forInput} fullWidth id="custom-css-outlined-input" />;
};

export default Input;
