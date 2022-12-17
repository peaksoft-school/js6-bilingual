import React from "react";

import { FormControlLabel, RadioGroup, Radio } from "@mui/material";

import { styled } from "@mui/material/styles";
import { Styles } from "utils/constants/theme";

function RadioButton({ onChange, value, label, radioValue }) {
    return (
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            onChange={onChange}
            value={radioValue}
            name="radio-buttons-group">
            <FormControlLabel value={value} control={<StyleRadio />} label={label} />
        </RadioGroup>
    );
}

export default RadioButton;

const StyleRadio = styled(Radio)`
    &.MuiButtonBase-root {
        width: 18px;
        height: 18px;
        margin: 10px;
        color: ${Styles.colors.Secondary.Scd9A};
    }
    &.Mui-checked {
        width: 18px;
        height: 18px;
        margin: 10px;
        color: ${Styles.colors.Primary.PmrBlue};
    }
`;
