import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import OktaSignIn from "@okta/okta-signin-widget";

import oktaConfig from "../okta/oktaConfig";
import oktaAuth from "../okta/oktaAuth";

function OktaWidget() {
  const widgetRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const signIn = new OktaSignIn({
      baseUrl: oktaConfig.baseUrl,
      clientId: oktaConfig.clientId,
      issuer: oktaConfig.issuer,
      redirectUri: oktaConfig.redirectUri,
      scopes: oktaConfig.scopes,
      useInteractionCodeFlow: true,
    });

    signIn
      .showSignInToGetTokens({
        el: widgetRef.current,
      })
      .then(async (tokens) => {
        // ⭐ This is the missing piece
        oktaAuth.tokenManager.setTokens(tokens);

        // Navigate into your app
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.error("Okta Widget Error:", err);
      });

    return () => signIn.remove();
  }, [navigate]);

  return <div ref={widgetRef} />;
}

export default OktaWidget;