import React from "react";

import styled from "styled-components";

import CheckBox from "./Checkbox";
import IconButtonStyled from "./IconButtonStyled";

export default function SelectWordItem({ title, isTrue, index }) {
    return (
        <Main>
            <Content>
                <span>{index + 1}</span>
                <span>{title}</span>
            </Content>
            <Actions>
                <CheckBox boxcolor="#2ab934" value={isTrue} />

                <IconButtonStyled
                    fontSize="21.3"
                    Icon={`
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 5H4.16667H17.5" stroke="#9A9A9A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66602 4.99984V3.33317C6.66602 2.89114 6.84161 2.46722 7.15417 2.15466C7.46673 1.8421 7.89066 1.6665 8.33268 1.6665H11.666C12.108 1.6665 12.532 1.8421 12.8445 2.15466C13.1571 2.46722 13.3327 2.89114 13.3327 3.33317V4.99984M15.8327 4.99984V16.6665C15.8327 17.1085 15.6571 17.5325 15.3445 17.845C15.032 18.1576 14.608 18.3332 14.166 18.3332H5.83268C5.39065 18.3332 4.96673 18.1576 4.65417 17.845C4.34161 17.5325 4.16602 17.1085 4.16602 16.6665V4.99984H15.8327Z" stroke="#9A9A9A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`}
                />
            </Actions>
        </Main>
    );
}

const Main = styled.div`
    width: 261px;
    height: 46px;
    display: flex;
    align-items: center;
    border: 1.53px solid #d4d0d0;
    border-radius: 8px;
`;

const Content = styled.div`
    span {
        :nth-child(1) {
            margin-left: 16px;
        }
        :nth-child(2) {
            margin-left: 15px;
        }
    }
`;
const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 14px 0 auto;
`;
