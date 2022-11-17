import React from "react";

import styled from "styled-components";

import Autoplay from "./Autoplay";

import PartnersItem from "./PartnersItem";

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
