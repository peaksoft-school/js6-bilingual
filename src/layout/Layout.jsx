import React from "react";

import Header from "components/LandingPage/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Layout() {
    return (
        <>
            <Header />
            <StyledMain>
                <Outlet />
            </StyledMain>
        </>
    );
}

export default Layout;

const StyledMain = styled.main`
    padding-top: 96px;
    background: #d7e1f8;
`;
