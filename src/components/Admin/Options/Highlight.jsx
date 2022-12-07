import React from "react";

import { ButtonUi } from "components/UI";
import TextArea from "components/UI/TextArea";
import { QuestionContext } from "containers/Admin/pages/CreateQuestion";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { formatToMinute } from "services/format";
import { sendingQuestion, updateQuestionWithId } from "store/slices/questionSlice";
import styled from "styled-components";

export default function Highlight({ data }) {
    const [dataFeild, setDataField] = React.useState({
        passage: "",
        statement: "",
        correctAnswer: "",
        pieceOfCorrectAnswer: "",
    });
    const highlighEvent = () => {
        const str = window.getSelection().toString();
        const correctAnswer = dataFeild.passage.replace(str, `<span>${str}</span>`);
        setDataField((prev) => {
            return {
                ...prev,
                correctAnswer,
                pieceOfCorrectAnswer: str,
            };
        });
    };

    const { setMainQuestion, mainQuestion, typeQuestion, isUpdatePage } =
        React.useContext(QuestionContext);

    const { id } = useParams();

    const dispatch = useDispatch();

    const saveData = async (req) => {
        if (!data.duration) {
            return;
        }
        const min = data.duration.split(":")[0];
        const sec = data.duration.split(":")[1];
        const duration = formatToMinute(+min, +sec);

        const dataQuestion = {
            testId: +id,
            title: data.title,
            duration,
            contentRequest: {
                contentType: "TEXT",
                content: "string",
            },
            questionType: typeQuestion.value,
            statement: dataFeild.statement,
            passage: dataFeild.passage,
            correctAnswer: dataFeild.pieceOfCorrectAnswer,
        };
        if (req === "save") {
            setMainQuestion(dataQuestion);
            dispatch(sendingQuestion(dataQuestion));
        } else if (req === "update") {
            dispatch(updateQuestionWithId((data = { id, dataInfo: dataQuestion })));
        }
    };
    if (mainQuestion && isUpdatePage) {
        React.useEffect(() => {
            const correctAnswer = mainQuestion.passage.replace(
                mainQuestion.correctAnswer,
                `<span>${mainQuestion.correctAnswer}</span>`
            );
            console.log(correctAnswer);
            setDataField({
                statement: mainQuestion.statement,
                passage: mainQuestion.passage,
                correctAnswer,
            });
        }, []);
    }
    return (
        <Main>
            <Block>
                <h4> Questions to the Passage </h4>
                <StyledInput
                    onChange={(e) =>
                        setDataField((prev) => {
                            return {
                                ...prev,
                                statement: e.target.value,
                            };
                        })
                    }
                    value={dataFeild.statement}
                />
            </Block>
            <Block>
                <h4> Passage </h4>
                <TextArea
                    onChange={(e) => {
                        setDataField((prev) => {
                            return { ...prev, passage: e.target.value };
                        });
                    }}
                    value={dataFeild.passage}
                    width="100%"
                />
            </Block>
            <Block>
                <h4> Highlight correct answer: </h4>
                <CorrectAnswer
                    onMouseUp={highlighEvent}
                    dangerouslySetInnerHTML={{ __html: dataFeild.correctAnswer }}
                />
            </Block>
            <StyledContainerMiniMiniBoss>
                <ButtonUi onClick={() => navigate(-1)} variant="outlined">
                    GO BACK
                </ButtonUi>
                <ButtonUi
                    onClick={() => saveData(isUpdatePage ? "update" : "save")}
                    variant="contained"
                    color="success">
                    SAVE
                </ButtonUi>
            </StyledContainerMiniMiniBoss>
        </Main>
    );
}

const Main = styled.div``;
const Block = styled.div`
    margin-top: 24px;
    h4 {
        font-weight: 500;
        font-size: 16px;
        color: #4c4859;
        margin-bottom: 12px;
    }
`;

const CorrectAnswer = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 144%;
    letter-spacing: 0.03em;
    color: #4c4859;

    ::selection,
    span {
        text-decoration: underline;
        text-decoration-color: #3a10e5;
        color: #3a10e5;
    }
`;

const StyledInput = styled.input`
    width: 820px;
    height: 46px;
    padding: 14px 0 14px 16px;
    border: 1.53px solid #d5d0d0;
    border-radius: 8px;
    font-size: 16px;
    outline: none;
    border: 1px solid #d4d0d0;

    :hover {
        border: 1px solid #3a10e5;
    }
    :focus {
        border: 2px solid #3a10e5;
    }
`;

const StyledContainerMiniMiniBoss = styled.div`
    display: flex;
    justify-content: end;
    gap: 16px;
    padding-top: 32px;
`;
