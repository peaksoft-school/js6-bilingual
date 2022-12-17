import React from "react";

import { East, KeyboardBackspace } from "@mui/icons-material";
import Slider from "react-slick";
import styled, { css } from "styled-components";
import { Styles } from "utils/constants/theme";

const CustomSlider = ({ settings, children, bottomArrows }) => {
    const slider = React.useRef(null);
    const isShow = children.length > settings.slidesToShow;
    return (
        <>
            <SliderStyled gap={settings.gap} bottomArrows={bottomArrows} ref={slider} {...settings}>
                {children}
            </SliderStyled>
            {isShow ? (
                <>
                    <ArrowPrev
                        childrens={children}
                        className={bottomArrows ? "bottom_arrow" : ""}
                        onClick={() => slider?.current?.slickPrev()}>
                        <KeyboardBackspace />
                    </ArrowPrev>
                    <ArrowNext
                        childrens={children}
                        className={bottomArrows ? "bottom_arrow" : ""}
                        onClick={() => slider?.current?.slickNext()}>
                        <East />
                    </ArrowNext>
                </>
            ) : (
                ""
            )}
        </>
    );
};

const SliderStyled = styled(Slider)`
    .slick-dots {
        bottom: -44px;
    }

    .slick-slide > div {
        margin: 0 ${(props) => props.gap}px;
    }

    ${(props) => {
        return (
            props.bottomArrows &&
            css`
                .slick-dots {
                    bottom: -95px !important;
                }
            `
        );
    }}

    .slick-dots li {
        margin: 0 10px;
    }

    .slick-dots li,
    .slick-dots li button {
        width: auto;
        padding: 0;
    }

    .slick-dots li button:before {
        position: absolute;
        content: "";
        background: ${Styles.colors.Secondary.ScdViolet};
        opacity: 1;
        width: 6px;
        height: 16px;
        transition: all 0.3s ease;
        border-radius: 20px;
    }
    .slick-dots li.slick-active :before {
        transform: translateY(-15px);
        height: 30px;
        background: ${Styles.colors.Secondary.ScdViolet};
    }
`;

const ArrowNext = styled.button`
    ${(props) => {
        return css`
            position: absolute;
            border: 1px solid ${Styles.colors.Primary.PmrBlue};
            right: -600px;
            top: calc(50% - 30px);
            background: transparent;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: ${Styles.colors.Primary.PmrBlue};

            :hover {
                background-color: ${Styles.colors.Primary.PmrBlue};
                color: ${Styles.colors.Primary.PmrWhite};
            }

            &.bottom_arrow {
                top: inherit;
                bottom: -104px !important;
                right: calc(50% - ${Math.trunc(props.childrens.length / 3 + 1) * 25 + 60}px);
            }
        `;
    }}
`;
const ArrowPrev = styled.button`
    ${(props) => {
        return css`
            position: absolute;
            left: -60px;
            top: calc(50% - 30px);
            border: 1px solid ${Styles.colors.Primary.PmrBlue};
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: transparent;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${Styles.colors.Primary.PmrBlue};
            cursor: pointer;

            :hover {
                background-color: ${Styles.colors.Primary.PmrBlue};
                color: ${Styles.colors.Primary.PmrWhite};
            }

            &.bottom_arrow {
                bottom: -104px !important;
                top: inherit;
                left: calc(50% - ${Math.trunc(props.childrens.length / 3 + 1) * 25 + 60}px);
            }
        `;
    }}
`;

export default CustomSlider;
