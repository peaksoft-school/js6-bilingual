import React from "react";

import styled from "styled-components";

function DataInput({ onChange }) {
    return (
        <StyledDataInput>
            <StyledText>Duration (in minutes)</StyledText>
            <StyledInput type="time" min="01:00" max="30:00" onChange={onChange} />
        </StyledDataInput>
    );
}
const StyledDataInput = styled.div`
    width: 99px;
    height: 46px;
    input[type="time" i]::-webkit-calendar-picker-indicator {
        display: none;
    }
`;
const StyledInput = styled.input`
    width: 99px;
    height: 46px;
    border: 1.53px solid #d4d0d0;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 400;
    font-family: "DINNextRoundedLTW01-Regular";
    padding-left: 30px;
`;
const StyledText = styled.span`
    width: 78px;
    height: 36px;
    font-family: "DINNextRoundedLTW04-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    display: flex;
`;
export default DataInput;
