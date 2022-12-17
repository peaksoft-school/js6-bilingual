import React from "react";

import styled from "styled-components";
import { Styles } from "utils/constants/theme";

function Describe({ correctAnswer, link, userAnswer }) {
    return (
        <StyledContainerMain>
            <StyledContainer>
                <StyledImage src={link} />
                <StyledText>CorrectAnsver: `{correctAnswer}`</StyledText>
            </StyledContainer>
            <StyledContainerText>
                <StyledTextOne>User’s Answer </StyledTextOne>
                <StyledTextOne>
                    Entered Statement: <StyledText>{userAnswer}</StyledText>
                </StyledTextOne>
            </StyledContainerText>
        </StyledContainerMain>
    );
}
const StyledContainerMain = styled.div`
    width: 687px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const StyledContainer = styled.div`
    width: 687px;
    height: 178px;
    display: flex;
    align-items: center;
`;
const StyledImage = styled.img`
    width: 180px;
    height: 178px;
    margin-right: 32px;
    border-radius: 8px;
    object-fit: cover;
`;
const StyledText = styled.span`
    font-weight: 400;
    font-size: ${Styles.FontSizes["16"]}px;
`;
const StyledTextOne = styled.span`
    font-weight: 500;
    font-size: ${Styles.FontSizes["18"]}px;
    color: ${Styles.colors.Primary.Pmr4C};
`;
const StyledContainerText = styled.div`
    margin-top: 46px;
    height: 53px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export default Describe;
