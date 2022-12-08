import React from "react";

import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import styled from "styled-components";

import IconButtonStyled from "./IconButtonStyled";

export default function MainIdeaItem({ index, text, radioValue, onChange }) {
    return (
        <Main>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    onChange={onChange}
                    value={radioValue}
                    name="radio-buttons-group">
                    <Box>
                        <Num>{index}</Num>
                        <Text>{text}</Text>
                        <Actions>
                            <FormControlLabel value={text} control={<Radio />} />
                            <IconButtonStyled
                                fontSize="24px"
                                Icon={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 5H4.16667H17.5" stroke="#9A9A9A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66602 4.99984V3.33317C6.66602 2.89114 6.84161 2.46722 7.15417 2.15466C7.46673 1.8421 7.89066 1.6665 8.33268 1.6665H11.666C12.108 1.6665 12.532 1.8421 12.8445 2.15466C13.1571 2.46722 13.3327 2.89114 13.3327 3.33317V4.99984M15.8327 4.99984V16.6665C15.8327 17.1085 15.6571 17.5325 15.3445 17.845C15.032 18.1576 14.608 18.3332 14.166 18.3332H5.83268C5.39065 18.3332 4.96673 18.1576 4.65417 17.845C4.34161 17.5325 4.16602 17.1085 4.16602 16.6665V4.99984H15.8327Z" stroke="#9A9A9A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
                            />
                        </Actions>
                    </Box>
                </RadioGroup>
            </FormControl>
        </Main>
    );
}

const Main = styled.div`
    margin-bottom: 16px;
    > div {
        width: 100%;
    }
`;
const Num = styled.h3`
    font-size: 16px;
    font-weight: 500;
    color: #4c4859;
    line-height: 22px;
`;
const Box = styled.div`
    display: flex;
    gap: 26px;
    align-items: flex-start;
    border: 1.53px solid #d4d0d0;
    border-radius: 8px;
    padding: 14px 16px;

    .MuiRadio-root {
        padding: 0 !important;
    }
`;
const Text = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #4c4859;
    text-align: justify;
`;
const Actions = styled.div`
    display: flex;
    margin-left: auto;
`;
