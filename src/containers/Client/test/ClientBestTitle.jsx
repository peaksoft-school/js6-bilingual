import React from "react";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addAnswer } from "store/slices/clientSlice";

export default function ClientBestTitle({ question }) {
    const dispatch = useDispatch();
    const { id } = useParams();
    React.useEffect(() => {
        dispatch(
            addAnswer({
                testId: +id,
                options: {
                    questionId: question.id,
                    optionAnswerId: [],
                    answer: "safd",
                },
            })
        );
    }, [question.id]);
    return <div>ClientBestTitle</div>;
}
