import { Router } from "express";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";

import { env } from "../config/env";
import { prisma } from "../lib/prisma";
import { requireAuth } from "../middleware/auth";

const router = Router();

const COOKIE_NAME = "arc_session";

const cookieOptions = {
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: "lax" as const,
  maxAge: 1000 * 60 * 60 * 24 * 7,
  path: "/",
};

function createToken(userId: string) {
  return jwt.sign(
    {
      sub: userId,
    },
    env.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );
}

/* =========================================================
   REGISTER
========================================================= */

const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2)
    .max(100),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email(),

  password: z
    .string()
    .min(8)
    .max(100),
});

router.post(
  "/register",
  async (req, res) => {
    const result =
      registerSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message:
          "Confira os dados informados.",
        errors:
          result.error.flatten()
            .fieldErrors,
      });
    }

    const {
      name,
      email,
      password,
    } = result.data;

    try {
      const existingUser =
        await prisma.user.findUnique({
          where: {
            email,
          },
        });

      if (existingUser) {
        return res.status(409).json({
          message:
            "Já existe uma conta com este e-mail.",
        });
      }

      const passwordHash =
        await bcrypt.hash(
          password,
          12,
        );

      const user =
        await prisma.user.create({
          data: {
            name,
            email,
            passwordHash,
            role: "CLIENTE",
          },
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        });

      const token =
        createToken(user.id);

      res.cookie(
        COOKIE_NAME,
        token,
        cookieOptions,
      );

      return res.status(201).json({
        user,
      });
    } catch (error) {
      console.error(
        "REGISTER_ERROR",
        error,
      );

      return res.status(500).json({
        message:
          "Não foi possível criar sua conta.",
      });
    }
  },
);

/* =========================================================
   LOGIN
========================================================= */

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email(),

  password: z
    .string()
    .min(1)
    .max(100),
});

router.post(
  "/login",
  async (req, res) => {
    const result =
      loginSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message:
          "E-mail ou senha inválidos.",
      });
    }

    const {
      email,
      password,
    } = result.data;

    try {
      const user =
        await prisma.user.findUnique({
          where: {
            email,
          },
        });

      if (!user) {
        return res.status(401).json({
          message:
            "E-mail ou senha incorretos.",
        });
      }

      const passwordMatches =
        await bcrypt.compare(
          password,
          user.passwordHash,
        );

      if (!passwordMatches) {
        return res.status(401).json({
          message:
            "E-mail ou senha incorretos.",
        });
      }

      const token =
        createToken(user.id);

      res.cookie(
        COOKIE_NAME,
        token,
        cookieOptions,
      );

      return res.json({
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } catch (error) {
      console.error(
        "LOGIN_ERROR",
        error,
      );

      return res.status(500).json({
        message:
          "Não foi possível realizar o login.",
      });
    }
  },
);

/* =========================================================
   CURRENT USER
========================================================= */

router.get(
  "/me",
  requireAuth,
  async (req, res) => {
    return res.json({
      user: req.user,
    });
  },
);

/* =========================================================
   LOGOUT
========================================================= */

router.post(
  "/logout",
  (_req, res) => {
    res.clearCookie(
      COOKIE_NAME,
      {
        httpOnly: true,
        secure:
          env.NODE_ENV ===
          "production",
        sameSite: "lax",
        path: "/",
      },
    );

    return res.json({
      message:
        "Sessão encerrada.",
    });
  },
);

export default router;