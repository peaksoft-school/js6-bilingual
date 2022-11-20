import { store } from "store";

import { JWT_TOKEN_KEY } from "utils/constants/general";

export const getToken = () => {
    return store.getState().auth?.user?.token;
};

export const logout = () => {
    localStorage.removeItem(JWT_TOKEN_KEY);
    // dispatch for clear the token in store
};
