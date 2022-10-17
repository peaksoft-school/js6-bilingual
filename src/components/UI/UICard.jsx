import React from "react";

import Card from "@mui/material/Card";

import { styled } from "@mui/material/styles";

function UICard({ children, cardWidth, cardHeight, cardBorderRadius, cardBoxShadow }) {
    return (
        <StyeldCard
            cardWidth={cardWidth || "100%"}
            cardheight={cardHeight || "auto"}
            cardborderradius={cardBorderRadius || 0}
            cardboxshadow={cardBoxShadow || ""}>
            {children}
        </StyeldCard>
    );
}

export default UICard;

const StyeldCard = styled(({ cardWidth, ...props }) => <Card {...props} />)`
    width: ${(props) => props.cardWidth};
    height: ${(props) => props.cardheight};
    margin: 0 auto;
    padding: 40px 43px;
    box-shadow: ${(props) => props.cardboxshadow};
    border-radius: ${(props) => props.cardborderradius};
`;
