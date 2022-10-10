import React, { useState } from "react";

import { IconButton, FormControl, InputLabel, OutlinedInput } from "@mui/material";

import { InputViewOff, InputViewOn } from "assets/icons/index";

import styled from "styled-components";

function PasswordInput({ ...props }) {
    const [inputViewOnOff, setInputViewOnOff] = useState(false);

    console.log(props);
    function handleViewOnOff() {
        setInputViewOnOff((prevState) => !prevState);
    }
    return (
        <FormControl1>
            <InputLabel>Password</InputLabel>
            <OutlinedInput1
                error={false}
                type={inputViewOnOff ? "password" : "text"}
                endAdornment={
                    <IconButton onClick={() => handleViewOnOff()}>
                        {inputViewOnOff ? <InputViewOff /> : <InputViewOn />}
                    </IconButton>
                }
                label="Password"
            />
        </FormControl1>
    );
}

const OutlinedInput1 = styled(OutlinedInput)`
    width: 500px;
    height: 52px;
    color: #757575 !important;
`;
const FormControl1 = styled(FormControl)({
    width: "500px",
    height: "52px",
    "& label.Mui-focused": {
        color: "#3A10E5",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#BDBDBD",
        },
        "&:hover fieldset": {
            borderColor: "#3A10E5",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#3A10E5",
        },
    },
});
export default PasswordInput;
