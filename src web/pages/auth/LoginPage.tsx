import {
  ArrowRight,
  ArrowUpRight,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

import {
  type FormEvent,
  useEffect,
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import "./LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const {
    login,
    isAuthenticated,
  } = useAuth();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [remember, setRemember] =
    useState(false);

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  /*
   * Se o usuário já estiver autenticado,
   * não faz sentido permanecer no login.
   */
  useEffect(() => {
    if (isAuthenticated) {
      navigate(
        "/dashboard",
        {
          replace: true,
        },
      );
    }
  }, [
    isAuthenticated,
    navigate,
  ]);

  /*
   * Recupera apenas a preferência
   * visual do "lembrar neste dispositivo".
   *
   * A sessão real continua sendo
   * controlada pelo cookie httpOnly
   * criado pelo backend.
   */
  useEffect(() => {
    const savedPreference =
      localStorage.getItem(
        "arc_remember_login",
      );

    setRemember(
      savedPreference === "true",
    );
  }, []);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (loading) {
      return;
    }

    setError("");

    const normalizedEmail =
      email.trim().toLowerCase();

    if (!normalizedEmail) {
      setError(
        "Digite seu e-mail.",
      );

      return;
    }

    if (!password) {
      setError(
        "Digite sua senha.",
      );

      return;
    }

    setLoading(true);

    try {
      /*
       * LOGIN REAL
       *
       * Aqui o AuthContext chama:
       *
       * POST /api/auth/login
       *
       * O backend verifica o usuário,
       * confere a senha e cria a sessão.
       */
      await login(
        normalizedEmail,
        password,
      );

      if (remember) {
        localStorage.setItem(
          "arc_remember_login",
          "true",
        );
      } else {
        localStorage.removeItem(
          "arc_remember_login",
        );
      }

      navigate(
        "/dashboard",
        {
          replace: true,
        },
      );
    } catch (loginError) {
      if (
        loginError instanceof Error
      ) {
        setError(
          loginError.message,
        );
      } else {
        setError(
          "Não foi possível realizar o login.",
        );
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="arc-login">
      <div className="arc-login-grid" />
      <div className="arc-login-glow" />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="arc-login-header">
        <Link
          to="/"
          className="arc-login-brand"
        >
          <span className="arc-login-brand-mark">
            A
          </span>

          <span>ARC</span>
        </Link>

        <Link
          to="/"
          className="arc-login-back"
        >
          Voltar para o site

          <ArrowUpRight
            size={14}
            strokeWidth={1.5}
          />
        </Link>
      </header>

      {/* =====================================================
          LAYOUT
      ====================================================== */}

      <div className="arc-login-layout">

        {/* ===================================================
            LEFT
        ==================================================== */}

        <section className="arc-login-intro">

          <div className="arc-login-intro-top">
            <span className="arc-login-code">
              ARC / AUTH / 01
            </span>

            <span className="arc-login-live">
              <i />
              SYSTEM ONLINE
            </span>
          </div>

          <div className="arc-login-intro-main">

            <span className="arc-login-kicker">
              CLIENT ACCESS
            </span>

            <h1>
              Seu espaço.
              <br />
              <em>
                Seu projeto.
              </em>
            </h1>

            <p>
              Entre para acompanhar seus
              projetos, conversar com a equipe
              e acessar tudo que está sendo
              construído para você.
            </p>

          </div>

          {/* =================================================
              VISUAL SYSTEM
          ================================================== */}

          <div className="arc-login-system">

            <div className="arc-login-system-top">
              <span>
                ARC / SECURE ACCESS
              </span>

              <span>
                2026
              </span>
            </div>

            <div className="arc-login-system-body">

              <div className="arc-login-system-orbit orbit-one" />

              <div className="arc-login-system-orbit orbit-two" />

              <div className="arc-login-system-core">
                <span />
              </div>

              <div className="arc-login-system-line line-x" />

              <div className="arc-login-system-line line-y" />

              <span className="system-node node-top" />

              <span className="system-node node-right" />

              <span className="system-node node-bottom" />

              <span className="system-node node-left" />

            </div>

            <div className="arc-login-system-bottom">
              <span>
                ENCRYPTED SESSION
              </span>

              <span>
                SECURE
              </span>
            </div>

          </div>

        </section>

        {/* ===================================================
            LOGIN PANEL
        ==================================================== */}

        <section className="arc-login-panel">

          <div className="arc-login-panel-head">

            <div>
              <span>
                WELCOME BACK
              </span>

              <h2>
                Entrar
              </h2>
            </div>

            <div className="arc-login-panel-index">
              01
            </div>

          </div>

          {/* =================================================
              FORM
          ================================================== */}

          <form
            className="arc-login-form"
            onSubmit={handleSubmit}
            noValidate
          >

            {/* EMAIL */}

            <div className="arc-login-field">

              <label htmlFor="email">
                E-mail
              </label>

              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="voce@empresa.com"
                value={email}
                onChange={(event) =>
                  setEmail(
                    event.target.value,
                  )
                }
                disabled={loading}
                aria-invalid={
                  Boolean(error)
                }
              />

            </div>

            {/* PASSWORD */}

            <div className="arc-login-field">

              <div className="arc-login-field-label">

                <label htmlFor="password">
                  Senha
                </label>

                <Link to="/recuperar-senha">
                  Esqueceu?
                </Link>

              </div>

              <input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(event) =>
                  setPassword(
                    event.target.value,
                  )
                }
                disabled={loading}
                aria-invalid={
                  Boolean(error)
                }
              />

            </div>

            {/* REMEMBER */}

            <label className="arc-login-remember">

              <input
                type="checkbox"
                checked={remember}
                onChange={(event) =>
                  setRemember(
                    event.target.checked,
                  )
                }
                disabled={loading}
              />

              <span className="arc-login-checkbox">
                <span />
              </span>

              <span>
                Lembrar neste dispositivo
              </span>

            </label>

            {/* ERROR */}

            {error && (
              <div
                className="arc-login-error"
                role="alert"
                aria-live="polite"
              >
                {error}
              </div>
            )}

            {/* SUBMIT */}

            <button
              type="submit"
              className="arc-login-submit"
              disabled={loading}
              aria-busy={loading}
            >
              <span>
                {loading
                  ? "AUTENTICANDO..."
                  : "ENTRAR NO ARC"}
              </span>

              <ArrowRight
                size={17}
                strokeWidth={1.7}
              />
            </button>

          </form>

          {/* =================================================
              DIVIDER
          ================================================== */}

          <div className="arc-login-divider">

            <span />

            <small>
              OU
            </small>

            <span />

          </div>

          {/* =================================================
              CREATE ACCOUNT
          ================================================== */}

          <div className="arc-login-create">

            <div>

              <span>
                AINDA NÃO POSSUI CONTA?
              </span>

              <strong>
                Crie seu acesso
              </strong>

            </div>

            <Link to="/cadastro">

              Criar conta

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
              />

            </Link>

          </div>

          {/* =================================================
              SECURITY
          ================================================== */}

          <div className="arc-login-security">

            <ShieldCheck
              size={15}
              strokeWidth={1.5}
            />

            <div>

              <strong>
                Ambiente seguro
              </strong>

              <span>
                Seus dados são protegidos
                durante a sessão.
              </span>

            </div>

            <LockKeyhole
              size={14}
              strokeWidth={1.5}
            />

          </div>

        </section>

      </div>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="arc-login-footer">

        <span>
          ARC / SECURE CLIENT ACCESS
        </span>

        <div>
          <span />
          ENCRYPTED
        </div>

        <span>
          01 / 01
        </span>

      </footer>

    </main>
  );
}