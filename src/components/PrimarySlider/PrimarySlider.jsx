import React, { useState } from "react";

import { HandySvg } from "handy-svg";

import styled, { keyframes } from "styled-components";

import ArrowNext from "../../assets/icons/Next.svg";

import ArrowPrev from "../../assets/icons/Prev.svg";

import PhotoOne from "../../assets/images/Group 1.svg";

import PhotoTwo from "../../assets/images/Group 2.svg";

import PhotoThree from "../../assets/images/Group 3.svg";

import PhotoFour from "../../assets/images/Group 4.svg";

import PhotoFive from "../../assets/images/Group 5.svg";

function PrimarySlider() {
    const [currentImages, setCurrentImages] = useState(0);
    const [animationGo, setAnimationGo] = useState(null);
    const images = [PhotoOne, PhotoTwo, PhotoThree, PhotoFour, PhotoFive];

    const nextImage = () => {
        setCurrentImages((prevIndex) => prevIndex + 1);
        setAnimationGo(true);
        setTimeout(() => {
            setAnimationGo(null);
        }, 850);
    };
    if (images.length === currentImages) {
        setCurrentImages(0);
    }
    if (currentImages === -1) {
        setCurrentImages(4);
    }
    const prevImage = () => {
        setCurrentImages((prevIndex) => prevIndex - 1);
        setAnimationGo(false);
        setTimeout(() => {
            setAnimationGo(null);
        }, 850);
    };
    return (
        <div>
            <StyledCarouselContainer>
                <StyledTittle>Check out each question type</StyledTittle>
                <StyledImage src={images[currentImages]} alt="" animationGo={animationGo} />
                <StyledVariantContainer>
                    <StyledArrowPrev onClick={prevImage}>
                        <HandySvg src={ArrowPrev} width="17.14px" height="14.7px" />
                    </StyledArrowPrev>
                    {images.map((img, index) => {
                        return (
                            <StyledIndicator
                                onClick={() => setCurrentImages(index)}
                                key={img}
                                bgColor={
                                    index === currentImages ? "#3752b4" : "rgba(58, 16, 229, 0.2);"
                                }
                                animationHeight={index === currentImages ? "30px" : ""}
                            />
                        );
                    })}
                    <StyledArrowNext onClick={nextImage}>
                        <HandySvg src={ArrowNext} width="17.14px" height="14.7px" />
                    </StyledArrowNext>
                </StyledVariantContainer>
            </StyledCarouselContainer>
        </div>
    );
}
const animationHeight = (animationProps) => keyframes`
    100%{
        height:${animationProps}
    }
`;
const Prev = () => keyframes`
0%{
    transform: translate(-180px);
}
100%{
    transform: translate(0px);
}
`;
const Next = () => keyframes`
0%{
    transform: translate(180px);
}
100%{
    transform: translate(0px);
}
`;
const Easy = () => keyframes`
to{
    transform: translate(0px);
}
`;
const StyledCarouselContainer = styled.div`
    width: 1440px;
    height: 658px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;
const StyledTittle = styled.h1`
    width: 568px;
    height: 48px;
    color: #3752b4;
    font-size: Girloy;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    font-style: normal;
`;
const StyledImage = styled.img`
    width: 1128px;
    height: 440px;
    animation: ${(props) =>
            props.animationGo === null ? Easy : props.animationGo === true ? Next : Prev}
        1s forwards;
`;
const StyledVariantContainer = styled.div`
    width: 283px;
    height: 78px;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
`;
const StyledArrowPrev = styled.div`
    width: 60px;
    height: 60px;
    border: 1px solid #3a10e5;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3a10e5;
    cursor: pointer;
    :hover {
        background-color: #3a10e5;
        color: white;
    }
`;
const StyledIndicator = styled.div`
    width: 6px;
    height: 16px;
    cursor: pointer;
    border-radius: 20px;
    background: ${(props) => props.bgColor};
    animation: ${(props) => animationHeight(props.animationHeight)} 1s forwards;
    margin-bottom: 10px;
`;
const StyledArrowNext = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    border: 1px solid #3a10e5;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3a10e5;
    cursor: pointer;
    :hover {
        background-color: #3a10e5;
        color: white;
    }
`;

export default PrimarySlider;
