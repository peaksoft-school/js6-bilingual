// import { questionType, questionTypeList, QUESTION_BODY } from "constants/questionType";

// import React from "react";

// import { getQuestionById } from "api/question-query";
// import {
//     DescribeImage,
//     ListenWords,
//     Respond,
//     SelectWord,
//     TypeHear,
//     TypeRecord,
// } from "components/Admin/Options";
// import ListenSelectTest from "components/LayoatCard";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getQuestionWithId } from "store/slices/questionSlice";

// import { QuestionContext } from "./CreateQuestion";

// const { DESCRIBE_IMAGE, LISTEN_WORDS, RESPOND, SELECT_WORDS, TYPE_HEAR, TYPE_RECORD } =
//     questionType;

// function UpdateQuestion() {
//     const {
//         question: { questions },
//     } = useSelector((item) => item);
//     const [typeQuestion, setTypeQuestion] = React.useState(
//         questions?.questionType || questionTypeList[0]
//     );
//     const [mainQuestion, setMainQuestion] = React.useState(null);
//     const [Component, setComponent] = React.useState(<SelectWord />);
//     const { id } = useParams();
//     const dispatch = useDispatch();

//     const setTypeQuestionMemo = React.useMemo(() => {
//         return {
//             setTypeQuestion,
//             typeQuestion,
//             mainQuestion,
//             setMainQuestion,
//         };
//     });
//     React.useEffect(() => {
//         dispatch(getQuestionWithId(id));
//     }, []);

//     React.useEffect(() => {
//         if (typeQuestion.value === SELECT_WORDS) setComponent(<SelectWord />);
//         if (typeQuestion.value === DESCRIBE_IMAGE) setComponent(<DescribeImage />);
//         if (typeQuestion.value === LISTEN_WORDS) setComponent(<ListenWords />);
//         if (typeQuestion.value === RESPOND) setComponent(<Respond />);
//         if (typeQuestion.value === TYPE_HEAR) setComponent(<TypeHear />);
//         if (typeQuestion.value === TYPE_RECORD) setComponent(<TypeRecord />);
//     }, [typeQuestion]);
//     return (
//         <QuestionContext.Provider value={setTypeQuestionMemo}>
//             <ListenSelectTest>{Component}</ListenSelectTest>
//             <h2>item</h2>
//         </QuestionContext.Provider>
//     );
// }

// export default UpdateQuestion;
