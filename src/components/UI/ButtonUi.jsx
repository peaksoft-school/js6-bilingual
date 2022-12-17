import React from "react";

import { Button } from "@mui/material";
import styled, { css } from "styled-components";

import { Styles } from "../../utils/constants/theme";

const ButtonUi = ({
    disabled,
    color,
    variant,
    maxwidth,
    fontSize,
    maxheight,
    icon,
    children,
    onClick,
    text,
}) => {
    return (
        <ButtonMain
            disabled={disabled}
            onClick={onClick}
            maxwidth={maxwidth}
            fontSize={fontSize}
            maxheight={maxheight}
            variant={variant}
            color={color}>
            {icon && <ButtonSpan>{icon}</ButtonSpan>}
            {text}
            {children}
        </ButtonMain>
    );
};

const ButtonMain = styled(Button)`
    ${({ maxwidth, maxheight = "42px", fontSize = "14" }) => {
        return css`
            display: flex;
            align-items: center;
            ${maxwidth && `max-width: ${maxwidth}; width: 100%;`}
            height: ${maxheight};
            font-size: ${Styles.FontSizes["14"]}px;
            letter-spacing: 0.02em !important;
            font-size: ${fontSize}px !important;
            &.css-f3g22s-MuiButtonBase-root-MuiButton-root,
            &.css-sghohy-MuiButtonBase-root-MuiButton-root {
                background-color: ${Styles.colors.Primary.PmrBlue};
                box-shadow: none;
                :hover {
                    background-color: ${Styles.colors.Primary.PmrBlue};
                    box-shadow: none;
                }
                :active {
                    background: ${Styles.colors.Secondary.Scd10};
                }
            }
            &.css-jzc2lf-MuiButtonBase-root-MuiButton-root,
            &.css-1rwt2y5-MuiButtonBase-root-MuiButton-root {
                border: 2px solid ${Styles.colors.Primary.PmrBlue} !important;
                font-size: 14px;
                letter-spacing: 0.02em !important;
                color: ${Styles.colors.Primary.PmrBlue};
                :hover {
                    background-color: ${Styles.colors.Primary.PmrBlue}!important;
                    color: ${Styles.colors.Primary.PmrWhite};
                }
                &:active {
                    background: ${Styles.colors.Secondary.Scd10} !important;
                }
            }
            &.css-1at7div-MuiButtonBase-root-MuiButton-root,
            &.css-sxix9q-MuiButtonBase-root-MuiButton-root {
                border: 2px solid ${Styles.colors.Secondary.Scd9} !important;
                &:hover {
                    background: ${Styles.colors.Secondary.Scd9};
                    color: ${Styles.colors.Primary.PmrWhite};
                }
                &:active {
                    background: ${Styles.colors.Secondary.Scd08};
                }
            }
            .MuiTouchRipple-root {
                display: none;
            }
            &.css-rlclm-MuiButtonBase-root-MuiButton-root,
            &.css-ke5b6m-MuiButtonBase-root-MuiButton-root {
                background: ${Styles.colors.Secondary.Scd9};
                box-shadow: none;
                &:hover {
                    background: ${Styles.colors.Secondary.Scd31};
                    box-shadow: none;
                }
                &:active {
                    background: ${Styles.colors.Secondary.Scd08};
                    box-shadow: none;
                }
            }
            // --------------------- DISABLED --------------------
            &.Mui-disabled {
                background: rgba(196, 196, 196, 0.2) !important;
                border: 2px solid ${Styles.colors.Secondary.ScdC4} !important;
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

export default ButtonUi;
