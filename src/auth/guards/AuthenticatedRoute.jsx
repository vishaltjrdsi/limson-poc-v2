import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

function AuthenticatedRoute({ children }) {
  const auth = useAuth();

  console.log("Auth State:", auth);

  useEffect(() => {
    if (!auth.loading && !auth.isAuthenticated) {
      auth.login();
    }
  }, [auth]);

  if (auth.loading) {
    return <div>Loading...</div>;
  }

  if (!auth.isAuthenticated) {
    return <div>Redirecting...</div>;
  }

  return children;
}
export default AuthenticatedRoute;