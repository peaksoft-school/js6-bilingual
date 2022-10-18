import * as React from "react";

import AddIcon from "@mui/icons-material/Add";

import ClearIcon from "@mui/icons-material/Clear";

import { Container, Typography } from "@mui/material";

import Accordion from "@mui/material/Accordion";

import AccordionDetails from "@mui/material/AccordionDetails";

import AccordionSummary from "@mui/material/AccordionSummary";

import styled from "styled-components";

export default function ControlledAccordions({ data }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (e, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <StyledContainer>
                <Header>FAQ:</Header>
                {data.map((el) => {
                    return (
                        <Accordion
                            sx={{
                                backgroundColor: "#262626",
                                borderBottom: "1px solid #4a4a4a",
                            }}
                            expanded={expanded === el.panel}
                            onChange={handleChange(el.panel)}>
                            <AccordionSummary
                                sx={{ color: "#ffffff" }}
                                expandIcon={
                                    expanded === el.panel ? (
                                        <ClearIcon sx={{ color: "#ffffff" }} />
                                    ) : (
                                        <AddIcon sx={{ color: "#ffffff" }} />
                                    )
                                }
                                aria-controls="panel1bh-content"
                                id={el.panel}>
                                <StyledTypography>{el.question}</StyledTypography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <StyledTypographyAccordion>{el.answer}</StyledTypographyAccordion>
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </StyledContainer>
        </div>
    );
}
const Header = styled("h1")`
    color: #ffffff;
    margin-left: 15px;
    font-family: "Gilroy";
    font-weight: 700;
    font-size: 40px;
    line-height: 51px;
`;

const StyledContainer = styled(Container)`
    width: 1440px;
    background-color: #262626;
`;

const StyledTypography = styled(Typography)`
    background-color: #262626;
    height: 40px;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 20px;
    line-height: 40px;
    background: #262626;
`;

const StyledTypographyAccordion = styled(Typography)`
    width: 100%;
    font-family: "Poppins";
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    color: #ffffff;
    border-radius: none;
`;
