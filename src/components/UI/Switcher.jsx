import React from "react";

import FormControlLabel from "@mui/material/FormControlLabel";

import FormGroup from "@mui/material/FormGroup";

import { styled } from "@mui/material/styles";

import Switch from "@mui/material/Switch";

const Switcher = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 82,
    height: 46,
    padding: 0,
    "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: 2,
        transitionDuration: "300ms",
        "&.Mui-checked": {
            transform: "translateX(36px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
                backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
                opacity: 1,
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
            },
        },
    },
    "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 42,
        height: 42,
    },
    "& .MuiSwitch-track": {
        borderRadius: 46 / 2,
        duration: 500,
    },
}));

export default function CustomizedSwitches({ onChange, value }) {
    return (
        <FormGroup>
            <FormControlLabel
                onChange={onChange}
                value={value}
                control={<Switcher defaultChecked />}
            />
        </FormGroup>
    );
}
