import React from "react";

import styled, { css } from "styled-components";
import { Styles } from "utils/constants/theme";

const IconButtonStyled = ({ Icon, fontSize, onhover, handleClick }) => {
    return <StyledIcon onClick={handleClick} onhover={onhover} fontSize={fontSize} src={Icon} />;
};

export default IconButtonStyled;

const StyledIcon = styled.img`
    ${({ fontSize = "24", onhover }) => {
        return css`
            cursor: pointer;
            svg {
                font-size: ${Styles.FontSizes["42"]}px;
                width: ${fontSize}px;
                height: ${fontSize}px;
            }
            circle {
                :hover {
                    fill: ${onhover?.fillColor};
                }
            }
            path {
                transition: all 0.2s ease;
            }
            .MuiSvgIcon-root {
                border-color: ${Styles.colors.Secondary.Scd9A};
                cursor: pointer;
            }
            :hover {
                path {
                    stroke: ${onhover?.BorderColor} !important;
                }
                circle {
                    fill: ${onhover?.fillColor};
                }
            }
        `;
    }}
`;
