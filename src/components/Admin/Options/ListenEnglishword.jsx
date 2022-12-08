import React, { useState } from "react";

import Add from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { baseAxios } from "api/axios-config";
import { ButtonUi } from "components/UI";
import CheckBox from "components/UI/Checkbox";
import ListenWordItem from "components/UI/ListenWordItem";
import ModalAdminLayot from "components/UI/ModalAdminLayot";
import { QuestionContext } from "containers/Admin/pages/CreateQuestion";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { formatToMinute } from "services/format";
import { deleteOption } from "store/slices/option-slice";

import { sendingQuestion, updateQuestionWithId } from "store/slices/questionSlice";
import styled from "styled-components";

function ListenEnglishWord({ data }) {
    const [isOpen, setIsOpen] = useState(false);
    const [dataCard, setDataCard] = useState([]);
    const [newCard, setNewCard] = useState([]);
    const [file, setFile] = useState();
    const [checkBoxValue, setCheckBoxValue] = React.useState(false);
    const [dataFile, setDataFile] = useState({});
    const [updateWithId, setUpdateWithId] = useState([]);

    const handleClick = async () => {
        const formData = new FormData();
        formData.append("file", file);
        const audioLink = await baseAxios.post(
            "http://ec2-54-93-233-9.eu-central-1.compute.amazonaws.com/api/static",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        setDataCard((prev) => [...prev, { option: audioLink.data.link, isTrue: checkBoxValue }]);
        setNewCard((prev) => [...prev, { option: audioLink.data.link, isTrue: checkBoxValue }]);
    };

    const { id } = useParams();

    const { mainQuestion, typeQuestion, isUpdatePage, setMainQuestion } =
        React.useContext(QuestionContext);

    const dispatch = useDispatch();

    if (isUpdatePage && mainQuestion) {
        React.useEffect(() => {
            setDataCard(mainQuestion.optionResponseList);
        }, []);
    }
    const saveData = async (req) => {
        const hour = data.duration.split(":")[0];
        const min = data.duration.split(":")[1];
        const duration = formatToMinute(hour, min);
        const option = isUpdatePage ? "optionRequests" : "options";
        const dataQuestion = {
            testId: id,
            title: data.title,
            duration,
            contentRequest: {
                contentType: "AUDIO",
                content: "string",
            },
            willDelete: [0],
            willUpdate: updateWithId,
            questionType: typeQuestion.value || typeQuestion,
            [option]: isUpdatePage ? newCard : dataCard,
        };
        console.log(dataQuestion);
        if (req === "save") {
            setMainQuestion(dataQuestion);
            dispatch(sendingQuestion(dataQuestion));
        } else if (req === "update") {
            // console.log("update");
            dispatch(updateQuestionWithId((data = { id, dataInfo: dataQuestion })));
        }
    };
    const delOption = (idx) => {
        if (idx?.id) {
            dispatch(deleteOption(idx.id));
        }
        setDataCard(dataCard.filter((item) => item.option !== idx.option));
        setNewCard(newCard.filter((item) => item.option !== idx.option));
    };

    const handleUpdate = (e) => {
        if (isUpdatePage) {
            setUpdateWithId((prevState) => {
                if (!prevState.includes(e)) return [...prevState, e];
                const itemIndex = prevState.findIndex((item) => item === e);
                prevState.splice(itemIndex, 1);
                return prevState;
            });
        }
    };

    return (
        <Main>
            <ModalAdminLayot
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                onClick={handleClick}
                onChange={(e) =>
                    setDataFile((prev) => {
                        return {
                            ...prev,
                            option: e.target.value,
                        };
                    })
                }>
                <StyledContainerGlav>
                    <Button
                        variant="outlined"
                        style={{ marginTop: 25, marginBottom: 10, width: "159px", height: "46px" }}
                        component="label">
                        Upload
                        <input
                            hidden
                            accept="audio/*"
                            onChange={(e) => setFile(e.target.files[0])}
                            multiple
                            type="file"
                        />
                    </Button>
                    <span>
                        {dataFile.audio === "" ? "File name of the audio file" : dataFile.audio}
                    </span>
                </StyledContainerGlav>
                <CheckBoxMain>
                    <span>Is true option?</span>
                    <CheckBox
                        boxcolor="green"
                        value={checkBoxValue}
                        onChange={() => setCheckBoxValue(!checkBoxValue)}
                    />
                </CheckBoxMain>
            </ModalAdminLayot>
            <div style={{ textAlign: "right" }}>
                <ButtonUi
                    onClick={() => setIsOpen(true)}
                    text="ADD OPTIONS"
                    color="primary"
                    variant="contained"
                    icon={<Add />}
                />
            </div>
            <Wrapper>
                <Row>
                    {dataCard.map((item) => {
                        return (
                            <ListenWordItem
                                id={item.id}
                                key={item.id}
                                audio={item.option}
                                updateCheckbox={handleUpdate}
                                option={item.option}
                                isTrue={item.isTrue}
                                del={delOption}
                            />
                        );
                    })}
                </Row>
            </Wrapper>
            <StyledContainerMiniMiniBoss>
                <ButtonUi variant="outlined">GO BACK</ButtonUi>
                <ButtonUi
                    onClick={() => saveData(isUpdatePage ? "update" : "save")}
                    variant="contained"
                    color="success">
                    SAVE
                </ButtonUi>
            </StyledContainerMiniMiniBoss>
        </Main>
    );
}

export default ListenEnglishWord;

const Main = styled.div``;

const CheckBoxMain = styled.div`
    margin-top: 40px;
    span {
        margin-right: 10px;
    }
`;

const StyledContainerGlav = styled.div`
    width: 410px;
    height: 46px;
    span {
        position: absolute;
        top: 170px;
        left: 240px;
    }
`;

const StyledContainerMiniMiniBoss = styled.div`
    display: flex;
    justify-content: end;
    gap: 16px;
    padding-top: 32px;
`;

const Wrapper = styled.div`
    margin-top: 22px;
`;
const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 19px;
`;
