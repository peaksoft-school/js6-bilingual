import React from "react";

import { Box } from "@mui/system";
import { google, logoSignIn } from "assets/images";

import { ButtonUi, Checkbox, Input, PasswordInput } from "components/UI";
import { auth } from "firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { RoutesUrl } from "routes/constants";

import styled from "styled-components";
// import { auth } from "firebase.config";

const SignIn = () => {
    const [user, setUser] = React.useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
    });

    const postData = async () => {
        const createUser = await createUserWithEmailAndPassword(
            auth,
            user.email,
            user.password,
            user.name,
            user.lastName
        );
        console.log(createUser);
    };

    return (
        <SignInMain>
            <SignInBox>
                <SignInWrapper>
                    <SignInHead>
                        <div>
                            <img src={logoSignIn} alt="logo" />
                        </div>
                        <h3>Create an Account</h3>
                    </SignInHead>
                    <form>
                        <Input
                            key="input_name"
                            handleChange={(e) =>
                                setUser((prev) => ({ ...prev, name: e.target.value }))
                            }
                            sx={{ width: "100%" }}
                            colorlabeltextandborderandhover="rgba(58, 16, 229, 1)"
                            colortext="rgba(117, 117, 117, 1)"
                            forInput={{ label: "Name" }}
                        />

                        <Input
                            key="input_lastName"
                            handleChange={(e) =>
                                setUser((prev) => ({ ...prev, lastName: e.target.value }))
                            }
                            sx={{ width: "100%", marginTop: "20px" }}
                            colorlabeltextandborderandhover="rgba(58, 16, 229, 1)"
                            colortext="rgba(117, 117, 117, 1)"
                            forInput={{ label: "Last Name" }}
                        />

                        <Input
                            key="input_email"
                            handleChange={(e) =>
                                setUser((prev) => ({ ...prev, email: e.target.value }))
                            }
                            sx={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}
                            colorlabeltextandborderandhover="rgba(58, 16, 229, 1)"
                            colortext="rgba(117, 117, 117, 1)"
                            forInput={{ label: "Email" }}
                        />

                        <PasswordInput
                            onChange={(e) =>
                                setUser((prev) => ({ ...prev, password: e.target.value }))
                            }
                        />

                        <Box sx={{ marginTop: "30px" }}>
                            <ButtonUi
                                handleClick={postData}
                                maxheight="52px"
                                variant="contained"
                                maxwidth="100%"
                                text="SIGN UP"
                            />
                        </Box>
                    </form>
                    <SignInWithGoogleBox>
                        <Link to={RoutesUrl.SignUp}>
                            <span>
                                <img src={google} alt="google" />
                            </span>
                            <span>SIGN UP WITH GOOGLE</span>
                        </Link>
                    </SignInWithGoogleBox>
                    <IsAccaunt>
                        ALREADY HAVE AN ACCOUNT? <Link to={RoutesUrl.SignIn}>LOG IN</Link>{" "}
                    </IsAccaunt>
                </SignInWrapper>
            </SignInBox>
        </SignInMain>
    );
};

export default SignIn;

const SignInMain = styled.div`
    background: linear-gradient(90.76deg, #6b0fa9 0.74%, #520fb6 88.41%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SignInBox = styled.div`
    background: #fff;
    max-width: 616px;
    width: 100%;
    border-radius: 10px;
    padding: 66px 58px 64px;
`;

const SignInWrapper = styled.div``;

const SignInHead = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;

    h3 {
        font-size: 24px;
        color: #4c4859;
        margin-top: 12px;
    }
`;

const SignInWithGoogleBox = styled.div`
    text-align: center;
    margin-top: 34px;
    margin-bottom: 24px;

    a {
        cursor: pointer;
        padding: 14px 20px;
        border: 1px solid #bdbdbd;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        font-size: 14px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: all 0.4s ease;

        &:hover {
            background-color: #3a10e5;
            color: white;
        }

        span:first-child {
            display: contents;
        }
    }
`;

const IsAccaunt = styled.p`
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #757575;
    font-weight: 500;

    a {
        color: #3a10e5;
    }
`;
