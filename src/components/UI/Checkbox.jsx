import React from "react";

import Checkbox from "@mui/material/Checkbox";

import { styled } from "@mui/material/styles";
import { Styles } from "utils/constants/theme";

function CheckBox({ onChange, value, boxcolor }) {
    return <StyledCheckbox onChange={onChange} boxcolor={boxcolor} defaultChecked={value} />;
}

export default CheckBox;

const StyledCheckbox = styled(Checkbox)`
    &.MuiCheckbox-root {
        width: 18px;
        height: 18px;
        color: ${Styles.colors.Secondary.Scd9A};
    }
    &.Mui-checked {
        color: ${(props) => props.boxcolor};
    }
`;
