import React from "react";

import { ClickAwayListener } from "@mui/material";

import { motion } from "framer-motion";

import styled, { css } from "styled-components";

const arr = [
    { value: "item1", text: "lorem 1" },
    { value: "item2", text: "lorem 2" },
    { value: "item3", text: "lorem 3" },
    { value: "item4", text: "lorem 4" },
    { value: "item5", text: "lorem 5" },
    { value: "item6", text: "lorem 6" },
    { value: "item7", text: "lorem 7" },
    { value: "item8", text: "lorem 8" },
    { value: "item10", text: "lorem 10" },
    { value: "item11", text: "lorem 11" },
    { value: "item12", text: "lorem 12" },
    { value: "item13", text: "lorem 13" },
];

const DropDown = ({
    width = 500,
    fontSize = 16,
    BgHover = "rgba(58, 16, 229, 0.16)",
    colorText = "#313144",
    BgColorText = "#333",
    background = "pink",
    click,
}) => {
    const [dropState, setDropState] = React.useState(arr[0]);
    const [dropActive, setDropActive] = React.useState(0);
    const [openDrop, setOpenDrop] = React.useState(false);

    const handleClickDrop = (obj, idx) => {
        setDropState(obj);
        click(obj);
        setDropActive(idx);
    };

    const handleClickDropClose = () => {
        setOpenDrop((prev) => !prev);
    };

    const handleClickDropAway = () => {
        setOpenDrop(false);
    };

    return (
        <ClickAwayListener onClickAway={handleClickDropAway}>
            <DropBox background={background} width={width} fontSize={fontSize}>
                <DropHead
                    colorText={colorText}
                    className={!openDrop ? "is_close" : ""}
                    onClick={handleClickDropClose}>
                    <span>{dropState.text}</span>
                </DropHead>
                <DropBody animate={openDrop ? { height: "auto" } : { height: "0" }}>
                    <DropList
                        animate={openDrop ? { opacity: 1 } : { opacity: 0 }}
                        className={!openDrop ? "is_close" : ""}>
                        {arr.map((obj, idx) => (
                            <DropListItem
                                colorText={colorText}
                                BgColorText={BgColorText}
                                BgHover={BgHover}
                                className={dropActive === idx && "active"}
                                onClick={() => handleClickDrop(obj, idx)}
                                key={obj.value}>
                                {obj.text}
                            </DropListItem>
                        ))}
                    </DropList>
                </DropBody>
            </DropBox>
        </ClickAwayListener>
    );
};

const DropBox = styled.div`
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    ${(props) => {
        return css`
            background: ${props.background};
            font-size: ${props.fontSize}px;
            max-width: ${props.width}px;
        `;
    }}
`;

const DropHead = styled.div`
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    border: 1.6px solid #3a10e5;
    padding: 12px 18px;
    ${(props) =>
        props.className === "is_close" &&
        css`
            border-radius: 8px;
            span {
                color: ${props.colorText};
            }
        `}

    .drop_is_close {
        border-radius: 8px;
    }
`;

const DropBody = styled(motion.div)`
    height: 100%;
    padding-right: 5px;
`;

const DropList = styled(motion.ul)`
    margin: 8px 0;
    overflow: auto;
    max-height: 218px;
    padding: 0;
    ${(props) =>
        props.className === "is_close" &&
        css`
            margin: 0;
        `}

    ::-webkit-scrollbar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 8px;
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(154, 154, 154, 1);
        border-radius: 100px;
    }
`;

const DropListItem = styled.li`
    padding: 10px 24px;
    margin: 4px 5px 4px 0;
    cursor: pointer;

    ${({ BgHover, colorText, BgColorText, className }) =>
        css`
            background-color: ${className === "active" && BgHover};
            color: ${className === "active" ? BgColorText : colorText};

            :hover {
                background-color: ${BgHover};
                color: ${BgColorText};
            }
        `}

    :last-child {
        margin-bottom: 0;
    }
`;

export default DropDown;
