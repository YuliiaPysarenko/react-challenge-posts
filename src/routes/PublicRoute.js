import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { authSelectors } from "../redux/auth";

export default function PublicRoute({ redirectTo = "/posts" }) {
  const userData = useSelector(authSelectors.selectUser);
  const shouldRedirect = userData;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
}
