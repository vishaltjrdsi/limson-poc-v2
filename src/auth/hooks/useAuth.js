import { useOktaAuth } from "@okta/okta-react";

function useAuth() {

    const {
        oktaAuth,
        authState,
    } = useOktaAuth();

    const login = () =>
        oktaAuth.signInWithRedirect();

    const logout = () =>
        oktaAuth.signOut();

    return {

        loading: authState === null || authState === undefined,

        isAuthenticated:
            authState?.isAuthenticated || false,

        user:
            authState?.idToken?.claims || null,

        accessToken:
            authState?.accessToken?.accessToken || null,

        login,

        logout,

    };

}

export default useAuth;