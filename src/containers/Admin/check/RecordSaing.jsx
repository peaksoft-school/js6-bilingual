import React from "react";

import { ButtonUi } from "components/UI";

import styled from "styled-components";

import { Styles } from "utils/constants/theme";

import PlayRadio from "../../../assets/icons/PlayAudio.svg";

function RecordSaing({
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
        <Audio>
            <ButtonUi onClick={audioPlay} variant="contained">
                <img src={PlayRadio} alt="" />
                PLAY AUDIO
            </ButtonUi>
            <p>Correct ansver: {correctAnswer}</p>
        </Audio>
    );
}
export default RecordSaing;
const Audio = styled.div`
    display: flex;
    p {
        margin-left: 18px;
        font-size: ${Styles.FontSizes["16"]}px;
        display: flex;
        align-items: center;
        color: ${Styles.colors.Primary.Pmr4C};
    }
    img {
        margin-right: 8px;
    }
`;
