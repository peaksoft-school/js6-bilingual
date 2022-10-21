import React from "react";

import styled from "styled-components";

function Header() {
    return (
        <StyledHeader>
            <span>Home</span>
            <span>Home</span>
            <span>Home</span>
            <span>Home</span>
            <span>Home</span>
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
    width: 1000px;
    height: 100px;
    border: 3px solid black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    :scroll-behavior {
        background-color: red;
    }
`;
export default Header;
