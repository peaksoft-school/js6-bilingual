import React from "react";

import styled from "styled-components";

function DataInput({ onChange, defaultValue }) {
    function convertHMS(value) {
        const sec = parseInt(value, 10); // convert value to number if it's string
        let hours = Math.floor(sec / 3600); // get hours
        let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
        let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
        // add 0 if value < 10; Example: 2 => 02
        if (hours < 10) {
            hours = `0${hours}`;
        }
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        return `${minutes}:${seconds}`; // Return is HH : MM : SS
    }

    return (
        <StyledDataInput>
            <StyledText>Duration (in minutes)</StyledText>
            <StyledInput type="time" defaultValue={defaultValue} onChange={onChange} />
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
