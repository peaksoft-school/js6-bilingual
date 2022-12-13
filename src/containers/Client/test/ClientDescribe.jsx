import React from "react";

import TextArea from "components/UI/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addAnswer } from "store/slices/clientSlice";
import styled from "styled-components";

export default function ClientDescribe({ question }) {
    const dispatch = useDispatch();
    const [text, setText] = React.useState("");
    const questionsAnswers = useSelector((inner) => inner.testType.answer.questionsAnswers);
    const { id } = useParams();
    console.log(questionsAnswers);
    React.useEffect(() => {
        dispatch(
            addAnswer({
                testId: +id,
                options: {
                    questionId: question.id,
                    optionAnswerId: [],
                    answer: text,
                },
            })
        );
    }, [text, question.id]);
    React.useEffect(() => {
        setText("");
    }, [question.id]);
    return (
        <>
            <StyledForTitle>
                <p>{question.title}</p>
            </StyledForTitle>
            <StyledForImage>
                <img width="202px" height="193px" src={question.content} alt="" />
                <TextArea
                    width="382px"
                    placeholder=" Your response "
                    rows="7"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </StyledForImage>
        </>
    );
}
const StyledForImage = styled.div`
    height: 183px;
    width: 594px;
    margin: auto;
    display: flex;
    gap: 30px;
    justify-content: space-between;
    img {
        object-fit: cover;
    }
`;
const StyledForTitle = styled.div`
    margin-bottom: 50px;
    font-weight: 400;
    font-size: 28px;
    text-align: center;
    color: #4c4859;
`;
