import { Navigate, Outlet } from "react-router-dom";

function UnauthorizedRoute() {
  const isAuthenticated = localStorage.getItem("auth");

  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default UnauthorizedRoute;
