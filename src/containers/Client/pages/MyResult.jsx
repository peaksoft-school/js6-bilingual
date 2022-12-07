import React, { useEffect } from "react";

import ClientContainer from "components/UI/ClientContainer";

import IconButtonStyled from "components/UI/IconButtonStyled";

import { useDispatch, useSelector } from "react-redux";

import { resultTestsSlice } from "store/slices/resultTestsSlice";

import styled from "styled-components";

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
                            console.log(item);
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
                                    <IconButtonStyled
                                        Icon={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 5H4.16667H17.5" stroke="#9A9A9A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66699 4.99984V3.33317C6.66699 2.89114 6.84259 2.46722 7.15515 2.15466C7.46771 1.8421 7.89163 1.6665 8.33366 1.6665H11.667C12.109 1.6665 12.5329 1.8421 12.8455 2.15466C13.1581 2.46722 13.3337 2.89114 13.3337 3.33317V4.99984M15.8337 4.99984V16.6665C15.8337 17.1085 15.6581 17.5325 15.3455 17.845C15.0329 18.1576 14.609 18.3332 14.167 18.3332H5.83366C5.39163 18.3332 4.96771 18.1576 4.65515 17.845C4.34259 17.5325 4.16699 17.1085 4.16699 16.6665V4.99984H15.8337Z" stroke="#9A9A9A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
                                    />
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
