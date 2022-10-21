import * as React from "react";

import AddIcon from "@mui/icons-material/Add";

import { Container, styled, Typography } from "@mui/material";

import Accordion from "@mui/material/Accordion";

import AccordionDetails from "@mui/material/AccordionDetails";

import AccordionSummary from "@mui/material/AccordionSummary";

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
                        <StyledAccordion
                            expanded={expanded === el.panel}
                            onChange={handleChange(el.panel)}>
                            <StyledAccordionSummary aria-controls="panel1bh-content" id={el.panel}>
                                <Typography>{el.question}</Typography>
                            </StyledAccordionSummary>
                            <StyledAccordionDetails>
                                <StyledTypographyAccordion>{el.answer}</StyledTypographyAccordion>
                            </StyledAccordionDetails>
                        </StyledAccordion>
                    );
                })}
            </StyledContainer>
        </div>
    );
}

const StyledAccordionSummary = styled((props) => (
    <AccordionSummary expandIcon={<AddIcon sx={{ color: "#ffffff" }} />} {...props} />
))(() => ({
    background: "#262626",
    flexDirection: "row",
    borderTop: `1px solid #4A4A4A`,

    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(45deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: "-16px",
        marginTop: "20px",
        color: "#ffffff",
        height: "40px",
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "20px",
        lineHeight: "40px",
    },
}));

const StyledAccordion = styled((props) => (
    <Accordion disableGutters elevation={0} square {...props} />
))(() => ({
    backgroundColor: "#262626",
    borderBottom: `1px solid #4A4A4A`,

    "&:not(:last-child)": {
        borderBottom: 0,
    },
}));

const StyledAccordionDetails = styled(AccordionDetails)(() => ({}));

const Header = styled("h1")`
    color: #ffffff;
    font-family: "Gilroy";
    font-weight: 700;
    font-size: 40px;
    line-height: 51px;
    margin-bottom: 10px;
`;

const StyledContainer = styled(Container)`
    width: 1220px;
    background-color: #262626;
`;

const StyledTypographyAccordion = styled(Typography)`
    width: 100%;
    font-family: "Poppins";
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    color: #ffffff;
    border-radius: none;
    margin-left: -16px;
`;
