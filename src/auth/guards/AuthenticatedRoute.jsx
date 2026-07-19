import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function AuthenticatedRoute({ children }) {

    const auth = useAuth();

    if (auth.loading) {
        return <div>Loading...</div>;
    }

    if (!auth.isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default AuthenticatedRoute;