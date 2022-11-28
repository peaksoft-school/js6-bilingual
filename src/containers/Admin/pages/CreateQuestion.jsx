import { questionType, questionTypeList, QUESTION_BODY } from "constants/questionType";

import React, { useRef } from "react";

import { getQuestionById } from "api/question-query";
import {
    SelectWord,
    DescribeImage,
    ListenWords,
    Respond,
    TypeHear,
    TypeRecord,
} from "components/Admin/Options";

import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { getQuestionWithId, sendingQuestion } from "store/slices/questionSlice";

import ListenSelectTest from "../../../components/LayoatCard";

const { DESCRIBE_IMAGE, LISTEN_WORDS, RESPOND, SELECT_WORDS, TYPE_HEAR, TYPE_RECORD } =
    questionType;

export const QuestionContext = React.createContext();

function CreateQuestion() {
    const updateQuestion = useSelector((state) => state.question.questions);
    const [typeQuestion, setTypeQuestion] = React.useState(questionTypeList[0]);
    const [mainQuestion, setMainQuestion] = React.useState(updateQuestion.length || QUESTION_BODY);
    const [Component, setComponent] = React.useState(<SelectWord />);
    const { id } = useParams();
    const dispatch = useDispatch();

    const setTypeQuestionMemo = React.useMemo(() => {
        return {
            setTypeQuestion,
            typeQuestion,
            mainQuestion,
            setMainQuestion,
        };
    });

    React.useEffect(() => {
        const pathName = window.location.pathname.split("/");
        if (pathName.includes("update-question")) {
            dispatch(getQuestionWithId(id))
                .unwrap()
                .then((res) => setMainQuestion(res));
        }
    }, []);
    React.useEffect(() => {
        if (typeQuestion.value === SELECT_WORDS) setComponent(<SelectWord />);
        if (typeQuestion.value === DESCRIBE_IMAGE) setComponent(<DescribeImage />);
        if (typeQuestion.value === LISTEN_WORDS) setComponent(<ListenWords />);
        if (typeQuestion.value === RESPOND) setComponent(<Respond />);
        if (typeQuestion.value === TYPE_HEAR) setComponent(<TypeHear />);
        if (typeQuestion.value === TYPE_RECORD) setComponent(<TypeRecord />);
    }, [typeQuestion]);
    return (
        <QuestionContext.Provider value={setTypeQuestionMemo}>
            <ListenSelectTest>{Component}</ListenSelectTest>
        </QuestionContext.Provider>
    );
}

export default CreateQuestion;
