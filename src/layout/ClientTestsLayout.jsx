import React from "react";

import { ButtonUi } from "components/UI";
import ClientContainerTest from "components/UI/ClientContainerTest";
import Progress from "components/UI/Progress";
import UICard from "components/UI/UICard";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function ClientTestsLayout({ children, questionResponses, setcountpage, count }) {
    const handleNextClick = () => {
        setcountpage((prev) => {
            if (prev < questionResponses.length) {
                return prev + 1;
            }
            return prev;
        });
    };

    const answer = useSelector((item) => item.testType.answer.questionsAnswers);
    const isActiveBtnNext = answer[count]?.optionAnswerId.length || answer[count]?.answer;
    console.log(answer[count]?.optionAnswerId.length);
    return (
        <ClientContainerTest>
            <UICard
                cardWidth="900px"
                cardBorderRadius="10px"
                cardBoxShadow="0px 4px 39px -5px rgba(196, 196, 196, 0.6)">
                <Progress minute={10} />
                <Wrapper>{React.cloneElement(children)}</Wrapper>
                <StyledLine />
                <StyledBtn>
                    <ButtonUi
                        onClick={handleNextClick}
                        disabled={!isActiveBtnNext}
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

const Wrapper = styled.div`
    padding-top: 50px;

    h2 {
        text-align: center;
        margin-bottom: 50px;
    }
`;
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
