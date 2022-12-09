import React from "react";

import { ButtonUi } from "components/UI";
import ClientContainerTest from "components/UI/ClientContainerTest";
import Progress from "components/UI/Progress";
import UICard from "components/UI/UICard";
import styled from "styled-components";

export default function ClientTestsLayout({ children, questionResponses, setcountpage }) {
    const getdatafromchild = () => {};

    const handleNextClick = () => {
        setcountpage((prev) => {
            if (prev < questionResponses.length) return prev + 1;
            return prev;
        });
    };

    return (
        <ClientContainerTest>
            <UICard
                cardWidth="900px"
                cardBorderRadius="10px"
                cardBoxShadow="0px 4px 39px -5px rgba(196, 196, 196, 0.6)">
                <Progress minute={10} />
                {React.cloneElement(children, { getdatafromchild })}
                <StyledLine />
                <StyledBtn>
                    <ButtonUi
                        onClick={handleNextClick}
                        variant="contained"
                        maxwidth="143px"
                        maxheight="42px"
                        fontSize="14px">
                        NEXT
                    </ButtonUi>
                </StyledBtn>
            </UICard>
        </ClientContainerTest>
    );
}
const StyledLine = styled.div`
    border: 1.53px solid #d4d0d0;
    height: 1px;
    margin: 60px 0 32px 0;
`;

const StyledBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
`;
