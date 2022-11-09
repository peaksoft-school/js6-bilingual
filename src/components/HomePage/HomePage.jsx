import React from "react";

// import ControlledAccordions from "components/ControlledAccordions";

import CountUp from "components/CountUp/CountUp";

import LandingPage from "components/LandingPage/LandingPage";

import Way from "components/LandingPage/Way";

import OurTeam from "components/OurTeam/OurTeam";

import UseFullVideo from "components/UseFullVideo/UseFullVideo";

import styled from "styled-components";

function HomePage() {
    return (
        <StyledDivCont>
            <CountUp />
            <OurTeam />
            <UseFullVideo />
            <Way />
            <LandingPage />
            {/* <ControlledAccordions /> */}
        </StyledDivCont>
    );
}

export default HomePage;

const StyledDivCont = styled.div`
    width: 1440px;
    background: #fef5e8;
    margin: 0 auto;
`;
