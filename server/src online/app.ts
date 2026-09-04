import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

import { env } from "./config/env";
import authRoutes from "./routes/auth.routes";

const app = express();

app.disable("x-powered-by");

app.use(
  helmet(),
);

app.use(
  cors({
    origin: env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use(
  express.json({
    limit: "1mb",
  }),
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "1mb",
  }),
);

app.use(
  cookieParser(),
);

/* =========================================================
   HEALTH CHECK
========================================================= */

app.get(
  "/api/health",
  (_req, res) => {
    res.status(200).json({
      status: "ok",
      service: "arc-api",
      timestamp:
        new Date().toISOString(),
    });
  },
);

/* =========================================================
   AUTH ROUTES
========================================================= */

app.use(
  "/api/auth",
  authRoutes,
);

/* =========================================================
   404
========================================================= */

app.use(
  (_req, res) => {
    res.status(404).json({
      message:
        "Endpoint não encontrado.",
    });
  },
);

/* =========================================================
   ERROR HANDLER
========================================================= */

app.use(
  (
    error: unknown,
    _req,
    res,
    _next,
  ) => {
    console.error(
      "UNHANDLED_ERROR",
      error,
    );

    res.status(500).json({
      message:
        "Erro interno do servidor.",
    });
  },
);

export default app;