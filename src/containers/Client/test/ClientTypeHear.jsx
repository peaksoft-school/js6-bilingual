import React, { useState } from "react";

import IconButtonStyled from "components/UI/IconButtonStyled";

import TextArea from "components/UI/TextArea";

import { Howl } from "howler";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addAnswer } from "store/slices/clientSlice";
import styled from "styled-components";

import Volume from "../../../assets/icons/Volume-Up.svg";

export default function ClientTypeHear({ question }) {
    const [numberOfReplays, setNumberOfReplays] = useState(question.numberOfReplays);
    const [bgcolor, setBgcolor] = useState(true);
    const audioPlay = () => {
        const audio = new Howl({
            src: question.content,
            html5: true,
            onend: () => {
                setBgcolor(true);
                setNumberOfReplays(numberOfReplays - 1);
            },
        });
        if (numberOfReplays > 0) {
            setBgcolor(false);
            if (bgcolor) {
                audio.play();
            }
        }
    };
    const dispatch = useDispatch();
    const { id } = useParams();
    React.useEffect(() => {
        dispatch(
            addAnswer({
                testId: +id,
                options: {
                    questionId: question.id,
                    optionAnswerId: "cardList.map((item) => item.id)",
                    answer: "",
                },
            })
        );
    }, [question.id]);
    return (
        <StyledContainer>
            <span>Type the statement you hear</span>
            <StyledContainerMain>
                <StyledContainerIcon
                    disabeled={numberOfReplays}
                    bgcolor={bgcolor}
                    onClick={() => audioPlay()}>
                    <IconButtonStyled Icon={Volume} />
                </StyledContainerIcon>
                <StyledContainerOne>
                    <TextArea width="439px" rows="4" />
                    <span>number of replays left: {numberOfReplays}</span>
                </StyledContainerOne>
            </StyledContainerMain>
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    width: 640px;
    height: 269px;
    margin: auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    span {
        :nth-child(1) {
            width: 355px;
            height: 32px;
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 32px;
            color: #4c4859;
        }
    }
`;
const StyledContainerMain = styled.div`
    width: 639px;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const StyledContainerIcon = styled.div`
    width: 88px;
    height: 88px;
    border-radius: 100%;
    opacity: ${(props) => (props.disabeled ? 1 : 0.5)};
    background-color: ${(props) => (props.bgcolor ? "rgba(58, 16, 229, 1)" : "#7a5df1")};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${(props) => (props.disabeled ? "pointer" : "not-allowed;")};
`;
const StyledContainerOne = styled.div`
    width: 439px;
    height: 160px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
