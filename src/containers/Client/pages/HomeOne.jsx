import React from "react";

import { ButtonUi } from "components/UI";

import ClientContainer from "components/UI/ClientContainer";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import ListBook from "../../../assets/images/BookList.svg";

function HomeOne() {
    const navigate = useNavigate();
    const TryTestClick = () => {
        navigate("Twohome");
    };
    return (
        <ClientContainer>
            <StyledContainerHomeOne>
                <img src={ListBook} alt="" />
                <div>
                    <span>15 minutes</span>
                    <h4>English advanced test </h4>
                    <span>Train as much as you like.</span>
                </div>
                <ButtonUi variant="outlined" onClick={TryTestClick}>
                    TRY TEST
                </ButtonUi>
            </StyledContainerHomeOne>
        </ClientContainer>
    );
}

const StyledContainerHomeOne = styled.div`
    width: 862px;
    height: 250px;
    border-radius: 10px;
    box-shadow: 0px 4px 39px -5px rgba(196, 196, 196, 0.6);
    background-color: white;
    display: flex;
    align-items: center;
    img {
        width: 90px;
        height: 80px;
        margin-left: 38px;
    }
    div {
        width: 248px;
        height: 104px;
        margin-left: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        span {
            :nth-child(1) {
                width: 82px;
                height: 18px;
                color: #3a10e5;
            }
            :nth-child(2) {
                width: 178px;
                height: 18px;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 18px;
                display: flex;
                align-items: center;
                text-transform: capitalize;

                color: #4c4859;
            }
        }
        h1 {
            width: 246px;
            height: 29px;
            font-style: normal;
            font-weight: 400;
            font-size: 26px;
            text-transform: capitalize;
            color: #4c4859;
        }
    }
    button {
        margin-left: 257px;
        margin-top: 95px;
    }
`;
export default HomeOne;
