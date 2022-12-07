import React from "react";

import { ButtonUi } from "components/UI";
import styled from "styled-components";

function Respond() {
    console.log("The responed rendered");
    return (
        <StyledContainerRespond>
            <StyledContainer>
                <StyledText>Question statement</StyledText>
                <StyledInput />
            </StyledContainer>
            <StyledBtnBox>
                <ButtonUi variant="outlined">GO BACK</ButtonUi>
                <ButtonUi variant="contained" color="success">
                    SAVE
                </ButtonUi>
            </StyledBtnBox>
        </StyledContainerRespond>
    );
}
const StyledContainerRespond = styled.div``;
const StyledContainer = styled.div`
    width: 820px;
    height: 74px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 24px;
`;
const StyledText = styled.span``;
const StyledInput = styled.input`
    width: 820px;
    height: 46px;
    padding: 14px 0 14px 16px;
    border: 1.53px solid #d5d0d0;
    border-radius: 8px;
    font-size: 16px;
`;
const StyledBtnBox = styled.div`
    width: 820px;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: end;
    margin-top: 32px;
`;

export default Respond;
