import React, { useEffect, useState } from "react";

import Add from "@mui/icons-material/Add";
import { ButtonUi } from "components/UI";
import CheckBox from "components/UI/Checkbox";
import IconButtonStyled from "components/UI/IconButtonStyled";
import ModalAdminLayot from "components/UI/ModalAdminLayot";
import SelectWordItem from "components/UI/SelectWordItem";
import { QuestionContext } from "containers/Admin/pages/CreateQuestion";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { formatToMinute } from "services/format";
import { deleteOption } from "store/slices/option-slice";
import {
    getQuestionWithId,
    sendingQuestion,
    updateQuestionWithId,
} from "store/slices/questionSlice";
import styled from "styled-components";

import DeleteIcon from "../../../assets/icons/Delete.svg";

function SelectEnglishWords({ data }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [inputValue, setInputValue] = useState("");
    const [valueCheckbox, setValueCheckbox] = useState(false);
    const [dataCard, setDataCard] = useState([]);
    const { id } = useParams();
    const getValue = (e) => {
        setInputValue(e.target.value);
    };

    const { setMainQuestion, mainQuestion, typeQuestion, isUpdatePage } =
        React.useContext(QuestionContext);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const sendingValueHandler = () => {
        if (!inputValue.trim()) return null;
        setDataCard((prev) => [...prev, { option: inputValue, isTrue: valueCheckbox }]);
        setInputValue("");
        setValueCheckbox(false);
        setIsOpen(false);
    };
    if (isUpdatePage && mainQuestion) {
        useEffect(() => {
            setDataCard(mainQuestion.optionResponseList);
        }, []);
    }
    const saveData = async (req) => {
        console.log(data);
        const min = data.duration.split(":")[0];
        const sec = data.duration.split(":")[1];
        const duration = formatToMinute(+min, +sec);
        const option = isUpdatePage ? "optionRequests" : "options";

        const dataQuestion = {
            testId: id,
            title: data.title,
            duration,
            contentRequest: {
                contentType: "TEXT",
                content: "string",
            },
            questionType: typeQuestion.value,
            [option]: dataCard,
        };
        if (req === "save") {
            setMainQuestion(dataQuestion);
            dispatch(sendingQuestion(dataQuestion));
        } else if (req === "update") {
            dispatch(
                updateQuestionWithId(
                    (data = { id, dataInfo: { ...dataQuestion, willDelete: [0], willUpdate: [0] } })
                )
            );
        }
    };

    const delOption = (idx) => {
        if (idx?.id) {
            dispatch(deleteOption(idx.id));
        }
        setDataCard(dataCard.filter((item) => item.option !== idx.option));
    };

    return (
        <Main>
            <ModalAdminLayot
                onClick={sendingValueHandler}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                onChange={getValue}
                value={inputValue}>
                <StyledContainerBoss>
                    <span>Is true option?</span>
                    <CheckBox
                        boxcolor="#2ab934"
                        onChange={() => setValueCheckbox(!valueCheckbox)}
                    />
                </StyledContainerBoss>
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
                    {dataCard.map((item, index) => {
                        return (
                            <MainItem key={item.option}>
                                <Content>
                                    <span>{index + 1}</span>
                                    <span>{item.option}</span>
                                </Content>
                                <Actions>
                                    <CheckBox boxcolor="#2ab934" value={item.isTrue} />
                                    <IconButtonStyled
                                        handleClick={() =>
                                            delOption(
                                                isUpdatePage
                                                    ? { id: item.id, option: item.option }
                                                    : { option: item.option }
                                            )
                                        }
                                        fontSize="21.3"
                                        Icon={DeleteIcon}
                                    />
                                </Actions>
                            </MainItem>
                        );
                    })}
                </Row>
                <StyledContainerMiniMiniBoss>
                    <ButtonUi onClick={() => navigate(-1)} variant="outlined">
                        GO BACK
                    </ButtonUi>
                    <ButtonUi
                        onClick={() => saveData(isUpdatePage ? "update" : "save")}
                        variant="contained"
                        color="success">
                        SAVE
                    </ButtonUi>
                </StyledContainerMiniMiniBoss>
            </Wrapper>
        </Main>
    );
}

export default React.memo(SelectEnglishWords);

const Main = styled.div``;
const StyledContainerMiniMiniBoss = styled.div`
    display: flex;
    justify-content: end;
    gap: 16px;
    padding-top: 32px;
`;

const MainItem = styled.div`
    width: 261px;
    height: 46px;
    display: flex;
    align-items: center;
    border: 1.53px solid #d4d0d0;
    border-radius: 8px;
`;

const Content = styled.div`
    span {
        :nth-child(1) {
            margin-left: 16px;
        }
        :nth-child(2) {
            margin-left: 15px;
        }
    }
`;
const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 14px 0 auto;
`;

const StyledContainerBoss = styled.div`
    height: 22px;
    display: flex;
    gap: 10px;
    margin-top: 20px;
`;
const Wrapper = styled.div`
    margin-top: 22px;
`;
const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 19px;
`;
