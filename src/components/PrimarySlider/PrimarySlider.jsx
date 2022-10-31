import React from "react";

import Container from "components/CustomUi/Container";

import CustomSlider from "components/CustomUi/CustomSlider";

import styled from "styled-components";

import PhotoOne from "../../assets/images/Group 1.svg";

import PhotoTwo from "../../assets/images/Group 2.svg";

import PhotoThree from "../../assets/images/Group 3.svg";

import PhotoFour from "../../assets/images/Group 4.svg";

import PhotoFive from "../../assets/images/Group 5.svg";

function PrimarySlider() {
    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
    };
    const Data = [
        { Photo: PhotoOne },
        { Photo: PhotoTwo },
        { Photo: PhotoThree },
        { Photo: PhotoFour },
        { Photo: PhotoFive },
    ];
    return (
        <div style={{ position: "relative" }}>
            <Container>
                <CustomSlider settings={settings} bottomArrows>
                    {Data.map((item) => {
                        return (
                            <ContainerImage>
                                <StyledImage src={item.Photo} />
                            </ContainerImage>
                        );
                    })}
                </CustomSlider>
            </Container>
        </div>
    );
}

const ContainerImage = styled.div`
    width: 1028px;
    height: 440px;
    margin-left: 50px;
`;

const StyledImage = styled.img`
    width: 1028px;
    height: 440px;
`;

export default PrimarySlider;
