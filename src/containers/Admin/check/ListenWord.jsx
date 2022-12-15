import React from "react";

import CheckBox from "components/UI/Checkbox";
import styled from "styled-components";

function ListenWord({
    id,
    correctAnswer,
    fullName,
    testTitle,
    link,
    minNumberOfReplays,
    minNumberOfWords,
    options,
    passage,
    statement,
    userAnswer,
    userOptionsAnswer,
}) {
    console.log(userAnswer);
    return (
        <StyledSection>
            <StyledOptions>
                {options.map((option, index) => (
                    <div key={option.id}>
                        <p>{index + 1}</p>
                        <p>{option.title}</p>
                        <CheckBox boxcolor="#2AB930" value={option.isTrue} />
                    </div>
                ))}
            </StyledOptions>
            <StyledAnswers>
                <p>users answers</p>
                {/* {userAnswer.map((answer) => { */}
                <div>
                    <div>
                        <p>listen</p>
                    </div>
                </div>
                ;{/* })} */}
            </StyledAnswers>
        </StyledSection>
    );
}

export default ListenWord;

const StyledSection = styled.section`
    width: 830px;
`;

const StyledOptions = styled.div`
    width: 100%;
    display: flex;
    gap: 18px;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 46px;
    div {
        width: 234px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1.53px solid #d4d0d0;
        border-radius: 8px;
        padding: 15px;
        background: #ffffff;
    }
`;

const StyledAnswers = styled.div`
    width: 100%;
    flex-wrap: wrap;
    p {
        font-weight: 500;
        font-size: 18px;
        color: #4c4859;
    }
    div {
        display: flex;
        align-items: center;
        gap: 18px;
        margin-top: 14px;
    }
    div div {
        width: 171px;
        padding: 14px 16px;
        border: 1.53px solid #d4d0d0;
        border-radius: 8px;
        background: #ffffff;
    }
`;
