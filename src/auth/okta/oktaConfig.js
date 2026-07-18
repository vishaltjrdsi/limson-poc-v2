const oktaConfig = {
    issuer: import.meta.env.VITE_OKTA_ISSUER,

    clientId: import.meta.env.VITE_OKTA_CLIENT_ID,

    redirectUri: import.meta.env.VITE_OKTA_REDIRECT_URI,

    scopes: import.meta.env.VITE_OKTA_SCOPES.split(" "),
};

export default oktaConfig;