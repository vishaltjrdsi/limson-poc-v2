import oktaAuth from "../okta/oktaAuth";

class TokenService {
  async getAccessToken() {
    return await oktaAuth.getAccessToken();
  }

  async getIdToken() {
    return await oktaAuth.getIdToken();
  }

  async clear() {
    await oktaAuth.signOut();
  }
}

export default new TokenService();