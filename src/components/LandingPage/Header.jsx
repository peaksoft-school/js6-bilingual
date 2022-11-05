import React, { useState } from "react";

import Container from "components/CustomUi/Container";
import ButtonStyled from "components/UI/ButtonUi";
import styled from "styled-components";

const Btns = ({ children }) => {
    return <StyledHeaderLandingPage>{children}</StyledHeaderLandingPage>;
};

function Header({ Choice }) {
    const [bgColor, setBgColor] = useState("");

    function setScrool() {
        console.log(window.scrollY);
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
        <HeaderFixed bgColor={bgColor}>
            <Container>
                <StyledHeader>
                    <StyledImage src="Logotip" />
                    <Btns>
                        <ButtonStyled text="TO COME IN" variant="contained" />
                        <ButtonStyled text="REGISTER" variant="contained" />
                    </Btns>
                </StyledHeader>
            </Container>
        </HeaderFixed>
    );
}

const HeaderFixed = styled.div`
    background: ${(props) => props.bgColor};
    transition: all 0.3s ease;
    position: fixed;
    left: 0;
    width: 100%;
`;

const StyledHeader = styled.div`
    padding: 24px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const StyledImage = styled.img`
    width: 235px;
    height: 48px;
`;
const StyledHeaderLandingPage = styled.div`
    display: flex;
    align-items: center;
    gap: 0 24px;
`;
export default Header;
