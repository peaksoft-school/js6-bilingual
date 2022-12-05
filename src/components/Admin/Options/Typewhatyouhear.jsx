import React from "react";

import { Button } from "@mui/material";
import { baseAxios } from "api/axios-config";
import { ButtonUi } from "components/UI";
import IconButtonStyled from "components/UI/IconButtonStyled";
import Input from "components/UI/Input";
import { QuestionContext } from "containers/Admin/pages/CreateQuestion";
import { Howl } from "howler";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { formatToMinute } from "services/format";
import { sendingQuestion, updateQuestionWithId } from "store/slices/questionSlice";

import styled from "styled-components";

function Typewhatyouhear({ data }) {
    const { isUpdatePage, typeQuestion, setMainQuestion, mainQuestion } =
        React.useContext(QuestionContext);

    const { id } = useParams();

    const dispatch = useDispatch();

    const [isAudioStop, setIsAudioStop] = React.useState(true);
    const [dataField, setDataField] = React.useState({
        replaceNum: mainQuestion ? mainQuestion.numberOfReplays : 1,
        file: mainQuestion ? mainQuestion.content : null,
        corrAnswer: mainQuestion ? mainQuestion.correctAnswer : "",
    });

    const handleAudio = async (e) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        const audioLink = await baseAxios.post("static", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        setDataField((prev) => {
            return {
                ...prev,
                file: audioLink.data.link,
            };
        });
    };
    const navigate = useNavigate();

    const audioPlay = () => {
        const audio = new Howl({
            src: dataField.file,
            html5: true,
            onend: () => {
                setIsAudioStop(true);
            },
        });
        if (isAudioStop) {
            audio.play();
        }
    };

    const saveData = async (req) => {
        const min = data.duration.split(":")[0];
        const sec = data.duration.split(":")[1];
        const duration = formatToMinute(+min, +sec);

        const dataQuestion = {
            testId: id,
            title: data.title,
            duration,
            contentRequest: {
                contentType: "AUDIO",
                content: dataField.file,
            },
            questionType: typeQuestion.value,
            numberOfReplays: dataField.replaceNum,
            correctAnswer: dataField.corrAnswer,
        };

        if (req === "save") {
            setMainQuestion(dataQuestion);
            dispatch(sendingQuestion(dataQuestion));
        } else if (req === "update") {
            dispatch(
                updateQuestionWithId(
                    (data = {
                        id,
                        dataInfo: {
                            ...dataQuestion,
                            content: dataField.file,
                            willDelete: [0],
                            willUpdate: [0],
                            optionRequests: [
                                {
                                    option: "string",
                                    isTrue: true,
                                },
                            ],
                        },
                    })
                )
            );
        }
    };

    return (
        <StlyedContainer>
            <StyledTitle>Number off Replays</StyledTitle>
            <StyledAudioBox>
                <StyledNumber>
                    <input
                        value={dataField.replaceNum}
                        onChange={(e) =>
                            setDataField((prev) => {
                                return {
                                    ...prev,
                                    replaceNum: e.target.value,
                                };
                            })
                        }
                        type="number"
                    />
                </StyledNumber>
                <Button
                    sx={{
                        bgcolor: "#3A10E5",
                        "&:hover": {
                            bgcolor: "#3A10E5",
                        },
                    }}
                    variant="contained"
                    component="label">
                    Upload
                    <input hidden onChange={handleAudio} accept="audio/*" multiple type="file" />
                </Button>
                <StyledPause onClick={() => audioPlay(setIsAudioStop(false))}>
                    <IconButtonStyled
                        fontSize="27px"
                        Icon={
                            isAudioStop
                                ? `<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.5L9 8L1 14.5V1.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
                                : `<svg width="46" height="35" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="46" height="42" rx="8" fill="#3A10E5"/>
<path d="M20.625 14.5H17.375V27.5H20.625V14.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.625 14.5H25.375V27.5H28.625V14.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
                        }
                    />
                </StyledPause>
                <p>{dataField.file ? dataField.file.split("/")[3] : "Name audio file"}</p>
            </StyledAudioBox>
            <StyledAnswer>Correct answer</StyledAnswer>
            <Input
                value={dataField.corrAnswer}
                handleChange={(e) =>
                    setDataField((prev) => {
                        return {
                            ...prev,
                            corrAnswer: e.target.value,
                        };
                    })
                }
            />
            <StyledBtnBox>
                <ButtonUi onClick={() => navigate(-1)} variant="outlined">
                    GO BACK
                </ButtonUi>
                <ButtonUi
                    onClick={() => saveData(isUpdatePage ? "update" : "save")}
                    variant="contained"
                    color="success">
                    SAVE
                </ButtonUi>
            </StyledBtnBox>
        </StlyedContainer>
    );
}

export default Typewhatyouhear;

const StlyedContainer = styled.div`
    width: 100%;
    background: #ffffff;
`;
const StyledTitle = styled.h1`
    width: 80px;
    font-weight: 500;
    font-size: 16px;
    color: #4c4859;
    display: flex;
    justify-content: start;
`;
const StyledAudioBox = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 12px 0 24px 0;
`;
const StyledNumber = styled.div`
    width: 49px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border: 1.53px solid #d4d0d0;
    border-radius: 8px;

    input {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 8px;
        outline: none;
        text-align: center;
        font-size: 18px;
    }
`;
const StyledPause = styled.button`
    width: 46px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    outline: none;
    border: none;
    background: #3a10e5;
    border-radius: 8px;
    padding: 13px 24px;
    cursor: pointer;
`;
const StyledAnswer = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: #4c4859;
    margin-bottom: 12px;
`;
const StyledBtnBox = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: end;
    margin-top: 32px;
`;
