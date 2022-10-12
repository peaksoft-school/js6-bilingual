import React from "react";

import Card from "@mui/material/Card";

import { styled } from "@mui/material/styles";

function UiCard({ children }) {
    return <StyeldCard>{children}</StyeldCard>;
}

export default UiCard;

const StyeldCard = styled(Card)`
    padding: 40px 43px;
`;
