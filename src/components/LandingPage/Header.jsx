import React, { useState } from "react";

import ButtonStyled from "components/UI/ButtonUi";

import styled from "styled-components";

import Logotip from "../../assets/images/landingPage/LogoBilingual.png";

function Header({ Choice }) {
    const [bgColor, setBgColor] = useState("");

    function setScrool() {
        if (window.scrollY >= 80) {
            setBgColor("white");
        } else {
            setBgColor("");
        }
    }

    window.addEventListener("scroll", setScrool);

    function handleClick(e) {
        e.preventDefault();
    }
    return (
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
    );
}

const StyledHeader = styled.div`
    width: 1440px;
    height: 96px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${(props) => props.bgColor};
    position: fixed;
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
