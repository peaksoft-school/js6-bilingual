import React from "react";

import styled from "styled-components";

import Autoplay from "./Autoplay";

import SecondarySlider from "./SecondarySlider";

function LandingPage() {
    return (
        <ContainerDiv>
            <SecondarySlider />
            <Autoplay />
        </ContainerDiv>
    );
}

export default LandingPage;

const ContainerDiv = styled.div`
    width: 100%;
`;
