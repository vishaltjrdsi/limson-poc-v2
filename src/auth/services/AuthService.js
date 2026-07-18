import oktaAuth from "../okta/oktaAuth";

class AuthService {

    login() {
        return oktaAuth.signInWithRedirect();
    }

    logout() {
        return oktaAuth.signOut();
    }

    async getUser() {
        return await oktaAuth.getUser();
    }

}

export default new AuthService();