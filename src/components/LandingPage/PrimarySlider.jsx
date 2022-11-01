import React from "react";

import Container from "components/CustomUi/Container";

import CustomSlider from "components/CustomUi/CustomSlider";

import styled from "styled-components";

import PhotoOne from "../../assets/images/landingPage/Group 4281 (1).png";

import PhotoTwo from "../../assets/images/landingPage/Group 4281.png";

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
        { Photo: PhotoOne },
        { Photo: PhotoTwo },
        { Photo: PhotoOne },
        { Photo: PhotoTwo },
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
