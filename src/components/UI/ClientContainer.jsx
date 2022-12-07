import React from "react";

import styled from "styled-components";

import Header from "./HeaderClient";

function ClientContainer({ children }) {
    return (
        <StlyedClientContainer>
            <StyledContainerGlav>
                <Header />
                <StyledContainer>{children}</StyledContainer>
            </StyledContainerGlav>
        </StlyedClientContainer>
    );
}

const StlyedClientContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #d7e1f8;
`;
const StyledContainerGlav = styled.div`
    width: 1530px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledContainer = styled.div`
    margin-top: 80px;
    margin-bottom: 80pc;
`;
export default ClientContainer;