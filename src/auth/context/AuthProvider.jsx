import { Security } from "@okta/okta-react";
import { useNavigate } from "react-router-dom";
import { toRelativeUrl } from "@okta/okta-auth-js";

import oktaAuth from "../okta/oktaAuth";

function AuthProvider({ children }) {
  const navigate = useNavigate();

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    navigate(
      toRelativeUrl(originalUri || "/", window.location.origin),
      { replace: true }
    );
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUri}
    >
      {children}
    </Security>
  );
}

export default AuthProvider;