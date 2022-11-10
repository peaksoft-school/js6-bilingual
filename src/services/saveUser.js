import React from "react";

import Cookies from "js-cookie";

export const userSave = (userInfo) => {
    if (userInfo) {
        Cookies.set("user", JSON.stringify({ role: userInfo.role, token: userInfo.token }));
    }
};

export const getUserInfo = () => {
    const res = Cookies.get("user");
    if (res) {
        const user = JSON.parse(res);
        return user;
    }
    return res;
};
