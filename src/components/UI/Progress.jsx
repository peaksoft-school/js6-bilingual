import * as React from "react";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

import { Typography } from "@mui/material";

export default function LinearDeterminate({ second }) {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 1) {
                    return 0;
                }
                const diff = Math.random() * 1;
                return Math.min(oldProgress + diff, 100);
            });
        }, second);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <StyledBox>
            <StyledTypografy>{second}</StyledTypografy>
            <LinearProgress variant="determinate" value={progress} />
        </StyledBox>
    );
}

const StyledBox = styled(Box)`
    & .MuiLinearProgress-determinate {
        width: 100%;
        border-radius: 10px;
        background-color: #d4d0d0;
    }
    & .MuiLinearProgress-bar {
        background: linear-gradient(270deg, #3a10e5 29.37%, #6746ef 84.8%);
        border-radius: 3.5px;
    }
`;
const StyledTypografy = styled(Typography)`
    height: 24px;
    width: 61px;
    left: 313px;
    top: 140px;
    border-radius: nullpx;
    font-family: "DINNextRoundedLTW01-Regular";
    font-style: normal;
    font-weight: 550;
    font-size: 32px;
    line-height: 24px;
    color: #4c4859;
    margin: 10px;
`;
