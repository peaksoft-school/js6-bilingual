import React from "react";

import Box from "@mui/material/Box";

import Rating from "@mui/material/Rating";

import { styled as StyledMUI } from "@mui/material/styles";

import Typography from "@mui/material/Typography";

import Slider from "react-slick";

import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NextIcon from "../../assets/icons/BackIcon.svg";

import BackIcon from "../../assets/icons/NextIcon.svg";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, padding: 20 }} onClick={onClick}>
            <img src={BackIcon} alt="" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, padding: 20 }} onClick={onClick}>
            <img src={NextIcon} alt="" />
        </div>
    );
}

export default function SecondarySlider() {
    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        focusOnSelect: true,
        infinite: true,
        centerPadding: 1,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    const aboutUser = [
        {
            id: Math.random().toString(),
            name: "-Chyngyz Zalkarbekov",
            text: "Bilingual has helped me to get a good grasp of the language in a fun and challenging way. I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations.",
            avatar: "https://play-lh.googleusercontent.com/nCVVCbeSI14qEvNnvvgkkbvfBJximn04qoPRw8GZjC7zeoKxOgEtjqsID_DDtNfkjyo",
            rating: 5,
        },
        {
            id: Math.random().toString(),
            name: "-Chyngyz Zalkarbekov",
            text: "I have tried other language apps and found them boring but with Bilingual, it is easy and fun to practice every day.",
            avatar: "https://i.playground.ru/p/rv2YGvWcdjHspVJcuvV19Q.jpeg",
            rating: 5,
        },
        {
            id: Math.random().toString(),
            name: "-Chyngyz Zalkarbekov",
            text: "Great way to learn a language. Fun, interactive, and engaging. I am enjoying the course immensely and would recommend it to anyone who wishes to learn a second language.",
            avatar: "https://laverdadnoticias.com/__export/1635186190986/sites/laverdad/img/2021/10/25/version_de_naruto_uzumaki_como_villano.jpg_750902796.jpg",
            rating: 5,
        },
        {
            id: Math.random().toString(),
            name: "-Chyngyz Zalkarbekov",
            text: "Great way to learn a language. Fun, interactive, and engaging. I am enjoying the course immensely and would recommend it to anyone who wishes to learn a second language.",
            avatar: "https://i.pinimg.com/736x/1d/6f/cc/1d6fcc8a14f2fcd9e964e16baf759e87--naruto-uzumaki-shippuden-read-naruto-manga.jpg",
            rating: 5,
        },
        {
            id: Math.random().toString(),
            name: "-Chyngyz Zalkarbekov",
            text: "Great way to learn a language. Fun, interactive, and engaging. I am enjoying the course immensely and would recommend it to anyone who wishes to learn a second language.",
            avatar: "https://www.worthview.com/wp-content/uploads/2019/03/Cult-Anime.jpg",
            rating: 5,
        },
    ];
    return (
        <MainBox>
            <MainTitle variant="h1">Why people love Bilingual</MainTitle>
            <StyledSlider nextIcon={<NextIcon />} prevIcon={BackIcon} {...settings}>
                {aboutUser.map((item) => (
                    <BoxCard key={item.id}>
                        <UserPhotos src={item.avatar} alt="user avatar" />
                        <Text variant="subtitle1">{item.text}</Text>
                        <UserName variant="h5">{item.name}</UserName>
                        <UserRating name="read-only" value={item.rating} readOnly />
                    </BoxCard>
                ))}
            </StyledSlider>
        </MainBox>
    );
}

const MainBox = StyledMUI(Box)`
    height: 804px;
    padding: 0;
    background: #fef5e8;
`;
const MainTitle = StyledMUI(Typography)`
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #3752b4;
    margin-bottom: 60px;
`;
const BoxCard = StyledMUI(Box)`
    width: 366px;
    height: 564px;
    background: #e5e5e5;
    border-radius: 40px;
    margin-bottom: 58px;
`;
const UserPhotos = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    margin: 40px 13px 52px 73px;
`;
const Text = StyledMUI(Typography)`
    width: 300px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(35, 33, 42, 0.8);
    margin: 0 10px 0 17px;
`;
const UserName = StyledMUI(Typography)`
    width: 170px;
    height: 24px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #3A10E5;
    margin: 24px 96px 20px 85px;
`;
const UserRating = StyledMUI(Rating)`
    width: 98px;
    height: 18px;
    margin: 0 134px 94px 104px;
`;
const StyledSlider = styled(Slider)`
    .slick-slide {
        padding: 0 20px;
    }
    ,
    .slick-list {
        margin: 0 auto;
        width: 1100px;
    }
    .slick-arrow {
        width: 60px;
        height: 60px;
        border: 1px solid #3a10e5;
        border-radius: 50%;
        z-index: 10;
        margin: 0 -60px;
    }

    .slick-prev:before,
    .slick-next:before {
        content: none;
    }
    .slick-prev:active,
    .slick-next:active {
        background: #666ca7;
    }
`;
