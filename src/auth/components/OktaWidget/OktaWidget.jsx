import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import OktaSignIn from "@okta/okta-signin-widget";

import oktaConfig from "../../okta/oktaConfig";
import oktaAuth from "../../okta/oktaAuth";

import "@okta/okta-signin-widget/css/okta-sign-in.min.css";
import "./oktaWidget.css";

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
      oktaAuth,
      useInteractionCodeFlow: true,
    });

    signIn
      .showSignInToGetTokens({
        el: widgetRef.current,
      })
      .then(async (tokens) => {
        oktaAuth.tokenManager.setTokens(tokens);

        navigate("/", {
          replace: true,
        });
      })
      .catch((err) => {
        console.error("Okta Widget Error:", err);
      });

    return () => signIn.remove();
  }, [navigate]);

  return (
    <div
      id="okta-login-container"
      ref={widgetRef}
    />
  );
}

export default OktaWidget;