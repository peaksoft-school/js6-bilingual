import React from "react";

import { ButtonUi } from "components/UI";

import styled from "styled-components";

import PlayRadio from "../../../assets/icons/PlayAudio.svg";

function TypeYouHear({
    id,
    correctAnswer,
    duration,
    fullName,
    testTitle,
    link,
    minNumberOfReplays,
    minNumberOfWords,
    options,
    passage,
    questionTitle,
    questionType,
    scoreOfQuestion,
    statement,
    userAnswer,
    userNumberOfPlays,
    userOptionsAnswer,
}) {
    const audioPlay = () => {
        const audio = new Howl({
            src: link,
            html5: true,
            onend: () => {
                setIsAudioStop(true);
            },
        });
        if (dataField.file) {
            setIsAudioStop(false);
        }
        if (isAudioStop) {
            audio.play();
        }
    };
    return (
        <div>
            <Audio>
                <ButtonUi onClick={audioPlay} variant="contained">
                    <img src={PlayRadio} alt="" />
                    PLAY AUDIO
                </ButtonUi>
                <p>Correct ansver: {correctAnswer}</p>
            </Audio>
            <Answer>
                <h3> User`s Answer</h3>
                <BlText>
                    <span>Entered Statement: </span>
                    <span>{correctAnswer}</span>
                </BlText>
                <BlText>
                    <span>Number of plays: </span>
                    <span>{userNumberOfPlays}</span>
                </BlText>
            </Answer>
        </div>
    );
}
export default TypeYouHear;
const Audio = styled.div`
    display: flex;
    p {
        margin-left: 18px;
        font-size: 16px;
        display: flex;
        align-items: center;
        color: #4c4859;
    }
    img {
        margin-right: 8px;
    }
`;
const Answer = styled.div`
    height: 79px;
    width: 361px;
    margin-top: 46px;
    h3 {
        margin-bottom: 14px;
    }
`;
const BlText = styled.span`
    display: block;
    line-height: 21px;
    margin-top: 6px;
    span:nth-child(1) {
        color: black;
        font-weight: 600;
    }
    span:nth-child(2) {
        color: #4c4859;
    }
`;
