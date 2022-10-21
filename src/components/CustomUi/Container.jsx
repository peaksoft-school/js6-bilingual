import React from "react";

import styled from "styled-components";

const Container = ({ children }) => {
    return <ContainerStyle>{children}</ContainerStyle>;
};

const ContainerStyle = styled.div`
    max-width: 1230px;
    width: 100%;
    margin: 0 auto;
`;

export default Container;
