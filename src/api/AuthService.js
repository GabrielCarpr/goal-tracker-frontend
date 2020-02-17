const XSRF_TOKEN_KEY = "xsrf-token";

export const getXsrf = () => {
    return window.localStorage.getItem(XSRF_TOKEN_KEY);
};

export const setXsrf = token => {
    window.localStorage.setItem(XSRF_TOKEN_KEY, token);
};

export const destroyXsrf = () => {
    window.localStorage.removeItem(XSRF_TOKEN_KEY);
};

export const destroyJwt = () => {
    document.cookie = "Authorization=; Max-Age=-99999999;";
};

export default { getXsrf, setXsrf, destroyXsrf, destroyJwt };