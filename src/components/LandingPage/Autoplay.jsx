import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { styled as StyledMUI } from "@mui/material/styles";

import Slider from "react-slick";

import styled from "styled-components";

import Play1 from "../../assets/images/play1.svg";

import Play2 from "../../assets/images/play2.svg";

import Play5 from "../../assets/images/play5.svg";

import Play6 from "../../assets/images/play6.svg";

function Autoplay() {
    const playerPhotos = [
        { id: Math.random().toString(), alt: "play1", playUrlPhoto: Play1 },
        { id: Math.random().toString(), alt: "play2", playUrlPhoto: Play2 },
        { id: Math.random().toString(), alt: "play3", playUrlPhoto: Play5 },
        { id: Math.random().toString(), alt: "play5", playUrlPhoto: Play6 },
        { id: Math.random().toString(), alt: "play1", playUrlPhoto: Play1 },
        { id: Math.random().toString(), alt: "play2", playUrlPhoto: Play2 },
        { id: Math.random().toString(), alt: "play3", playUrlPhoto: Play5 },
    ];
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,

        arrow: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 100,
        cssEase: "linear",
    };
    return (
        <div>
            <StyledTitle>Partners</StyledTitle>
            <StyledSlider {...settings}>
                {playerPhotos.map((item) => (
                    <StyledDiv key={item.id}>
                        <StyledImg src={item.playUrlPhoto} alt={item.alt} />
                    </StyledDiv>
                ))}
            </StyledSlider>
        </div>
    );
}

export default Autoplay;

const StyledTitle = styled.h1`
    width: 157px;
    height: 48px;
    margin: 0 auto;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #3752b4;
    margin-bottom: 40px;
`;

const StyledSlider = StyledMUI(Slider)`
    .slick-list {
        width: 100%;
        height: 126px;
    }
    .slick-track {
     display: flex;
     gap: 40px;
    }
`;
const StyledDiv = styled.div`
    width: 255px;
    height: 126px;
    background: #ffffff;
    border: 1px solid #e4e4e4;
    border-radius: 20px;
    padding: 20px 40px;
`;
const StyledImg = styled.img`
    width: 175px;
    height: 86px;
    margin: 0 auto;
    text-align: center;
`;
