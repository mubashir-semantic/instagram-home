import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

interface RootState {
  auth: {
    isAuthenticated: boolean;
  };
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;