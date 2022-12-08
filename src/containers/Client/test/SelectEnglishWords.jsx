import React, { useState } from "react";

import { ButtonUi } from "components/UI";
import ClientContainer from "components/UI/ClientContainer";
import Progress from "components/UI/Progress";
import UICard from "components/UI/UICard";
import styled from "styled-components";

function SelectEnglishWords() {
    const option = [
        { id: Math.random().toString(), option: "chika" },
        { id: Math.random().toString(), option: "abu" },
        { id: Math.random().toString(), option: "zuli" },
        { id: Math.random().toString(), option: "ema" },
        { id: Math.random().toString(), option: "bema" },
        { id: Math.random().toString(), option: "beka" },
        { id: Math.random().toString(), option: "elya" },
        { id: Math.random().toString(), option: "maka" },
        { id: Math.random().toString(), option: "suli" },
        { id: Math.random().toString(), option: "tigr" },
        { id: Math.random().toString(), option: "line" },
        { id: Math.random().toString(), option: "pantera" },
    ];

    const [cardList, setCardList] = useState("select words and drag here");

    const dragEndHandler = (e, card) => {
        e.preventDefault();
        setCardList(card);
    };

    const dragOverHandler = (e) => {
        e.preventDefault();
    };

    return (
        <ClientContainer>
            <UICard
                cardWidth="900px"
                cardBorderRadius="10px"
                cardBoxShadow="0px 4px 39px -5px rgba(196, 196, 196, 0.6)">
                <Progress minute={10} />
                <StyledP>Select the real English words in this list</StyledP>
                <StyledWrapper>
                    {option.map((item) => (
                        <StyledWordDiv
                            onDragEnd={(e) => dragEndHandler(e, item.option)}
                            onDragOver={(e) => dragOverHandler(e)}
                            draggable
                            key={item.id}>
                            {item.option}
                        </StyledWordDiv>
                    ))}
                </StyledWrapper>
                <StyledDrag onDragOver={(e) => dragOverHandler(e, cardList.option)}>
                    {cardList}
                </StyledDrag>
                <StyledLine />
                <StyledBtn>
                    <ButtonUi
                        disabled={cardList === "select words and drag here"}
                        variant="contained"
                        maxwidth="143px"
                        maxheight="42px"
                        fontSize="14px">
                        NEXT
                    </ButtonUi>
                </StyledBtn>
            </UICard>
        </ClientContainer>
    );
}

export default SelectEnglishWords;

const StyledP = styled.p`
    text-align: center;
    font-weight: 400;
    font-size: 28px;
    color: #4c4859;
    margin: 50px 0;
`;

const StyledWrapper = styled.div`
    width: 813px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const StyledDrag = styled.div`
    width: 243px;
    height: 124px;
    border: 1px dashed #a8a2a2;
    border-radius: 4.62335px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0 0 570px;
    font-weight: 400;
    font-size: 14px;
    :hover {
        background: rgba(58, 16, 229, 0.1);
        border: 1px dashed #3a10e5;
    }
`;

const StyledWordDiv = styled.div`
    height: 41px;
    padding: 10px 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border: 1.53px solid #d4d0d0;
    border-radius: 8px;
    cursor: grab;
    :hover {
        border: 2px solid #3a10e5;
    }
    :active {
        border: none;
        outline: none;
        background: #3a10e5;
        color: #ffffff;
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
