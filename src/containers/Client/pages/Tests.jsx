import { questionType } from "constants/questionType";

import React, { useEffect, useState } from "react";

import ClientContainerTest from "components/UI/ClientContainerTest";
import Loader from "components/UI/Loader";
import Progress from "components/UI/Progress";
import UICard from "components/UI/UICard";
import ClientTestsLayout from "layout/ClientTestsLayout";

import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import { getQuestionForClientById } from "store/slices/clientSlice";

import styled from "styled-components";

import ClientBestTitle from "../test/ClientBestTitle";
import ClientDescribe from "../test/ClientDescribe";
import ClientHighlight from "../test/ClientHighlight";
import ClientListenWords from "../test/ClientListenWords";
import ClientMainIdea from "../test/ClientMainIdea";
import ClientRecordSaying from "../test/ClientRecordSaying";
import ClientRespond from "../test/ClientRespond";
import ClientSelectWords from "../test/ClientSelectWords";
import ClientTypeHear from "../test/ClientTypeHear";
import CompleteTest from "../test/CompleteTest";

export default function Tests() {
    const [count, setCountPage] = useState(0);
    const dispatch = useDispatch();
    const { id } = useParams();
    const { questionResponses } = useSelector((state) => state.testType.questionById);

    const renderTestContentByType = () => {
        if (questionResponses) {
            console.log(count, questionResponses.length - 1);
            if (count > questionResponses.length - 1) return <CompleteTest />;
            switch (questionResponses[count].questionType) {
                case questionType.SELECT_WORDS:
                    return <ClientSelectWords />;
                case questionType.LISTEN_WORDS:
                    return <ClientListenWords />;
                case questionType.TYPE_HEAR:
                    return <ClientTypeHear />;
                case questionType.DESCRIBE_IMAGE:
                    return <ClientDescribe />;
                case questionType.TYPE_RECORD:
                    return <ClientRecordSaying />;
                case questionType.RESPOND:
                    return <ClientRespond />;
                case questionType.HIGLIGHT_ANSWER:
                    return <ClientHighlight />;
                case questionType.SELECT_IDEA:
                    return <ClientMainIdea />;
                case questionType.BEST_TITLE:
                    return <ClientBestTitle />;

                default:
                    return <h1>Not Found</h1>;
            }
        }
        return <h1>Loading...</h1>;
    };

    useEffect(() => {
        dispatch(getQuestionForClientById(id));
    }, []);

    if (questionResponses?.length > 0) {
        return (
            <ClientTestsLayout
                questionResponses={questionResponses}
                setcountpage={setCountPage}
                count={count}>
                {React.cloneElement(renderTestContentByType(), {
                    question: questionResponses[count],
                    count,
                })}
            </ClientTestsLayout>
        );
    }
    return <Loader />;
}

const Wrapper = styled.div`
    padding-top: 50px;

    h2 {
        text-align: center;
        margin-bottom: 50px;
    }

    > div {
        margin: 0 auto;
    }
`;
