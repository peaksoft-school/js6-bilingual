import React from "react";

import styled from "styled-components";
import { Styles } from "utils/constants/theme";

function DataInput({ onChange, value, ...props }) {
    return (
        <StyledDataInput>
            <StyledText error={props.error}>
                Duration <span>(in minutes)</span>
            </StyledText>
            <StyledInput error={props.error} type="time" value={value} onChange={onChange} />
        </StyledDataInput>
    );
}
const StyledDataInput = styled.div`
    width: 99px;
    height: 46px;
    input[type="time"]::-webkit-calendar-picker-indicator {
        display: none;
    }
`;
const StyledInput = styled.input`
    width: 99px;
    height: 46px;
    border: 1.53px solid ${Styles.colors.Secondary.ScdD4};
    border-radius: 8px;
    font-size: ${Styles.FontSizes["16"]}px;
    font-weight: 400;
    font-family: "DINNextRoundedLTW01-Regular";
    padding-left: 30px;
    border-color: ${(props) => (props.error ? "red" : "")};
    color: ${(props) => (props.error ? "red" : "")};
`;
const StyledText = styled.span`
    height: 36px;
    font-style: normal;
    font-weight: 500;
    font-size: ${Styles.FontSizes["16"]}px;
    line-height: 18px;
    color: ${(props) => (props.error ? "red" : "")};
    span {
        display: block;
    }
`;
export default DataInput;
