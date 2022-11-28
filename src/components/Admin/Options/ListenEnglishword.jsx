import React, { useState } from "react";

import Add from "@mui/icons-material/Add";
import { ButtonUi, ModalUi } from "components/UI";
import ListenWordItem from "components/UI/ListenWordItem";
import ModalAdminLayot from "components/UI/ModalAdminLayot";
import styled from "styled-components";

function ListenEnglishWord() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [audioValue, setAudioValue] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [valueCheckbox, setValueCheckbox] = useState(false);
    const [dataCard, setDataCard] = useState([]);

    const handleValue = (e) => {
        setAudioValue(e.target.value);
    };
    const handleClick = () => {
        setDataCard((prev) => [
            ...prev,
            {
                id: Math.random().toString(),
                title: inputValue,
                audio: audioValue,
                isTrue: valueCheckbox,
            },
        ]);
    };
    return (
        <Main>
            <ModalAdminLayot
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                onClick={handleClick}
                onChange={(e) => setInputValue(e.target.value)}>
                <StyledContainerGlav>
                    <StyledContainerBoss>
                        <input type="file" accept="audio/mp3" onChange={handleValue} />
                        <span>Uppload audio file</span>
                    </StyledContainerBoss>
                    <span>{audioValue === "" ? "Name File" : audioValue}</span>
                </StyledContainerGlav>
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
                            <ListenWordItem
                                setValueCheckbox={setValueCheckbox}
                                id={item.id}
                                index={index}
                                key={item.id}
                                title={item.title}
                                isTrue={item.isTrue}
                            />
                        );
                    })}
                </Row>
            </Wrapper>
            <StyledContainerMiniMiniBoss>
                <ButtonUi variant="outlined">GO BACK</ButtonUi>
                <ButtonUi variant="contained" color="success">
                    SAVE
                </ButtonUi>
            </StyledContainerMiniMiniBoss>
        </Main>
    );
}

export default ListenEnglishWord;

const Main = styled.div``;

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

const StyledContainerBoss = styled.div`
    width: 159px;
    height: 46px;
    border: 2px solid #3a10e5;
    border-radius: 8px;
    margin-top: 24px;
    cursor: pointer;
    input {
        width: 159px;
        height: 46px;
        opacity: 0;
    }
    span {
        font-family: "DINNextRoundedLTW04-Medium";
        font-weight: 500;
        font-size: 16px;
        color: #3a10e5;
        position: absolute;
        left: 75px;
        top: 168px;
    }
`;

const Wrapper = styled.div`
    margin-top: 22px;
`;
const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 19px;
`;
