import React from "react";

import { ButtonUi, InputUi } from "components/UI";
import { QuestionContext } from "containers/Admin/pages/CreateQuestion";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { formatToMinute } from "services/format";
import { sendingQuestion, updateQuestionWithId } from "store/slices/questionSlice";
import styled from "styled-components";

function TypeRecord({ data }) {
    const [answer, setAnswer] = React.useState("");
    const { mainQuestion, typeQuestion, isUpdatePage, setMainQuestion } =
        React.useContext(QuestionContext);

    const { id } = useParams();

    const dispatch = useDispatch();

    const saveData = async (req) => {
        const hour = data.duration.split(":")[0];
        const min = data.duration.split(":")[1];
        const duration = formatToMinute(hour, min);

        const dataQuestion = {
            testId: id,
            title: data.title,
            contentRequest: {
                contentType: "TEXT",
                content: "string",
            },
            duration,
            statement: "string",
            questionType: typeQuestion.value || typeQuestion,
            correctAnswer: answer,
        };

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
            setAnswer(mainQuestion.correctAnswer);
        }, []);
    }
    return (
        <>
            <Main>
                <h3>Correct answer</h3>
                <InputUi value={answer} handleChange={(e) => setAnswer(e.target.value)} />
            </Main>
            <StyledContainerMiniMiniBoss>
                <ButtonUi variant="outlined">GO BACK</ButtonUi>
                <ButtonUi
                    onClick={() => saveData(isUpdatePage ? "update" : "save")}
                    variant="contained"
                    color="success">
                    SAVE
                </ButtonUi>
            </StyledContainerMiniMiniBoss>
        </>
    );
}

export default TypeRecord;
const StyledContainerMiniMiniBoss = styled.div`
    display: flex;
    justify-content: end;
    gap: 16px;
    padding-top: 32px;
`;
const Main = styled.div`
    h3 {
        margin-top: 24px;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 10px;
    }
`;
