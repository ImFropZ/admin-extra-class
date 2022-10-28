import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const isAuthenticated = localStorage.getItem("auth");

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
