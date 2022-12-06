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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #d7e1f8;
`;
const StyledContainerGlav = styled.div`
    width: 1530px;
    height: 745px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledContainer = styled.div`
    margin-top: 160px;
`;
export default ClientContainer;
