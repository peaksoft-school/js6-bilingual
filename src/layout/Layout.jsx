import React from "react";

import Header from "components/LandingPage/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Layout() {
    return (
        <StyledMain>
            <Header HeaderBg="white" />
            <Outlet />
        </StyledMain>
    );
}

export default Layout;

const StyledMain = styled.main`
    width: 100%;
    background: #d7e1f8;
`;
