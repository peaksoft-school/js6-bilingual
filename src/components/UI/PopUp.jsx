import React from "react";

import { SuccessSaveIcon } from "assets";

import { ReactNotifications, Store } from "react-notifications-component";
import styled, { css } from "styled-components";

import "react-notifications-component/dist/theme.css";

const PopUp = ({ forCss, typeIs, titleIs, textIs }) => {
    React.useEffect(() => {
        const notification = {
            title: titleIs,
            message: textIs,
            type: typeIs,
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated animate__fadeIn"],
            animationOut: ["animate__animated animate__fadeOut"],
        };
        Store.addNotification({
            ...notification,
        });
    }, []);
    return (
        <div>
            <Notification {...forCss} typeIs={typeIs} />
        </div>
    );
};

const Notification = styled(ReactNotifications)`
    ${({
        width = 311,
        Bg = "rgba(234, 251, 231, 1)",
        BgDanger = "#FFF1F0",
        titleColor = "#4C4859",
        textColor = "#646464",
        typeIs,
    }) => {
        return css`
            .rnc__notification {
                width: 100%;
                max-width: ${width}px;
            }
            .rnc__notification-item {
                border-left: none;
                padding: 24px 0;
            }
            .rnc__notification-title {
                margin-top: 0;
                font-family: cursive;
                font-size: 16px;
                line-height: 19px;
                color: ${titleColor};

                ${typeIs === "success"
                    ? css`
                          &::before {
                              content: "";
                              display: inline-block;
                              width: 20px;
                              height: 20px;
                              position: absolute;
                              top: 0px;
                              left: 16px;
                              background: url(${SuccessSaveIcon});
                              background-size: contain;
                              background-repeat: no-repeat;
                          }
                      `
                    : css`
                          &::before {
                              content: "";
                              display: inline-block;
                              width: 3px;
                              height: 100%;
                              position: absolute;
                              top: 0px;
                              left: 8px;
                              border-radius: 6px;
                              background: red;
                          }
                      `}
            }
            .rnc__notification-message {
                font-family: cursive;
                font-weight: 400;
                font-size: 16px;
                line-height: 18px;
                color: ${textColor};
                margin-bottom: 0;
                line-height: 18.08px;
            }

            .rnc__notification-item--success {
                background: ${Bg};
                border: 1px solid #8cdb95;
                border-radius: 4px;
            }

            .rnc__notification-item--danger {
                background: ${BgDanger};
                border: 1px solid rgba(246, 20, 20, 0.4);
                border-radius: 4px;
            }

            .rnc__notification-content {
                position: relative;
                ${typeIs === "success" ? "padding-left: 60px" : "padding-left: 32px"};
                padding-top: 0px;
                padding-bottom: 0px;
            }
        `;
    }}
`;

export default PopUp;
