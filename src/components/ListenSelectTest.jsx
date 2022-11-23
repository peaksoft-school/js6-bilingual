import React, { useState } from "react";

import { baseAxios } from "api/axios-config";

import styled from "styled-components";

import DataInput from "./UI/DataInput";

import DropDown from "./UI/DropDownUi";

import Input from "./UI/Input";

import UICard from "./UI/UICard";

const items = [
    { text: "Describe image", value: "value1" },
    { text: "Select real English words", value: "value2" },
    { text: "Listen and English select word", value: "value3" },
    { text: "Type what you hear", value: "value4" },
    { text: "Type Record saying statement you hear", value: "value5" },
    { text: "Respond in at least N words", value: "value6" },
];

function ListenSelectTest() {
    const [state, setState] = useState(items[0]);

    async function getData() {
        const res = await baseAxios("");
        const { data } = await res.json();
        console.log(data);
    }

    React.useEffect(() => {
        getData();
    }, []);

    return (
        <UICard cardWidth="980px" cardBorderRadius="20px">
            <StyledContainerOne>
                <StyledContainerOneOne>
                    <StyledText>Title</StyledText>
                    <Input colortext="black" sx={{ width: "697px" }} />
                </StyledContainerOneOne>
                <StyledContainerTwo>
                    <DataInput />
                </StyledContainerTwo>
            </StyledContainerOne>
            <StyledContainerThree>
                <StyledContainerThreeOne>
                    <StyledText>Type</StyledText>
                </StyledContainerThreeOne>
                <DropDown
                    stylecss={{ width: "820px" }}
                    items={items}
                    setDropState={setState}
                    dropState={state}
                />
            </StyledContainerThree>
        </UICard>
    );
}

const StyledContainerOne = styled.div`
    width: 798px;
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
