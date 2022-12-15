import React, { useState } from "react";

import ButtonStyled from "components/UI/ButtonUi";
import Cookies from "js-cookie";
import { NavLink, useNavigate } from "react-router-dom";

import { ADMIN_ROUTES_URL } from "routes/AdminRoutes/adminRoutesUrl";
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
    const isAuth = Cookies.get("user");

    const logout = () => {
        Cookies.remove("user");
        window.location.pathname = "/";
    };

    return (
        <HeaderGlav>
            <StyledHeader bgColor={bgColor} HeaderBg={HeaderBg}>
                <StyledImage src={Logotip} />
                {Choice ? (
                    <StyledHeaderLandingPage>
                        {isAuth ? (
                            <ButtonStyled
                                text="TO COME IN"
                                variant="contained"
                                maxwidth="122px"
                                maxheight="42px"
                                fontSize="14px"
                                onClick={() => navigate(`/admin${ADMIN_ROUTES_URL.TEST}`)}
                            />
                        ) : (
                            <ButtonStyled
                                text="REGISTER"
                                variant="outlined"
                                maxwidth="122px"
                                maxheight="42px"
                                fontSize="14px"
                                onClick={() => navigate(`/sign-in`)}
                            />
                        )}
                    </StyledHeaderLandingPage>
                ) : (
                    <StyledHeaderClientRole>
                        <LinkItem to={`/admin${ADMIN_ROUTES_URL.TEST}`}>TEST</LinkItem>
                        <LinkItem to={ADMIN_ROUTES_URL.SUBMITED_TEST}>SUBMITED TEST</LinkItem>
                        <ButtonStyled
                            text="LOG OUT"
                            variant="outlined"
                            maxwidth="104px"
                            maxheight="42px"
                            fontSize="15px"
                            onClick={logout}
                        />
                    </StyledHeaderClientRole>
                )}
            </StyledHeader>
        </HeaderGlav>
    );
}

const HeaderAnimation = keyframes`
to{
    box-shadow: 3px 0 7px #999;
    background-color: white;
}
`;

const LinkItem = styled(NavLink)`
    &.active,
    &:hover {
        color: rgba(58, 16, 229, 0.9);
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
