import React from "react";

import Container from "components/CustomUi/Container";

import { ButtonUi } from "components/UI";
import styled from "styled-components";

export default function CheckLayout({ children }) {
    const data = {};
    return (
        <Container>
            <StyledMain>
                <Box>
                    <AboutUser>
                        <BlText>
                            <span>User: </span>
                            <span>Askarov Marat</span>
                        </BlText>
                        <BlText>
                            <span>Test: </span>
                            <span>Test number 1</span>
                        </BlText>
                    </AboutUser>
                    <AboutTest>
                        <div>
                            <h3>Test Question</h3>
                            <BoxItem>
                                <BlText>
                                    <span>Question Title: </span>
                                    <span>Select real English words </span>
                                </BlText>
                                <BlText>
                                    <span>Duration (in minutes): </span>
                                    <span>00:30 </span>
                                </BlText>
                                <BlText>
                                    <span>Question Type: </span>
                                    <span>Select real English words </span>
                                </BlText>
                            </BoxItem>
                        </div>
                        <BoxScore>
                            <h3>Evaluation</h3>
                            <Score>
                                <span>Score: </span>
                            </Score>
                            <input type="number" />
                        </BoxScore>
                    </AboutTest>
                    <Wrapper>{React.cloneElement(children, { data })}</Wrapper>
                    <Actions>
                        <ButtonUi variant="outlined">GO BACK</ButtonUi>
                        <ButtonUi variant="contained" color="success">
                            SAVE
                        </ButtonUi>
                    </Actions>
                </Box>
            </StyledMain>
        </Container>
    );
}
const Actions = styled.div`
    display: flex;
    gap: 16px;
    justify-content: flex-end;
`;
const BoxScore = styled.div`
    input {
        height: 46px;
        width: 94px;
        left: 4px;
        top: 20px;
        border-radius: 8px;
        margin-top: 10px;
        border: 1.8px solid #d4d0d0;
        padding: 14px 16px 14px 16px;
        :focus {
            outline: none;
        }
    }
`;

const Wrapper = styled.div`
    margin: 40px 0 32px 0;
`;

const Score = styled.div`
    font-size: 18px;

    & span:first-child {
        font-weight: 500;
        line-height: 21px;
        color: #3752b4;
    }
    & span:last-child {
        color: green;
        font-weight: bold;
    }
`;
const StyledMain = styled.div`
    background: #fff;
    padding: 50px 80px;
    border-radius: 20px;
    box-shadow: 0px 4px 39px rgba(196, 196, 196, 0.6);
    margin-top: 65px;
`;
const BlText = styled.span`
    display: block;
    line-height: 21px;
    margin-top: 6px;
    span:nth-child(1) {
        color: #3752b4;
    }
    span:nth-child(2) {
        color: #4c4859;
    }
`;
const Box = styled.div``;
const AboutUser = styled.div`
    font-size: 18px;
`;
const AboutTest = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
`;
const BoxItem = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
`;
