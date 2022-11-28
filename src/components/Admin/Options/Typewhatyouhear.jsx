import React from "react";

import { Button } from "@mui/material";
import { ButtonUi } from "components/UI";
import IconButtonStyled from "components/UI/IconButtonStyled";
import Input from "components/UI/Input";

import styled from "styled-components";

function Typewhatyouhear() {
    return (
        <StlyedContainer>
            <StyledTitle>Number off Replays</StyledTitle>
            <StyledAudioBox>
                <StyledNumber>2</StyledNumber>
                <Button
                    sx={{
                        bgcolor: "#3A10E5",
                        "&:hover": {
                            bgcolor: "#3A10E5",
                        },
                    }}
                    variant="contained"
                    component="label">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
                <StyledPause>
                    <IconButtonStyled
                        fontSize="27px"
                        Icon={`<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.5L9 8L1 14.5V1.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
                    />
                </StyledPause>
                <p>Name audio file</p>
            </StyledAudioBox>
            <StyledAnswer>Correct answer</StyledAnswer>
            <Input />
            <StyledBtnBox>
                <ButtonUi variant="outlined">GO BACK</ButtonUi>
                <ButtonUi variant="contained" color="success">
                    SAVE
                </ButtonUi>
            </StyledBtnBox>
        </StlyedContainer>
    );
}

export default Typewhatyouhear;

const StlyedContainer = styled.div`
    width: 100%;
    background: #ffffff;
`;
const StyledTitle = styled.h1`
    width: 80px;
    font-weight: 500;
    font-size: 16px;
    color: #4c4859;
    display: flex;
    justify-content: start;
`;
const StyledAudioBox = styled.div`
    width: 423px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px 0 24px 0;
`;
const StyledNumber = styled.div`
    width: 49px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border: 1.53px solid #d4d0d0;
    border-radius: 8px;
`;
const StyledPause = styled.button`
    width: 46px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    outline: none;
    border: none;
    background: #3a10e5;
    border-radius: 8px;
    padding: 13px 24px;
    cursor: pointer;
`;
const StyledAnswer = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: #4c4859;
    margin-bottom: 12px;
`;
const StyledBtnBox = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: end;
    margin-top: 32px;
`;
