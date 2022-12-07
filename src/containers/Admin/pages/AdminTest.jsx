import React, { useEffect } from "react";

import { ButtonUi } from "components/UI";
import IconButtonStyled from "components/UI/IconButtonStyled";
import Loader from "components/UI/Loader";
import SwitcherComp from "components/UI/Switcher";
import UICard from "components/UI/UICard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTest, getTests, isTestActive } from "store/slices/adminTestActions";
import styled from "styled-components";

function AdminTest() {
    const dispatch = useDispatch();
    const tests = useSelector((state) => {
        return state.test.tests;
    });

    useEffect(() => {
        dispatch(getTests());
    }, []);

    const navigate = useNavigate();

    const goToNexPage = () => {
        navigate("/admin/create-test");
    };

    const updateTestsHandler = (id) => {
        navigate(`/admin/update-test/${id}`);
    };

    const isActiveTest = (id) => {
        dispatch(isTestActive(id));
    };

    const deleteHandler = (id) => {
        dispatch(deleteTest(id));
    };
    if (!tests.length) {
        return <Loader />;
    }
    return (
        <StyledCardDiv>
            <UICard
                marginBox="68px 190px"
                cardWidth="100%"
                cardBorderRadius="20px"
                cardBoxShadow="0px 4px 39px rgba(196, 196, 196, 0.6)">
                <StyledBtnDiv>
                    <ButtonUi variant="contained" onClick={goToNexPage}>
                        + ADD NEW TEST
                    </ButtonUi>
                </StyledBtnDiv>
                {tests?.map((item) => (
                    <StyledContainerDiv key={item.id}>
                        <UICard
                            cardBorderRadius="8px"
                            cardBoxShadow="0px -4px 10px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.06)"
                            cardWidth="975px"
                            cardHeight="66px">
                            <StyledItemsDiv>
                                <h6>{item.title}</h6>
                                <StyledIconsBtn>
                                    <SwitcherComp onChange={() => isActiveTest(item.id)} />
                                    <IconButtonStyled
                                        handleClick={() => updateTestsHandler(item.id)}
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
                                        handleClick={() => deleteHandler(item.id)}
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
                            </StyledItemsDiv>
                        </UICard>
                    </StyledContainerDiv>
                ))}
            </UICard>
        </StyledCardDiv>
    );
}

export default AdminTest;

const StyledCardDiv = styled.div`
    width: 1060px;
    margin: 0 auto;
`;

const StyledBtnDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    margin-bottom: 25px;
`;

const StyledContainerDiv = styled.div`
    margin-bottom: 16px;
`;

const StyledItemsDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledIconsBtn = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
