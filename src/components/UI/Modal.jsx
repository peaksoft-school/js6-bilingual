import React from "react";
import Box from "@mui/material/Box";
import ExitIcon from "assets/icons/";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";

export default function BasicModal({ title, onClick, text, children, open }) {
    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <StyleForBox>
                <CloseButton src={ExitIcon} onClick={onClick} />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {text}
                </Typography>
            </StyleForBox>
        </Modal>
    );
}

const StyleForBox = styled(Box)`
    position: relative;
    top: 50%;
    left: 50%;
    display: flex;
    width: 500px;
    height: 300px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: #ecdadd;
    border: "2px solid #000";
    box-shadow: 24;
    border-radius: 10px;
`;
const CloseButton = styled.img`
    position: absolute;
    top: 20px;
    right: 20px;
`;
// const
