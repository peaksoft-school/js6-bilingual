import React from "react";

import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import { styled } from "@mui/material/styles";

function CheckBox({ onChange, value, boxcolor, label }) {
    if (!label) {
        return <StyledCheckbox onChange={onChange} value={value} boxcolor={boxcolor} />;
    }

    return (
        <FormControlLabel
            sx={{ marginLeft: 0, display: "flex", gap: "8px", color: "rgba(117, 117, 117, 1)" }}
            control={<StyledCheckbox onChange={onChange} value={value} boxcolor={boxcolor} />}
            label={label}
            labelPlacement="end"
        />
    );
}

export default CheckBox;

const StyledCheckbox = styled(Checkbox)`
    &.MuiCheckbox-root {
        width: 18px;
        height: 18px;
        color: #9a9a9a;
    }
    &.Mui-checked {
        color: ${(props) => props.boxcolor};
    }
`;
