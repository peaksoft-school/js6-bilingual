import React from "react";

import CheckBox from "components/UI/Checkbox";
import styled from "styled-components";
import { Styles } from "utils/constants/theme";

function SelectWord({ options, userOptionsAnswer }) {
    return (
        <StyledSection>
            <StyledOptions>
                {options.map((option, index) => (
                    <div key={option.id}>
                        <p>{index + 1}</p>
                        <p>{option.option}</p>
                        <CheckBox boxcolor="#2AB930" value={option.isTrue} />
                    </div>
                ))}
            </StyledOptions>
            <StyledAnswers>
                <p>User&apos;s answers</p>
                {userOptionsAnswer.map((answer) => (
                    <div key={answer.id}>
                        <div>
                            <p>{answer.option}</p>
                        </div>
                    </div>
                ))}
            </StyledAnswers>
        </StyledSection>
    );
}

export default SelectWord;

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
        border: 1.53px solid ${Styles.colors.Secondary.ScdD4};
        border-radius: 8px;
        padding: 15px;
        background: ${Styles.colors.Primary.PmrWhite};
    }
`;

const StyledAnswers = styled.div`
    width: 100%;
    flex-wrap: wrap;
    p {
        font-weight: 500;
        font-size: ${Styles.FontSizes["18"]}px;
        color: ${Styles.colors.Primary.Pmr4C};
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
        border: 1.53px solid ${Styles.colors.Secondary.ScdD4};
        border-radius: 8px;
        background: ${Styles.colors.Primary.PmrWhite};
    }
`;
