import React, { useState } from "react";

import ButtonStyled from "components/UI/ButtonUi";

import styled, { keyframes } from "styled-components";

import { scrollHeader } from "utils/helpers";

import Logotip from "../../assets/images/landingPage/Layer 1.png";

function Header({ Choice }) {
    const [bgColor, setBgColor] = useState();

    window.addEventListener("scroll", () => {
        if (scrollHeader()) {
            setBgColor(true);
        } else {
            setBgColor(false);
        }
    });

    function handleClick(e) {
        e.preventDefault();
    }
    return (
        <HeaderGlav>
            <StyledHeader bgColor={bgColor}>
                <StyledImage src={Logotip} />
                {Choice ? (
                    <StyledHeaderLandingPage>
                        <ButtonStyled
                            text="TO COME IN"
                            variant="contained"
                            maxwidth="122px"
                            maxheight="42px"
                            fontSize="14px"
                            click={() => handleClick}
                        />
                        <ButtonStyled
                            text="REGISTER"
                            variant="outlined"
                            maxwidth="122px"
                            maxheight="42px"
                            fontSize="14px"
                            click={() => handleClick}
                        />
                    </StyledHeaderLandingPage>
                ) : (
                    <StyledHeaderClientRole>
                        <ButtonStyled
                            text="TESTS"
                            variant="text"
                            maxwidth="44px"
                            maxheight="18px"
                            fontSize="15px"
                            click={() => handleClick}
                        />
                        <ButtonStyled
                            text="MY RESULTS"
                            variant="text"
                            maxwidth="110px"
                            maxheight="18px"
                            fontSize="15px"
                            click={() => handleClick}
                        />
                        <ButtonStyled
                            text="LOG OUT"
                            variant="outlined"
                            maxwidth="104px"
                            maxheight="42px"
                            fontSize="15px"
                            click={() => handleClick}
                        />
                    </StyledHeaderClientRole>
                )}
            </StyledHeader>
        </HeaderGlav>
    );
}

const HeaderAnimation = keyframes`
from{
    background-color: none;
}
to{
    background-color: white;
}
`;
const HeaderGlav = styled.div`
    display: flex;
    justify-content: center;
`;
const StyledHeader = styled.div`
    width: 1440px;
    height: 96px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    animation: ${(props) => (props.bgColor ? HeaderAnimation : "")} 1s forwards;
`;
const StyledImage = styled.img`
    width: 235px;
    height: 48px;
    margin-left: 80px;
`;
const StyledHeaderLandingPage = styled.div`
    width: 259px;
    height: 42px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 100px;
`;
const StyledHeaderClientRole = styled.div`
    width: 354px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 100px;
`;
export default Header;