import React from "react";

import Card from "@mui/material/Card";

import { styled } from "@mui/material/styles";

function UiCard({ children, cardwidth, cardheight, cardborderradius, cardboxshadow }) {
    return (
        <StyeldCard
            cardwidth={cardwidth}
            cardheight={cardheight}
            cardborderradius={cardborderradius}
            cardboxshadow={cardboxshadow}>
            {children}
        </StyeldCard>
    );
}

export default UiCard;

const StyeldCard = styled(Card)`
    width: ${(props) => props.cardwidth};
    height: ${(props) => props.cardheight}
    margin: 0 auto;
    padding: 40px 43px;
    box-shadow: ${(props) => props.cardboxshadow};
    border-radius: ${(props) => props.cardborderradius};
`;
