const API_URL =
  import.meta.env.VITE_API_URL ??
  "http://localhost:3001";

export type UserRole =
  | "CLIENTE"
  | "OPERADOR"
  | "ADMIN";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthResponse {
  user: AuthUser;
}

interface ApiErrorResponse {
  message?: string;
}

async function parseResponse<T>(
  response: Response,
): Promise<T> {
  const data =
    (await response.json().catch(
      () => ({}),
    )) as T & ApiErrorResponse;

  if (!response.ok) {
    throw new Error(
      data.message ??
        "Não foi possível concluir a operação.",
    );
  }

  return data;
}

export async function login(
  email: string,
  password: string,
): Promise<AuthUser> {
  const response = await fetch(
    `${API_URL}/api/auth/login`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      credentials: "include",

      body: JSON.stringify({
        email,
        password,
      }),
    },
  );

  const data =
    await parseResponse<AuthResponse>(
      response,
    );

  return data.user;
}

export async function getCurrentUser(): Promise<
  AuthUser | null
> {
  const response = await fetch(
    `${API_URL}/api/auth/me`,
    {
      method: "GET",
      credentials: "include",
    },
  );

  if (response.status === 401) {
    return null;
  }

  const data =
    await parseResponse<AuthResponse>(
      response,
    );

  return data.user;
}

export async function logout(): Promise<void> {
  const response = await fetch(
    `${API_URL}/api/auth/logout`,
    {
      method: "POST",
      credentials: "include",
    },
  );

  await parseResponse<{
    message: string;
  }>(response);
}