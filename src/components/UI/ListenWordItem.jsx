import React from "react";

import styled from "styled-components";

import CheckBox from "./Checkbox";
import IconButtonStyled from "./IconButtonStyled";

export default function SelectWordItem({ isTrue, index, title, setValueCheckbox }) {
    return (
        <Main>
            <Content>
                <span>{index + 1}</span>
                <span>
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.70717 2.75001C10.6472 2.75001 11.5239 3.43891 11.8404 4.54311C11.9566 5.00467 12.0038 5.46721 12.0492 5.91302L12.0917 6.31848C12.2542 7.67167 12.2542 14.3195 12.0917 15.6825L12.0492 16.1027C12.0085 16.5269 11.967 16.9658 11.847 17.4343C11.5305 18.5355 10.6869 19.25 9.7289 19.25C9.69867 19.25 9.66843 19.25 9.63442 19.249C9.10537 19.249 8.53003 18.9183 8.20409 18.63L5.02695 15.9344H3.39539C2.13605 15.9344 1.21399 15.0064 1.04677 13.5706C0.854046 12.1347 0.891835 9.67143 1.04677 8.36647C1.22911 7.00738 2.19463 6.06556 3.39539 6.06556H5.02695L8.14363 3.40939C8.51964 3.07675 9.18284 2.74805 9.70717 2.75001ZM17.3945 2.95265C17.7705 2.68103 18.2873 2.78043 18.5452 3.16916C19.9585 5.28603 20.737 8.06817 20.737 10.9999C20.737 13.9336 19.9585 16.7148 18.5452 18.8316C18.3912 19.0629 18.137 19.2017 17.8659 19.2017C17.6977 19.2017 17.5353 19.1485 17.3954 19.0481C17.0213 18.7755 16.9287 18.2392 17.1876 17.8495C18.4101 16.017 19.0837 13.5842 19.0837 10.9999C19.0837 8.41656 18.4101 5.98378 17.1876 4.15132C16.9287 3.76259 17.0213 3.22526 17.3945 2.95265ZM14.5459 5.73686C14.9229 5.46622 15.4377 5.56365 15.6976 5.95337C16.6102 7.32132 17.1137 9.11342 17.1137 11C17.1137 12.8866 16.6102 14.6787 15.6976 16.0466C15.5426 16.2779 15.2894 16.4167 15.0183 16.4167C14.8501 16.4167 14.6867 16.3635 14.5469 16.2631C14.1727 15.9905 14.0802 15.4532 14.34 15.0645C15.0627 13.9809 15.4604 12.5372 15.4604 11C15.4604 9.4618 15.0627 8.01907 14.34 6.93553C14.0802 6.5468 14.1727 6.00947 14.5459 5.73686Z"
                            fill="#655F5F"
                        />
                    </svg>
                </span>
                <span>
                    {title}_{index + 1}
                </span>
            </Content>
            <Actions>
                <CheckBox
                    boxcolor="#2ab934"
                    value={isTrue}
                    onChange={() => setValueCheckbox(true)}
                />

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
    display: flex;
    align-items: center;
    span {
        :nth-child(1) {
            margin-left: 16px;
        }
        :nth-child(2) {
            margin: 0 12px 0 15px;
        }
    }
`;
const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 14px 0 auto;
`;
