import React from "react";

import Autoplay from "./Autoplay";

import PartnersItem from "./PartnersItem";

import styled from "styled-components";

function LandingPage() {
    return (
        <ContainerDiv>
            <Autoplay />
            <PartnersItem />
        </ContainerDiv>
    );
}

export default LandingPage;

const ContainerDiv = styled.div`
    width: 100%;
`;
