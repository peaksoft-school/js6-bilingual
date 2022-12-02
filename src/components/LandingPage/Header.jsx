import React, { useState } from "react";

import ButtonStyled from "components/UI/ButtonUi";
import { useNavigate } from "react-router-dom";

import styled, { keyframes } from "styled-components";

import { scrollHeader } from "utils/helpers";

import Logotip from "../../assets/images/landingPage/LogoBilingual.png";

function Header({ Choice, HeaderBg }) {
    const navigate = useNavigate();
    const [bgColor, setBgColor] = useState();

    window.addEventListener("scroll", () => {
        if (scrollHeader()) {
            setBgColor(true);
        } else {
            setBgColor(false);
        }
    });
    function comeInNavigateHandler() {
        // TODO navigate come in logic
    }

    function registerNavigateHandler() {
        navigate("/sign-in");
    }

    return (
        <HeaderGlav>
            <StyledHeader bgColor={bgColor} HeaderBg={HeaderBg}>
                <StyledImage src={Logotip} />
                {Choice ? (
                    <StyledHeaderLandingPage>
                        <ButtonStyled
                            text="TO COME IN"
                            variant="contained"
                            maxwidth="122px"
                            maxheight="42px"
                            fontSize="14px"
                            onClick={() => comeInNavigateHandler()}
                        />
                        <ButtonStyled
                            text="REGISTER"
                            variant="outlined"
                            maxwidth="122px"
                            maxheight="42px"
                            fontSize="14px"
                            onClick={() => registerNavigateHandler()}
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
                            click={() => comeInNavigateHandler}
                        />
                        <ButtonStyled
                            text="Submitted results"
                            variant="text"
                            maxwidth="183px"
                            maxheight="18px"
                            fontSize="15px"
                            click={() => comeInNavigateHandler}
                        />
                        <ButtonStyled
                            text="LOG OUT"
                            variant="outlined"
                            maxwidth="104px"
                            maxheight="42px"
                            fontSize="15px"
                            click={() => comeInNavigateHandler}
                        />
                    </StyledHeaderClientRole>
                )}
            </StyledHeader>
        </HeaderGlav>
    );
}

const HeaderAnimation = keyframes`
to{
    background-color: white;
}
`;
const HeaderGlav = styled.div`
    display: flex;
    justify-content: center;
`;
const StyledHeader = styled.div`
    width: 1550px;
    height: 96px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    animation: ${(props) => (props.bgColor ? HeaderAnimation : "")} 0.5s forwards;
    position: fixed;
    z-index: 10;
    transition: 0.2s ease;
    background: ${(props) => props.HeaderBg};
    &.active {
        background-color: white;
    }
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
    justify-content: space-between;
    align-items: center;
    margin-right: 100px;
`;
const StyledHeaderClientRole = styled.div`
    width: 411px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 100px;
`;
export default Header;
