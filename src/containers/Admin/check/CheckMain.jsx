import React from "react";

import { checkAnswerById } from "api/result-tests";
import Loader from "components/UI/Loader";
import CheckLayout from "layout/CheckLayout";

import { useParams } from "react-router-dom";

import getComponent from "services/getComponent";

export const CheckMain = () => {
    const [data, setData] = React.useState(null);
    const { test } = useParams();
    const request = async () => {
        try {
            const res = await checkAnswerById(test);
            return setData(res);
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    React.useEffect(() => {
        request();
    }, []);
    console.log(data);
    return !data ? (
        <Loader />
    ) : (
        <CheckLayout data={data}>{getComponent(data.questionType)}</CheckLayout>
    );
};
