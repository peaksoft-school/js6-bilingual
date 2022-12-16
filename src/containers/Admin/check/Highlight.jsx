import React from "react";

import styled from "styled-components";

function Highlight({
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
    return (
        <HighlightBox>
            <BlText>
                <span>Passage: </span>
                <span> {passage}</span>
            </BlText>
            <BlText>
                <span>Question Statement: </span>
                <span> {statement}</span>
            </BlText>
            <Correct>
                <span>Correct answer: </span>
                <span> {correctAnswer}</span>
            </Correct>
            <BlText>
                <span>User’s Answer: </span>
                <span>{userAnswer}</span>
            </BlText>
        </HighlightBox>
    );
}

export default Highlight;
const BlText = styled.div`
    display: flex;
    line-height: 21px;
    margin-top: 20px;
    span:nth-child(1) {
        color: black;
        font-weight: 600;
    }
    span:nth-child(2) {
        color: #4c4859;
    }
`;

const Correct = styled.div`
    display: flex;
    line-height: 21px;
    margin-top: 20px;
    margin-bottom: 46px;
    span:nth-child(1) {
        color: black;
        font-weight: 600;
    }
    span:nth-child(2) {
        color: #3c00ff;
    }
`;
const HighlightBox = styled.div``;
