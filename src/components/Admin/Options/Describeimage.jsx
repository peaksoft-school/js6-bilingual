import React from "react";

import { ButtonUi, ImagePickerUi, InputUi } from "components/UI";
import styled from "styled-components";

export default function DescribeImage() {
    return (
        <Main>
            <Wrapper>
                <Row>
                    <ImagePickerUi />
                    <h4>File_name_of_the_image_file.jpg</h4>
                </Row>
                <Box>
                    <span>Correct answer</span>
                    <InputUi />
                </Box>
            </Wrapper>
            <BottomActionBtn>
                <ButtonUi variant="outlined">GO BACK</ButtonUi>
                <ButtonUi variant="contained" color="success">
                    SAVE
                </ButtonUi>
            </BottomActionBtn>
        </Main>
    );
}

const Main = styled.div`
    margin: 0 auto;
`;

const BottomActionBtn = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    margin-top: 32px;
    font-weight: bold;
`;

const Wrapper = styled.div``;

const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 0 40px;
    h4 {
        color: #4c4859;
        font-weight: 400;
        font-size: 16px;
    }
`;

const Box = styled.div`
    margin-top: 24px;
    span {
        display: block;
        margin-bottom: 12px;
    }
`;
