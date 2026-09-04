import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import App from "../App";
import LoginPage from "../pages/auth/LoginPage";
import ProtectedRoute from "./ProtectedRoute";

function DashboardPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "40px",
        background: "#07090b",
        color: "#f5f6f1",
        fontFamily:
          '"DM Sans", sans-serif',
      }}
    >
      <div>
        <span
          style={{
            color: "#c8ff38",
            fontSize: "10px",
            letterSpacing: ".14em",
          }}
        >
          ARC / DASHBOARD
        </span>

        <h1
          style={{
            margin: "14px 0 0",
            fontFamily:
              '"Space Grotesk", sans-serif',
            fontSize:
              "clamp(42px, 7vw, 88px)",
            lineHeight: ".9",
            letterSpacing: "-.07em",
          }}
        >
          Área privada.
        </h1>

        <p
          style={{
            marginTop: "20px",
            color: "#8d969d",
            fontSize: "13px",
          }}
        >
          Autenticação funcionando.
        </p>
      </div>
    </main>
  );
}

export default function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={<App />}
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route element={<ProtectedRoute />}>
        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />
      </Route>

      <Route
        path="*"
        element={
          <Navigate
            to="/"
            replace
          />
        }
      />
    </Routes>
  );
}