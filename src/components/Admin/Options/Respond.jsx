import React from "react";

import { ButtonUi } from "components/UI";
import { QuestionContext } from "containers/Admin/pages/CreateQuestion";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { formatToMinute } from "services/format";
import { sendingQuestion, updateQuestionWithId } from "store/slices/questionSlice";
import styled from "styled-components";

function Respond({ data }) {
    const [dataField, setDataField] = React.useState({});
    const { mainQuestion, typeQuestion, isUpdatePage, setMainQuestion } =
        React.useContext(QuestionContext);

    const { id } = useParams();

    const dispatch = useDispatch();

    const saveData = async (req) => {
        const hour = data.duration.split(":")[0];
        const min = data.duration.split(":")[1];
        const duration = formatToMinute(hour, min);

        const dataQuestion = {
            testId: +id,
            title: data.title,
            contentRequest: {
                contentType: "AUDIO",
                content: "string",
            },
            duration,
            questionType: typeQuestion.value || typeQuestion,
            statement: dataField.statement,
            numberOfReplays: +dataField.numberOfReplays,
            passage: "string",
            minNumberOfWords: 10,
            correctAnswer: "string",
            options: [],
        };
        console.log(dataQuestion);
        if (req === "save") {
            setMainQuestion(dataQuestion);
            dispatch(sendingQuestion(dataQuestion));
        } else if (req === "update") {
            // console.log("update");
            dispatch(updateQuestionWithId((data = { id, dataInfo: dataQuestion })));
        }
    };
    if (isUpdatePage && mainQuestion) {
        React.useEffect(() => {
            setDataField({
                statement: mainQuestion.statement,
                numberOfReplays: mainQuestion.numberOfReplays,
            });
        }, []);
    }
    return (
        <StyledContainerRespond>
            <StyledContainer>
                <StyledText>Question statement</StyledText>
                <StyledInput
                    onChange={(e) =>
                        setDataField((prev) => {
                            return {
                                ...prev,
                                statement: e.target.value,
                            };
                        })
                    }
                />
                <NumOfReplace>
                    <h3>Number off Replays</h3>
                    <input
                        type="number"
                        value={dataField.numberOfReplays}
                        onChange={(e) =>
                            setDataField((prev) => {
                                return {
                                    ...prev,
                                    numberOfReplays: e.target.value,
                                };
                            })
                        }
                    />
                </NumOfReplace>
            </StyledContainer>
            <StyledContainerMiniMiniBoss>
                <ButtonUi variant="outlined">GO BACK</ButtonUi>
                <ButtonUi
                    onClick={() => saveData(isUpdatePage ? "update" : "save")}
                    variant="contained"
                    color="success">
                    SAVE
                </ButtonUi>
            </StyledContainerMiniMiniBoss>
        </StyledContainerRespond>
    );
}
const StyledContainerRespond = styled.div``;
const StyledContainer = styled.div`
    width: 820px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 24px;
`;
const NumOfReplace = styled.div`
    max-width: 80px;
    margin-top: 27px;
    h3 {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 12px;
    }
    input {
        width: 49px;
        height: 42px;
        border: 1.53px solid #d4d0d0;
        border-radius: 8px;
        outline: none;
        font-size: 16px;
        text-align: center;
    }
`;
const StyledText = styled.span`
    margin-bottom: 12px;
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
export default Respond;
