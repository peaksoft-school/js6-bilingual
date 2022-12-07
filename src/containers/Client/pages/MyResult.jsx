import React, { useEffect } from "react";

import ClientContainer from "components/UI/ClientContainer";

import { useDispatch, useSelector } from "react-redux";

import { resultTestsSlice } from "store/slices/resultTestsSlice";

import styled from "styled-components";

import DeleteIcon from "../../../assets/icons/DeleteIcon.svg";

import BookBilingual from "../../../assets/images/bookBilingual.png";

function MyResult() {
    const tests = useSelector((state) => state.tests.resultTests);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resultTestsSlice());
    }, []);

    return (
        <ClientContainer width="220px">
            <StyledContainerMyResult>
                <StyledTable>
                    <StyledHeading>
                        <span>#</span>
                        <span>Date of Submition</span>
                        <span>Test name</span>
                        <span>Status</span>
                        <span>Score</span>
                    </StyledHeading>
                    {tests.length === 0 ? (
                        <StyledContainerNull>
                            <h1>The list is empty !</h1>
                            <img src={BookBilingual} alt="The list is empty !" />
                        </StyledContainerNull>
                    ) : (
                        tests.map((item) => {
                            return (
                                <StyledAnswer key={item.id}>
                                    <span>{item.id}</span>
                                    <span>{item.dateOfSubmission}</span>
                                    <span>{item.testTitle}</span>
                                    <span
                                        style={{
                                            color:
                                                item.status === "EVALUATED" ? "#2AB930" : "#F61414",
                                        }}>
                                        {item.status}
                                    </span>
                                    <span
                                        style={{
                                            color:
                                                item.status === "EVALUATED" ? "#2AB930" : "#F61414",
                                        }}>
                                        {item.finalScore}
                                    </span>
                                    <span>
                                        <img src={DeleteIcon} alt="Delete" />
                                    </span>
                                </StyledAnswer>
                            );
                        })
                    )}
                </StyledTable>
            </StyledContainerMyResult>
        </ClientContainer>
    );
}
const StyledContainerMyResult = styled.div`
    width: 1130px;
    background-color: white;
    border-radius: 20px;
    margin-bottom: 50px;
`;
const StyledContainerNull = styled.div`
    width: 850px;
    height: 250px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    h1 {
        color: #4c4859;
        font-size: 28px;
        font-weight: 400;
        text-transform: capitalize;
    }
    img {
        width: 100px;
        height: 100px;
    }
`;
const StyledTable = styled.div`
    width: 933px;
    padding: 100px 0px 100px 90px;
`;
const StyledHeading = styled.div`
    width: 850px;
    margin-bottom: 23px;
    span {
        &:nth-child(1) {
            width: 9px;
            height: 18px;
            margin-left: 15px;
        }
        &:nth-child(2) {
            width: 125px;
            height: 17px;
            margin-left: 32px;
        }
        &:nth-child(3) {
            width: 74px;
            height: 18px;
            margin-left: 97px;
        }
        &:nth-child(4) {
            width: 45px;
            height: 18px;
            margin-left: 220px;
        }
        &:nth-child(5) {
            width: 46px;
            height: 19px;
            margin-left: 144px;
        }
    }
`;
const StyledAnswer = styled.div`
    width: 943px;
    height: 66px;
    display: flex;
    align-items: center;
    box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    font-size: 15px;
    margin-top: 15px;
    span {
        &:nth-child(1) {
            width: 9px;
            height: 18px;
            margin-left: 16px;
        }
        &:nth-child(2) {
            width: 77px;
            height: 36px;
            margin-left: 32px;
        }
        &:nth-child(3) {
            width: 151px;
            height: 18px;
            margin-left: 145px;
        }
        &:nth-child(4) {
            width: 95px;
            height: 18px;
            margin-left: 143px;
        }
        &:nth-child(5) {
            width: 9px;
            height: 19px;
            margin-left: 94px;
        }
        &:nth-child(6) {
            width: 9px;
            height: 19px;
            margin-left: 130px;
        }
    }
`;
export default MyResult;
