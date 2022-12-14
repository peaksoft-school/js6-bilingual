import React from "react";

import UICard from "components/UI/UICard";

import styled from "styled-components";

export default function SubmitedResult() {
    return (
        <StyledContainerResult>
            <UICard>SubmitedResult</UICard>;
        </StyledContainerResult>
    );
}
const StyledContainerResult = styled.div`
    width: 100px;
`;
