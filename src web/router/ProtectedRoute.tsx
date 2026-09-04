import {
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import type { UserRole } from "../services/auth";

interface ProtectedRouteProps {
  roles?: UserRole[];
}

export default function ProtectedRoute({
  roles,
}: ProtectedRouteProps) {
  const {
    user,
    loading,
  } = useAuth();

  const location =
    useLocation();

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#07090b",
          color: "#c8ff38",
          fontFamily:
            '"DM Sans", sans-serif',
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        ARC / AUTHENTICATING
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location,
        }}
      />
    );
  }

  if (
    roles &&
    !roles.includes(user.role)
  ) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  return <Outlet />;
}