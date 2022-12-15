import React from "react";

import ButtonStyled from "components/UI/ButtonUi";
import Cookies from "js-cookie";

import { NavLink } from "react-router-dom";
import { CLIENT_ROUTES_URL } from "routes/ClientRoutes/clientRoutesUrl";
import styled from "styled-components";

import Logotip from "../../assets/images/landingPage/LogoBilingual.png";

function Header() {
    const logOut = () => {
        Cookies.remove("user");
        window.location.pathname = "/";
    };

    return (
        <HeaderGlav>
            <StyledHeader>
                <StyledImage src={Logotip} />
                <StyledHeaderClientRole>
                    <LinkItem to="/home/tests">TESTS</LinkItem>
                    <LinkItem to={`/home/${CLIENT_ROUTES_URL.RESULTS}`}>MY RESULTS</LinkItem>
                    <ButtonStyled
                        text="LOG OUT"
                        variant="outlined"
                        maxwidth="104px"
                        maxheight="42px"
                        fontSize="15px"
                        onClick={logOut}
                    />
                </StyledHeaderClientRole>
            </StyledHeader>
        </HeaderGlav>
    );
}

const HeaderGlav = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
`;

const LinkItem = styled(NavLink)`
    &.active,
    &:hover {
        color: #3a10e5;
    }
`;
const StyledHeader = styled.div`
    width: 1550px;
    height: 96px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    box-shadow: 3px 0 7px #999;
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
