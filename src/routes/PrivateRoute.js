import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { authSelectors } from "../redux/auth";

export default function PrivateRoute() {
  const userData = useSelector(authSelectors.selectUser);
  return userData ? <Outlet /> : <Navigate to="/login" />;
}
