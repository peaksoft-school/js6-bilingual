import React from "react";

import TextArea from "components/UI/TextArea";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addAnswer } from "store/slices/clientSlice";
import styled from "styled-components";
import { Styles } from "utils/constants/theme";

export default function ClientHighlight({ question }) {
    const [value, setValue] = React.useState("");
    const dispatch = useDispatch();
    const { id } = useParams();
    React.useEffect(() => {
        dispatch(
            addAnswer({
                testId: +id,
                options: {
                    questionId: question.id,
                    optionAnswerId: [],
                    answer: value,
                    numberOfPlays: 0,
                },
            })
        );
    }, [value]);
    React.useEffect(() => {
        setValue("");
    }, [question.id]);
    const handleUp = () => {
        const highlightText = window.getSelection().toString();
        setValue(highlightText);
    };

    return (
        <Main>
            <Box>
                <Row>
                    <Left>
                        <h3>Passage</h3>
                        <div onMouseUp={handleUp}>{question.passage}</div>
                    </Left>
                    <Right>
                        <h3>click and drad text to highlight the answer to the question below</h3>
                        <h5>{question.statement}</h5>
                        <Area>
                            <TextArea
                                value={value}
                                placeholder="Highlight text in the passage to set an answer"
                                width="100%"
                                rows="1"
                                disabled={!value}
                            />
                        </Area>
                    </Right>
                </Row>
            </Box>
        </Main>
    );
}

const Main = styled.div``;
const Box = styled.div``;
const Area = styled.div`
    background: ${Styles.colors.Secondary.ScdF7};
    border-radius: 8px;
    overflow: hidden;
`;
const Row = styled.div`
    display: flex;
    gap: 40px;
`;
const Left = styled.div`
    max-width: 555px;
    width: 100%;
    border: 1px solid ${Styles.colors.Secondary.ScdD4};
    border-radius: 8px;

    h3 {
        padding: 16px;
        border-bottom: 1px solid ${Styles.colors.Secondary.ScdD4};
    }
    & > div {
        padding: 16px;
        color: ${Styles.colors.Primary.Pmr4C};
        line-height: 140%;
        max-height: 550px;
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 15px;
            background: ${Styles.colors.Secondary.ScdF0f0};
            padding: 7px;
            &-track {
                box-shadow: inset 1px 1px 5px #999;
            }

            &-button {
                :single-button {
                    display: block;
                    border-style: solid;
                    height: 13px;
                    width: 16px;
                    :vertical:increment {
                        border-width: 8px 8px 0 8px;
                        border-color: #828282 transparent transparent transparent;
                        :hover {
                            border-color: #444 transparent transparent transparent;
                        }
                    }
                    :decrement {
                        border-width: 0 8px 8px 8px;
                        border-color: transparent transparent #828282 transparent;
                        :hover {
                            border-color: transparent transparent #444 transparent;
                        }
                    }
                }
            }

            &-thumb {
                background: ${Styles.colors.Secondary.ScdC4};
                border-radius: 8px;
                width: 8px;
            }
        }

        &::selection {
            background: ${Styles.colors.Secondary.ScdViolet};
        }
    }
`;
const Right = styled.div`
    h3 {
        font-weight: 400;
        font-size: ${Styles.FontSizes["26"]}px;
        line-height: 29px;
        color: ${Styles.colors.Primary.Pmr4C};
    }
    h5 {
        font-size: ${Styles.FontSizes["18"]}px;
        line-height: 124%;
        color: ${Styles.colors.Primary.Pmr4C};
        font-weight: 400;
        margin-top: 26px;
        margin-bottom: 28px;
    }

    textarea {
        max-height: 400px;
        overflow-y: auto !important;
        &::-webkit-scrollbar {
            width: 15px;
            background: ${Styles.colors.Secondary.ScdF0f0};
            &-track {
                box-shadow: inset 1px 1px 5px #999;
            }

            &-button {
                :single-button {
                    display: block;
                    border-style: solid;
                    height: 13px;
                    width: 16px;

                    :vertical:increment {
                        border-width: 8px 8px 0 8px;
                        border-color: #828282 transparent transparent transparent;
                        :hover {
                            border-color: #444 transparent transparent transparent;
                        }
                    }
                    :decrement {
                        border-width: 0 8px 8px 8px;
                        border-color: transparent transparent #828282 transparent;
                        :hover {
                            border-color: transparent transparent #444 transparent;
                        }
                    }
                }
            }

            &-thumb {
                background: ${Styles.colors.Secondary.ScdC4};
                border-radius: 8px;
                width: 8px;
            }
        }
        ::placeholder {
            color: ${Styles.colors.Primary.PmrWhite} !important;
        }
    }
`;
