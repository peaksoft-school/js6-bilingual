import React from "react";

import ButtonStyled from "components/UI/ButtonUi";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Logotip from "../../assets/images/landingPage/LogoBilingual.png";

function Header() {
    const navigate = useNavigate();

    return (
        <HeaderGlav>
            <StyledHeader>
                <StyledImage src={Logotip} />
                <StyledHeaderClientRole>
                    <ButtonStyled
                        text="TESTS"
                        variant="text"
                        maxwidth="44px"
                        maxheight="18px"
                        fontSize="15px"
                    />
                    <ButtonStyled
                        text="My results"
                        variant="text"
                        maxwidth="183px"
                        maxheight="18px"
                        fontSize="15px"
                    />
                    <ButtonStyled
                        text="LOG OUT"
                        variant="outlined"
                        maxwidth="104px"
                        maxheight="42px"
                        fontSize="15px"
                    />
                </StyledHeaderClientRole>
            </StyledHeader>
        </HeaderGlav>
    );
}

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
    background-color: white;
`;
const StyledImage = styled.img`
    width: 235px;
    height: 48px;
    margin-left: 80px;
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
