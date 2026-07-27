import {Navigate} from "react-router-dom";

function ProtectedRoute({ children }) {
  // const isLoggedIn = localStorage.getItem("isLoggedIn");
  const isLoggedIn = document.cookie.includes("isLoggedIn=true");

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;