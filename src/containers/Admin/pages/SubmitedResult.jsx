import React from "react";

import { deleteViewResults, getViewResults } from "api/view-results";

import IconButtonStyled from "components/UI/IconButtonStyled";
import Loader from "components/UI/Loader";

import { useNavigate } from "react-router-dom";

import { getDate } from "services/format";

import styled from "styled-components";

import CheckIcon from "../../../assets/icons/check-square.svg";

import DeleteIcon from "../../../assets/icons/Delete.svg";

import EyeIcon from "../../../assets/icons/eye.svg";

import BookBilingual from "../../../assets/images/bookBilingual.png";

function SubmitedResult() {
    const [data, setData] = React.useState([]);

    const navigate = useNavigate();

    function GoCheck(idx) {
        navigate(`/admin/check/${idx}`);
    }
    const getData = () => {
        getViewResults().then((res) => setData(res));
    };
    async function deleteCard(Id) {
        await deleteViewResults(Id);
        getData();
    }
    React.useEffect(() => {
        getData();
    }, []);
    return (
        <StyledContainerMain>
            {data.length === 0 ? (
                <Loader />
            ) : (
                <StyledContainerMyResult>
                    <StyledTable>
                        <StyledHeading>
                            <span>#</span>
                            <span>User Name</span>
                            <span>Date of Submition</span>
                            <span>Test name</span>
                            <span>Status</span>
                            <span>Score</span>
                        </StyledHeading>
                        {data.length === 0 ? (
                            <StyledContainerNull>
                                <h1>The list is empty !</h1>
                                <img src={BookBilingual} alt="The list is empty !" />
                            </StyledContainerNull>
                        ) : (
                            data.map((item, index) => {
                                return (
                                    <StyledAnswer key={item.id}>
                                        <span>{index + 1}</span>
                                        <span>{item.userFullName}</span>
                                        <span>
                                            {` ${getDate(item.dateOfSubmission)[0]} ${
                                                getDate(item.dateOfSubmission)[1]
                                            }`}
                                        </span>
                                        <span>{item.testTitle}</span>
                                        <span
                                            style={{
                                                color:
                                                    item.status === "EVALUATED"
                                                        ? "#2AB930"
                                                        : "#F61414",
                                            }}>
                                            {item.status}
                                        </span>
                                        <span
                                            style={{
                                                color:
                                                    item.status === "EVALUATED"
                                                        ? "#2AB930"
                                                        : "#F61414",
                                            }}>
                                            {item.finalScore}
                                        </span>
                                        <span onClick={() => GoCheck(item.id)}>
                                            <IconButtonStyled
                                                Icon={
                                                    item.status === "EVALUATED"
                                                        ? EyeIcon
                                                        : CheckIcon
                                                }
                                            />
                                        </span>
                                        <span onClick={() => deleteCard(item.id)}>
                                            <IconButtonStyled Icon={DeleteIcon} />
                                        </span>
                                    </StyledAnswer>
                                );
                            })
                        )}
                    </StyledTable>
                </StyledContainerMyResult>
            )}
        </StyledContainerMain>
    );
}
const StyledContainerMain = styled.div`
    width: 1060px;
    margin: 0 auto;
`;
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
            margin-left: 20px;
        }
        &:nth-child(2) {
            width: 78px;
            height: 18px;
            margin-left: 32px;
        }
        &:nth-child(3) {
            width: 125px;
            height: 17px;
            margin-left: 106px;
        }
        &:nth-child(4) {
            width: 74px;
            height: 18px;
            margin-left: 60px;
        }
        &:nth-child(5) {
            width: 45px;
            height: 18px;
            margin-left: 100px;
        }
        &:nth-child(6) {
            width: 46px;
            height: 19px;
            margin-left: 112px;
        }
    }
`;
const StyledAnswer = styled.div`
    width: 933px;
    padding: 24px 0 24px 0;
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
            width: 105px;
            margin-left: 32px;
        }
        &:nth-child(3) {
            width: 77px;
            margin-left: 85px;
        }
        &:nth-child(4) {
            width: 99px;
            margin-left: 108px;
        }
        &:nth-child(5) {
            width: 95px;
            margin-left: 80px;
        }
        &:nth-child(6) {
            width: 9px;
            margin-left: 62px;
        }
        &:nth-child(7) {
            width: 20px;
            margin-left: 84px;
            cursor: pointer;
        }
        &:nth-child(8) {
            width: 20px;
            margin-left: 20px;
            cursor: pointer;
        }
    }
`;
export default SubmitedResult;
