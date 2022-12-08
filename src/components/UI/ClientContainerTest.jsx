import React from "react";

import styled from "styled-components";

function ClientContainerTest({ children }) {
    return (
        <StyledMain>
            <StyeldDivBtn>
                <StyledButton>QUITE TEST</StyledButton>
            </StyeldDivBtn>
            <StyledSection>{children}</StyledSection>
        </StyledMain>
    );
}

export default ClientContainerTest;

const StyledMain = styled.main`
    height: 100vh;
    background: #d7e1f8;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledSection = styled.div`
    margin-top: 40px;
`;
const StyeldDivBtn = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
`;

const StyledButton = styled.button`
    width: 135px;
    height: 40px;
    margin: 20px 40px 0 0;
    background: #ffffff;
    border: 2px solid #4c4859;
    box-shadow: 0px 1px 2px rgba(76, 72, 89, 0.2), 0px 1px 2px rgba(76, 72, 89, 0.2);
    border-radius: 8px;
    padding: 13px 24px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
