import React from "react";

import styled, { css } from "styled-components";

const IconButtonStyled = ({ Icon, fontSize, onhover, click }) => {
    const handleClick = () => {
        click();
    };
    return (
        <StyledIcon
            onClick={handleClick}
            onhover={onhover}
            fontSize={fontSize}
            dangerouslySetInnerHTML={{ __html: Icon }}
        />
    );
};

export default IconButtonStyled;

const StyledIcon = styled.span`
    ${({ fontSize = "24", onhover }) => {
        return css`
            cursor: pointer;

            svg {
                font-size: 42px;
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
                border-color: #9a9a9a;
                cursor: pointer;
            }
            :hover {
                path {
                    stroke: ${onhover?.BorderColor} !important;
                }
                circle {
                    fill: ${onhover?.fillColor};
                    ${console.log(onhover)}
                }
            }
        `;
    }}
`;
