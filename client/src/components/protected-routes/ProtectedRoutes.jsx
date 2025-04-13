import { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { useNotification } from "../notifications/Notifications";

export default function ProtectedRoutes({ children }) {
  const { _id } = useContext(UserContext);
  const { showNotification } = useNotification();

  if (!_id) {
    showNotification("You must login to see this page!", "error");
    return <Navigate to="/login" replace />;
  }

  return children;
}