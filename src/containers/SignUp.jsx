import React from "react";

import { Box } from "@mui/system";
import { baseAxios } from "api/axios-config";
import { InputUi, CheckboxUi, ButtonUi, PasswordInputUi } from "components/UI";
import { userRequest } from "features/authSlice";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RoutesUrl, UsersRole } from "routes/constants";
import { getUserInfo, userSave } from "services/saveUser";
import styled from "styled-components";

import { REGISTRATION } from "utils/constants/api";

import Logo from "../assets/images/AuthLogo.svg";
import google from "../assets/images/google.svg";

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        reset,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const makeIsHave = (data) => {
        if (data?.role === UsersRole.client) navigate("/home");
        if (data?.role === UsersRole.admin) navigate("/admin");
    };

    async function onSubmit(userInfo) {
        try {
            const { data } = await baseAxios.post(REGISTRATION, userInfo);
            dispatch(userRequest(data));
            userSave(data);
            makeIsHave(data);
        } catch (error) {
            console.log(error);
        }
    }
    React.useEffect(() => {
        const resUser = getUserInfo();
        makeIsHave(resUser);
    }, []);

    return (
        <SignInMain>
            <SignInBox>
                <SignInWrapper>
                    <SignInHead>
                        <div>
                            <img src={Logo} alt="logo" />
                        </div>
                        <h3>Create an Account</h3>
                    </SignInHead>
                    <form>
                        <Controller
                            name="firstName"
                            control={control}
                            rules={{
                                required: "This field is required",
                            }}
                            render={({ field: { onChange } }) => {
                                return (
                                    <InputUi
                                        handleChange={onChange}
                                        sx={{ width: "100%", marginTop: "20px" }}
                                        colorlabeltextandborderandhover="rgba(58, 16, 229, 1)"
                                        colortext="rgba(117, 117, 117, 1)"
                                        forInput={{
                                            label: "First name",
                                            error: !!errors?.firstName,
                                            name: "first_name",
                                        }}
                                    />
                                );
                            }}
                        />
                        {errors.firstName && (
                            <ErrorMessage> {errors.firstName.message} </ErrorMessage>
                        )}
                        <Controller
                            name="lastName"
                            control={control}
                            rules={{
                                required: "This field is required",
                            }}
                            render={({ field: { onChange } }) => {
                                return (
                                    <InputUi
                                        handleChange={onChange}
                                        sx={{ width: "100%", marginTop: "20px" }}
                                        colorlabeltextandborderandhover="rgba(58, 16, 229, 1)"
                                        colortext="rgba(117, 117, 117, 1)"
                                        forInput={{
                                            label: "Last Name",
                                            error: !!errors?.lastName,
                                            name: "last_name",
                                        }}
                                    />
                                );
                            }}
                        />
                        {errors.lastName && (
                            <ErrorMessage> {errors.lastName.message} </ErrorMessage>
                        )}
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: "This field is required",
                                pattern: {
                                    value: /^[\w]+@([\w-]+\.)+[\w-]{1,10}$/,
                                    message: "Введите правильный электронный почты",
                                },
                            }}
                            render={({ field: { onChange } }) => {
                                return (
                                    <InputUi
                                        handleChange={onChange}
                                        sx={{ width: "100%", marginTop: "20px" }}
                                        colorlabeltextandborderandhover="rgba(58, 16, 229, 1)"
                                        colortext="rgba(117, 117, 117, 1)"
                                        forInput={{
                                            label: "Email",
                                            error: !!errors?.email,
                                            name: "email",
                                        }}
                                    />
                                );
                            }}
                        />
                        {errors.email && <ErrorMessage> {errors.email.message} </ErrorMessage>}
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: "This field is required",
                                minLength: {
                                    value: 6,
                                    message: "Password lenght must be at least 6",
                                },
                            }}
                            render={({ field: { onChange } }) => {
                                return (
                                    <PasswordInputUi
                                        onChange={onChange}
                                        sx={{ width: "100%", marginTop: "20px" }}
                                        colorlabeltextandborderandhover="rgba(58, 16, 229, 1)"
                                        colortext="rgba(117, 117, 117, 1)"
                                        forInput={{
                                            error: !!errors?.password,
                                            label: "Password",
                                            name: "password",
                                        }}
                                    />
                                );
                            }}
                        />
                        {errors.password && (
                            <ErrorMessage> {errors.password.message} </ErrorMessage>
                        )}

                        <Box
                            sx={{
                                marginTop: "20px",
                                marginBottom: "30px",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}>
                            <CheckboxUi boxcolor="blue" label="To remember me" />
                        </Box>
                        <ButtonUi
                            onClick={handleSubmit(onSubmit)}
                            maxheight="52px"
                            variant="contained"
                            maxwidth="100%"
                            text="SIGN IN"
                        />
                    </form>
                    <SignInWithGoogleBox>
                        <Link to="sign-up">
                            <span>
                                <img src={google} alt="google" />
                            </span>
                            <span>SIGN UP WITH GOOGLE</span>
                        </Link>
                    </SignInWithGoogleBox>
                    <IsAccaunt>
                        Dont have an account? <Link to={RoutesUrl.SignIn}>Register</Link>
                    </IsAccaunt>
                </SignInWrapper>
            </SignInBox>
        </SignInMain>
    );
};

export default SignIn;

const SignInMain = styled.div`
    background: linear-gradient(90.76deg, #6b0fa9 0.74%, #520fb6 88.41%);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ErrorMessage = styled.small`
    color: red;
`;

const SignInBox = styled.div`
    background: #fff;
    max-width: 616px;
    width: 100%;
    border-radius: 10px;
    padding: 66px 58px 64px;
    transform: scale(0.8);
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