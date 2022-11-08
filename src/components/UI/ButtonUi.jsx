import React from "react";

import { Button } from "@mui/material";
import styled, { css } from "styled-components";

const ButtonStyled = ({ mui, icon, text, onClick, style }) => {
    console.log(style);
    return (
        <ButtonMain
            {...mui}
            onClick={onClick}
            maxwidth={style?.maxWidth}
            maxheight={style?.maxHeight}
            style={{ style }}>
            {icon && <ButtonSpan>{icon}</ButtonSpan>}
            <span>{text}</span>
        </ButtonMain>
    );
};

const ButtonMain = styled(Button)`
    ${({ maxwidth, maxheight = "42px", style }) => {
        console.log(style);
        return css`
            display: flex;
            align-items: center;
            ${maxwidth && `max-width: ${maxwidth}; width: 100%;`}
            height: ${maxheight};
            font-size: 14px;
            letter-spacing: 0.02em !important;
            font-size: ${style?.style?.fontSize}px !important;
            background: ${style?.style?.background} !important;
            &.css-f3g22s-MuiButtonBase-root-MuiButton-root,
            &.css-sghohy-MuiButtonBase-root-MuiButton-root {
                background-color: #3a10e5;
                box-shadow: none;
                :hover {
                    background-color: rgba(58, 16, 229, 0.9);
                    box-shadow: none;
                }
                :active {
                    background: #3007da;
                }
            }
            &.css-jzc2lf-MuiButtonBase-root-MuiButton-root,
            &.css-1rwt2y5-MuiButtonBase-root-MuiButton-root {
                border: 2px solid #3a10e5 !important;
                font-size: 14px;
                letter-spacing: 0.02em !important;
                color: #3a10e5;
                :hover {
                    background-color: #3a10e5 !important;
                    color: #fff;
                }
                &:active {
                    background: #3007da !important;
                }
            }
            &.css-1at7div-MuiButtonBase-root-MuiButton-root,
            &.css-sxix9q-MuiButtonBase-root-MuiButton-root {
                border: 2px solid #2ab930 !important;
                &:hover {
                    background: #2ab930;
                    color: #fff;
                }
                &:active {
                    background: #08af10;
                }
            }
            .css-8je8zh-MuiTouchRipple-root {
                display: none;
            }
            &.css-rlclm-MuiButtonBase-root-MuiButton-root,
            &.css-ke5b6m-MuiButtonBase-root-MuiButton-root {
                background: #2ab930;
                box-shadow: none;
                &:hover {
                    background: #31cf38;
                    box-shadow: none;
                }
                &:active {
                    background: #08af10;
                    box-shadow: none;
                }
            }
            // --------------------- DISABLED --------------------
            &.Mui-disabled {
                background: transparent !important;
                border: 2px solid #c4c4c4 !important;
                box-shadow: 0px 1px 2px rgba(196, 196, 196, 0.2),
                    0px 1px 2px rgba(196, 196, 196, 0.2);
                border-radius: 8px;
                padding: 12px 15px !important;
            }
        `;
    }}
`;

const ButtonSpan = styled.span`
    display: flex;
    align-items: center;
    margin-right: 15px;
`;

export default ButtonStyled;
