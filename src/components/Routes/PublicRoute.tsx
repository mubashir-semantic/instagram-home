import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface PublicRouteProps {
  children: React.ReactNode;
}

interface RootState {
  auth: {
    isAuthenticated: boolean;
  };
}

function PublicRoute({ children }: PublicRouteProps) {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return children;
}

export default PublicRoute;