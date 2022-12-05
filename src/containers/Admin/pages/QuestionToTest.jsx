import React, { useEffect } from "react";

import { Tooltip } from "@mui/material";
import { ButtonUi } from "components/UI";
import IconButtonStyled from "components/UI/IconButtonStyled";
import SwitcherComp from "components/UI/Switcher";
import UICard from "components/UI/UICard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { formatterQuestionType } from "services/format";
import { getTestById } from "store/slices/adminTestActions";
import { deleteQuestion, isActiveQuestion } from "store/slices/questionSlice";
import styled from "styled-components";

import { ADMIN_CONST_URL } from "../../../routes/constants";

function QuestionToTest() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { singleTest } = useSelector((state) => state.test);
    const questionList = singleTest[0]?.questionResponses;

    useEffect(() => {
        dispatch(getTestById(id));
    }, []);

    const changeActiveQuestion = (isActId) => {
        dispatch(isActiveQuestion(isActId));
    };

    const deleteQuestionById = (deleteId) => {
        dispatch(deleteQuestion({ data: { questionId: deleteId, testId: id } }));
    };

    const goBacktoAdminTests = () => {
        navigate(-1);
    };

    return (
        <StyledMainDiv>
            <UICard
                marginBox="68px 190px 227px 190px"
                cardWidth="100%"
                cardBorderRadius="20px"
                cardBoxShadow="0px 4px 39px rgba(196, 196, 196, 0.6)">
                {singleTest.map((item) => (
                    <StyledAboutTest key={item.id}>
                        <StyledNameTest>
                            Title:
                            <StyledSpan>{item.title}</StyledSpan>
                        </StyledNameTest>
                        <StyledNameTest>
                            Short Description: <StyledSpan>{item.shortDescription}</StyledSpan>
                        </StyledNameTest>
                        <StyledNameTest>
                            Duration: <StyledSpan>{item.duration}</StyledSpan>
                        </StyledNameTest>
                    </StyledAboutTest>
                ))}
                <StyledBtnDiv>
                    <ButtonUi
                        variant="contained"
                        onClick={() =>
                            navigate(`/admin/test-${id}/${ADMIN_CONST_URL.CREATE_QUESTION}`)
                        }>
                        + ADD MORE QUESTIONS
                    </ButtonUi>
                </StyledBtnDiv>
                <StyledLine />
                <StyledAboutTests>
                    <p>#</p>
                    <p>Name</p>
                    <p>Duration</p>
                    <p>Question Type</p>
                </StyledAboutTests>
                {questionList?.length > 0 &&
                    questionList.map((item, index) => (
                        <CardUIBox>
                            <UICard
                                key={item.id}
                                cardBorderRadius="8px"
                                cardBoxShadow="0px -4px 10px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.06)"
                                cardWidth="100%"
                                cardHeight="66px">
                                <StyledContainerCard>
                                    <StyledAboutQuestion>
                                        <p>{index + 1}</p>
                                        <Tooltip
                                            componentsProps={{
                                                tooltip: {
                                                    sx: {
                                                        maxWidth: "500px",
                                                        fontSize: "14px",
                                                        padding: "8px 15px",
                                                    },
                                                },
                                            }}
                                            title={item.title}
                                            placement="top">
                                            <p>{item.title}</p>
                                        </Tooltip>
                                        <p>{item.duration}</p>
                                        <p style={{ textTransform: "capitalize" }}>
                                            {formatterQuestionType(item.questionType)}
                                        </p>
                                    </StyledAboutQuestion>
                                    <StyledIconsBtn>
                                        <SwitcherComp
                                            onChange={() => changeActiveQuestion(item.id)}
                                            value={item.isActive}
                                        />
                                        <IconButtonStyled
                                            handleClick={() =>
                                                navigate(`/admin/update-question/${item.id}`)
                                            }
                                            Icon={`
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_862_12516)">
                                            <path
                                                d="M9.16699 3.3335H3.33366C2.89163 3.3335 2.46771 3.50909 2.15515 3.82165C1.84259 4.13421 1.66699 4.55814 1.66699 5.00016V16.6668C1.66699 17.1089 1.84259 17.5328 2.15515 17.8453C2.46771 18.1579 2.89163 18.3335 3.33366 18.3335H15.0003C15.4424 18.3335 15.8663 18.1579 16.1788 17.8453C16.4914 17.5328 16.667 17.1089 16.667 16.6668V10.8335"
                                                stroke="#9A9A9A"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M15.417 2.0832C15.7485 1.75168 16.1982 1.56543 16.667 1.56543C17.1358 1.56543 17.5855 1.75168 17.917 2.0832C18.2485 2.41472 18.4348 2.86436 18.4348 3.3332C18.4348 3.80204 18.2485 4.25168 17.917 4.5832L10.0003 12.4999L6.66699 13.3332L7.50033 9.99986L15.417 2.0832Z"
                                                stroke="#9A9A9A"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_862_12516">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>`}
                                        />
                                        <IconButtonStyled
                                            handleClick={() => deleteQuestionById(item.id)}
                                            Icon={`
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.5 5H4.16667H17.5"
                                            stroke="#9A9A9A"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M6.66699 4.99984V3.33317C6.66699 2.89114 6.84259 2.46722 7.15515 2.15466C7.46771 1.8421 7.89163 1.6665 8.33366 1.6665H11.667C12.109 1.6665 12.5329 1.8421 12.8455 2.15466C13.1581 2.46722 13.3337 2.89114 13.3337 3.33317V4.99984M15.8337 4.99984V16.6665C15.8337 17.1085 15.6581 17.5325 15.3455 17.845C15.0329 18.1576 14.609 18.3332 14.167 18.3332H5.83366C5.39163 18.3332 4.96771 18.1576 4.65515 17.845C4.34259 17.5325 4.16699 17.1085 4.16699 16.6665V4.99984H15.8337Z"
                                            stroke="#9A9A9A"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    `}
                                        />
                                    </StyledIconsBtn>
                                </StyledContainerCard>
                            </UICard>
                        </CardUIBox>
                    ))}

                <StyledBtnGoBack>
                    <ButtonUi variant="outlined" onClick={goBacktoAdminTests}>
                        GO BACK
                    </ButtonUi>
                </StyledBtnGoBack>
            </UICard>
        </StyledMainDiv>
    );
}

export default QuestionToTest;

const StyledMainDiv = styled.div`
    width: 1060px;
    margin: 0 auto;
`;

const CardUIBox = styled.div`
    margin-top: 16px;
`;

const StyledAboutTest = styled.div`
    height: 66px;
    margin-bottom: 44px;
`;

const StyledNameTest = styled.h5`
    font-size: 16px;
    padding-top: 6px;
    color: #3752b4;
`;

const StyledSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #4c4859;
`;

const StyledBtnDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
`;

const StyledLine = styled.div`
    height: 1px;
    border: 1.53px solid #d4d0d0;
    background: #c4c4c4;
    margin: 22px 0 24px 0;
`;

const StyledAboutTests = styled.div`
    width: 670px;
    display: flex;
    align-items: center;
    margin-bottom: 14px;

    p {
        :nth-child(1) {
            margin-left: 45px;
            margin-right: 31px;
        }
        :nth-child(2) {
            margin-right: 240px;
        }
        :nth-child(3) {
            margin-right: 40px;
        }
    }
`;

const StyledContainerCard = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledAboutQuestion = styled.div`
    width: 650px;
    display: flex;
    align-items: center;
    p {
        :nth-child(1) {
            width: 46px;
        }
        :nth-child(2) {
            width: 321px;
            display: -webkit-box;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow-wrap: break-word;
            overflow: hidden;
        }
        :nth-child(3) {
            width: 114px;
        }
        :nth-child(4) {
            width: 256px;
        }
    }
`;

const StyledIconsBtn = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledBtnGoBack = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: end;
    margin-top: 32px;
`;