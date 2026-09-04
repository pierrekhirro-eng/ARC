import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import type {
  AuthUser,
  UserRole,
} from "../services/auth";

import {
  getCurrentUser,
  login as loginRequest,
  logout as logoutRequest,
} from "../services/auth";

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  isAuthenticated: boolean;

  login: (
    email: string,
    password: string,
  ) => Promise<AuthUser>;

  logout: () => Promise<void>;

  refreshUser: () => Promise<
    AuthUser | null
  >;

  hasRole: (
    ...roles: UserRole[]
  ) => boolean;
}

const AuthContext =
  createContext<AuthContextValue | undefined>(
    undefined,
  );

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] =
    useState<AuthUser | null>(null);

  const [loading, setLoading] =
    useState(true);

  const refreshUser =
    useCallback(async () => {
      try {
        const currentUser =
          await getCurrentUser();

        setUser(currentUser);

        return currentUser;
      } catch {
        setUser(null);

        return null;
      }
    }, []);

  useEffect(() => {
    let mounted = true;

    async function initializeAuth() {
      try {
        const currentUser =
          await getCurrentUser();

        if (mounted) {
          setUser(currentUser);
        }
      } catch {
        if (mounted) {
          setUser(null);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    initializeAuth();

    return () => {
      mounted = false;
    };
  }, []);

  const login = useCallback(
    async (
      email: string,
      password: string,
    ) => {
      const authenticatedUser =
        await loginRequest(
          email,
          password,
        );

      setUser(authenticatedUser);

      return authenticatedUser;
    },
    [],
  );

  const logout = useCallback(
    async () => {
      try {
        await logoutRequest();
      } finally {
        setUser(null);
      }
    },
    [],
  );

  const hasRole = useCallback(
    (...roles: UserRole[]) => {
      if (!user) {
        return false;
      }

      return roles.includes(user.role);
    },
    [user],
  );

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      isAuthenticated:
        user !== null,
      login,
      logout,
      refreshUser,
      hasRole,
    }),
    [
      user,
      loading,
      login,
      logout,
      refreshUser,
      hasRole,
    ],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth precisa ser usado dentro de AuthProvider.",
    );
  }

  return context;
}