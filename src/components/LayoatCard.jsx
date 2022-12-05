import { questionTypeList } from "constants/questionType";

import React, { useState } from "react";

import { QuestionContext } from "containers/Admin/pages/CreateQuestion";

import { convertHMS } from "services/format";
import styled from "styled-components";

import DataInput from "./UI/DataInput";

import DropDown from "./UI/DropDownUi";

import Input from "./UI/Input";

import Loader from "./UI/Loader";
import UICard from "./UI/UICard";

function ListenSelectTest({ children }) {
    const { mainQuestion, isUpdatePage } = React.useContext(QuestionContext);

    if (!mainQuestion && isUpdatePage) {
        return <Loader />;
    }

    const [state, setState] = useState(questionTypeList[0]);
    const [data, setData] = useState({
        title: mainQuestion ? mainQuestion.title : "",
        duration: mainQuestion ? convertHMS(mainQuestion.duration) : 0,
    });

    return (
        <StyledContainerBoss>
            <UICard cardWidth="100%" cardBorderRadius="20px">
                <StyledContainerMiniBoss>
                    <StyledContainerOne>
                        <StyledContainerOneOne>
                            <StyledText>Title</StyledText>
                            <Input
                                colortext="black"
                                forInput={{ defaultValue: data.title }}
                                sx={{ width: "697px" }}
                                handleChange={(el) =>
                                    setData((prev) => {
                                        return {
                                            ...prev,
                                            title: el.target.value,
                                        };
                                    })
                                }
                            />
                        </StyledContainerOneOne>
                        <StyledContainerTwo>
                            <DataInput
                                defaultValue={data.duration}
                                onChange={(el) =>
                                    setData((prev) => {
                                        return {
                                            ...prev,
                                            duration: el.target.value,
                                        };
                                    })
                                }
                            />
                        </StyledContainerTwo>
                    </StyledContainerOne>
                    <StyledContainerThree>
                        <StyledContainerThreeOne>
                            <StyledText>Type</StyledText>
                        </StyledContainerThreeOne>
                        <DropDown
                            stylecss={{ width: "820px" }}
                            items={isUpdatePage ? [mainQuestion.questionType] : questionTypeList}
                            setDropState={setState}
                            dropState={state}
                        />
                    </StyledContainerThree>
                    <div>{React.cloneElement(children, { data })}</div>
                </StyledContainerMiniBoss>
            </UICard>
        </StyledContainerBoss>
    );
}

const StyledContainerBoss = styled.div`
    width: 980px;
    margin: auto;
`;
const StyledContainerMiniBoss = styled.div`
    padding-left: 40px;
`;

const StyledContainerOne = styled.div`
    width: 800px;
    height: 94px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const StyledContainerOneOne = styled.div`
    width: 697px;
    height: 86px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const StyledContainerTwo = styled.div`
    width: 80px;
    height: 86px;
    border-radius
`;
const StyledContainerThree = styled.div`
    width: 820px;
    margin-top: 24px;
    margin-bottom: 24px;
`;
const StyledContainerThreeOne = styled.div`
    width: 33px;
    height: 16px;
    margin-bottom: 12px;
`;
const StyledText = styled.span`
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    font-family: "DINNextRoundedLTW04-Medium";
    line-height: 18px;
`;
export default ListenSelectTest;
