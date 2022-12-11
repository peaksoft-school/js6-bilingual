import React from "react";

import { TextField } from "@mui/material";

import styled from "styled-components";

export default function TextArea({ width, value, setValue, placeholder, rows }) {
    return (
        <Textarea
            width={width}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder={placeholder}
            multiline
            minRows={rows}
        />
    );
}

const Textarea = styled(TextField)`
    width: ${(p) => p.width};
    font-family: "poppins-bold", sans-serif !important;
    padding: 60px;
    resize: none;

    & .MuiInputBase-root {
        border-radius: 8px;
    }
`;
