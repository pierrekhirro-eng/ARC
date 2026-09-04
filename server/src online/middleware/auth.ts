import type {
  NextFunction,
  Request,
  Response,
} from "express";

import jwt from "jsonwebtoken";

import { env } from "../config/env";
import { prisma } from "../lib/prisma";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: "CLIENTE" | "OPERADOR" | "ADMIN";
};

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

type JwtPayload = {
  sub: string;
  iat?: number;
  exp?: number;
};

export async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const token = req.cookies?.arc_session;

    if (!token) {
      return res.status(401).json({
        message: "Não autenticado.",
      });
    }

    const payload = jwt.verify(
      token,
      env.JWT_SECRET,
    ) as JwtPayload;

    if (!payload.sub) {
      return res.status(401).json({
        message: "Sessão inválida.",
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: payload.sub,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "Usuário não encontrado.",
      });
    }

    req.user = user;

    next();
  } catch {
    return res.status(401).json({
      message: "Sessão inválida ou expirada.",
    });
  }
}

export function requireRole(
  ...roles: AuthUser["role"][]
) {
  return (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    if (!req.user) {
      return res.status(401).json({
        message: "Não autenticado.",
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Você não possui permissão.",
      });
    }

    next();
  };
}