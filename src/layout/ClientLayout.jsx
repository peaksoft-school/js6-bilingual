import React, { useEffect, useState } from "react";

import { ButtonUi } from "components/UI";
import ClientContainer from "components/UI/ClientContainer";
import Progress from "components/UI/Progress";
import UICard from "components/UI/UICard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuestionForClientById } from "store/slices/clientSlice";
import styled from "styled-components";

function SelectEnglishWords({ children }) {
    const dispatch = useDispatch();
    const { id } = useParams();
    const clientQuestion = useSelector((state) => state.testType.questions);
    const [disableById, setDisableById] = useState([]);

    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        dispatch(getQuestionForClientById(id));
    }, []);
    const dragEndHandler = (e, card) => {
        setDisableById((prev) => [...prev, card.id]);
        e.preventDefault();
        setCardList((prev) => [...prev, card]);
    };

    const dragOverHandler = (e) => {
        e.preventDefault();
    };

    const handleNext = () => {};

    const getDataInChildren = () => {};

    return (
        <ClientContainer>
            <UICard
                cardWidth="900px"
                cardBorderRadius="10px"
                cardBoxShadow="0px 4px 39px -5px rgba(196, 196, 196, 0.6)">
                <Progress minute={10} />
                {React.cloneElement(children, { getDataInChildren })}
                <StyledLine />
                <StyledBtn>
                    <ButtonUi
                        onClick={handleNext}
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
