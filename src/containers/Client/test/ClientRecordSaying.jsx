import React from "react";

import SayingImg from "assets/images/saying.png";
import { ButtonUi } from "components/UI";
import TextArea from "components/UI/TextArea";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import styled, { css, keyframes } from "styled-components";

export default function ClientRecordSaying({ question }) {
    const { transcript, listening, resetTranscript } = useSpeechRecognition();
    const startRecordSaying = () => {
        resetTranscript();
        SpeechRecognition.startListening({ continuous: true });
    };
    const stopRecordingSaying = () => {
        SpeechRecognition.stopListening();
    };
    console.log(transcript);
    return (
        <Main>
            <Box>
                <Title>{question.title}</Title>
                <Wrapp>
                    <Row>
                        <img src={SayingImg} alt={question.content} />
                        {/* <TextArea value={transcript} placeholder="Answer the question" /> */}
                        <span>{question.title}</span>
                    </Row>
                </Wrapp>
            </Box>
            <Actions>
                <AnimationPoint>
                    <Point isActive={!!listening} /> recordind...
                </AnimationPoint>
                <ButtonUi
                    onClick={() => (listening ? stopRecordingSaying() : startRecordSaying())}
                    text={listening ? "STOP RECORDING" : "RECORD NOW"}
                    variant="contained"
                    color="primary"
                />
            </Actions>
        </Main>
    );
}

const PointAnimate = keyframes`
 0% { opacity: 1 }
 50% { opacity: 0.2 }
 100% { opacity: 1 }
`;

const Wrapp = styled.div``;
const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: center;
    margin-bottom: 40px;
`;
const Main = styled.div``;
const Box = styled.div``;
const Title = styled.h2``;
const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const AnimationPoint = styled.div`
    text-transform: uppercase;
    etter-spacing: 0.075em;
    color: #3a10e5;
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Point = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: #3a10e5;
    display: block;

    ${(props) =>
        props.isActive
            ? css`
                  animation: ${PointAnimate} 1.2s linear infinite;
              `
            : ""}
`;
const StyledLine = styled.div`
    border: 1.53px solid #d4d0d0;
    height: 1px;
    margin: 60px 0 32px 0;
`;
