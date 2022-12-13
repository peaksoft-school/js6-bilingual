import React, { useState } from "react";

import TextArea from "components/UI/TextArea";

import styled from "styled-components";

export default function ClientRespond({ question }) {
    const [state, setState] = useState(30);
    const [value, setValue] = useState("");
    const abu = value.split();
    console.log(abu);
    return (
        <StyledContainerRespond>
            <StyledTextTitle>{question.title}</StyledTextTitle>
            <StyledContaiter>
                <StyledTextStatement>{question.statement}</StyledTextStatement>
                <TextArea
                    width="382px"
                    rows={7}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Your response"
                />
            </StyledContaiter>
            <span>word: {state}</span>
        </StyledContainerRespond>
    );
}

const StyledContainerRespond = styled.div`
    text-align: center;
    span {
        :nth-child(3) {
            margin-left: 110px;
        }
    }
`;
const StyledTextTitle = styled.div`
    font-size: 28px;
    color: #4c4859;
`;
const StyledContaiter = styled.div`
    margin-top: 50px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
`;
const StyledTextStatement = styled.div`
    width: 329px;
    text-align: start;
    font-size: 18px;
    color: #4c4859;
`;
