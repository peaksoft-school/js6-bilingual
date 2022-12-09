import React from "react";

export default function SelectWord() {
    return (
        <>
            <StyledP>Select the real English words in this list</StyledP>
            <StyledWrapper>
                {[].map((item) => (
                    <StyledWordDiv
                        className={disableById.includes(item.id) ? "option_disable" : ""}
                        onDragEnd={(e) => dragEndHandler(e, item)}
                        onDragOver={(e) => dragOverHandler(e)}
                        draggable
                        key={item.id}>
                        {item.option}
                    </StyledWordDiv>
                ))}
            </StyledWrapper>
            <StyledDrag onDragOver={(e) => dragOverHandler(e, cardList.option)}>
                <StyleDragBox>
                    {cardList.length > 0
                        ? cardList.map((item) => {
                              return <div>{item}</div>;
                          })
                        : "select words and drag here"}
                </StyleDragBox>
            </StyledDrag>
        </>
    );
}

const StyledP = styled.p`
    text-align: center;
    font-weight: 400;
    font-size: 28px;
    color: #4c4859;
    margin: 50px 0;
`;

const StyledWrapper = styled.div`
    width: 813px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const StyleDragBox = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 7px;
`;

const StyledDrag = styled.div`
    width: 243px;
    height: 124px;
    border: 1px dashed #a8a2a2;
    border-radius: 4.62335px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    margin: 30px 0 0 570px;
    font-weight: 400;
    font-size: 14px;
    :hover {
        background: rgba(58, 16, 229, 0.1);
        border: 1px dashed #3a10e5;
    }
`;

const StyledWordDiv = styled.div`
    height: 41px;
    padding: 10px 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border: 1.53px solid #d4d0d0;
    border-radius: 8px;
    cursor: grab;
    :hover {
        border: 2px solid #3a10e5;
    }
    :active {
        border: none;
        outline: none;
        background: #3a10e5;
        color: #ffffff;
    }
    &.option_disable {
        opacity: 0.5;
        background: gray;
        pointer-events: none;
    }
`;
