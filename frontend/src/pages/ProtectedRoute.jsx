import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function ProtectedRoute() {
  //TODO: use Context API to get the current user (code below is to simulate the same behavior when using Context API)
  const user = true;

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
