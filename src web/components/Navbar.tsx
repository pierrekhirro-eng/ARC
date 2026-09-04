import {
  ArrowUpRight,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import "./Navbar.css";

type NavigationItem = {
  number: string;
  label: string;
  hash: string;
  selectors: string[];
};

const navigation: NavigationItem[] = [
  {
    number: "01",
    label: "Serviços",
    hash: "#services",
    selectors: ["#services"],
  },
  {
    number: "02",
    label: "Como funciona",
    hash: "#how-it-works",
    selectors: [
      "#how-it-works",
      "#process",
    ],
  },
  {
    number: "03",
    label: "Projetos",
    hash: "#projects",
    selectors: [
      "#projects",
      ".selected-projects",
      "#work",
    ],
  },
  {
    number: "04",
    label: "Sobre",
    hash: "#about",
    selectors: [
      "#about",
      "#statement",
      ".statement",
      ".footer",
    ],
  },
];

function findTarget(
  selectors: string[],
): HTMLElement | null {
  for (const selector of selectors) {
    const element =
      document.querySelector<HTMLElement>(
        selector,
      );

    if (element) {
      return element;
    }
  }

  return null;
}

export function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("");

  const [scrollProgress, setScrollProgress] =
    useState(0);

  const ticking = useRef(false);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollTop =
        window.scrollY;

      const documentHeight =
        document.documentElement
          .scrollHeight -
        window.innerHeight;

      const progress =
        documentHeight > 0
          ? scrollTop / documentHeight
          : 0;

      setScrolled(
        scrollTop > 28,
      );

      setScrollProgress(
        Math.min(
          1,
          Math.max(0, progress),
        ),
      );

      const viewportMarker = 170;

      let current = "";

      for (
        let index = 0;
        index < navigation.length;
        index += 1
      ) {
        const item =
          navigation[index];

        const target =
          findTarget(
            item.selectors,
          );

        if (!target) {
          continue;
        }

        const rect =
          target.getBoundingClientRect();

        if (
          rect.top <= viewportMarker &&
          rect.bottom >= viewportMarker
        ) {
          current =
            item.hash;

          break;
        }
      }

      setActiveSection(
        current,
      );

      ticking.current = false;
    };

    const handleScroll = () => {
      if (ticking.current) {
        return;
      }

      ticking.current = true;

      window.requestAnimationFrame(
        updateScrollState,
      );
    };

    updateScrollState();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      handleScroll,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );

      window.removeEventListener(
        "resize",
        handleScroll,
      );
    };
  }, []);

  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent,
    ) => {
      if (
        event.key === "Escape"
      ) {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow =
        "";

      return;
    }

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function scrollToTarget(
    item: NavigationItem,
  ) {
    const target =
      findTarget(
        item.selectors,
      );

    if (!target) {
      return;
    }

    closeMenu();

    const navbarOffset =
      window.innerWidth <= 900
        ? 82
        : 108;

    const targetTop =
      target.getBoundingClientRect()
        .top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: Math.max(
        0,
        targetTop,
      ),
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      item.hash,
    );
  }

  function handleNavigation(
    event: React.MouseEvent<
      HTMLAnchorElement
    >,
    item: NavigationItem,
  ) {
    event.preventDefault();
    scrollToTarget(item);
  }

  return (
    <>
      <header
        className={[
          "arc-navbar",
          scrolled
            ? "arc-navbar-scrolled"
            : "",
          menuOpen
            ? "arc-navbar-open"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="arc-navbar-shell">

          {/* ==================================================
              BRAND
          =================================================== */}

          <a
            href="#top"
            className="arc-navbar-brand"
            onClick={(event) => {
              event.preventDefault();

              closeMenu();

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });

              window.history.replaceState(
                null,
                "",
                "#top",
              );
            }}
          >
            <span className="arc-navbar-brand-mark">
              <span>A</span>

              <i />
            </span>

            <span className="arc-navbar-brand-copy">
              <strong>ARC</strong>

              <small>
                DIGITAL STUDIO
              </small>
            </span>
          </a>

          {/* ==================================================
              CENTER NAV
          =================================================== */}

          <nav
            className="arc-navbar-nav"
            aria-label="Navegação principal"
          >
            {navigation.map(
              (item) => {
                const active =
                  activeSection ===
                  item.hash;

                return (
                  <a
                    key={item.hash}
                    href={item.hash}
                    className={[
                      "arc-navbar-nav-item",
                      active
                        ? "is-active"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={(event) =>
                      handleNavigation(
                        event,
                        item,
                      )
                    }
                  >
                    <span className="arc-navbar-nav-number">
                      {item.number}
                    </span>

                    <span className="arc-navbar-nav-label">
                      {item.label}
                    </span>

                    <span className="arc-navbar-nav-dot" />
                  </a>
                );
              },
            )}
          </nav>

          {/* ==================================================
              RIGHT COMMAND
          =================================================== */}

          <div className="arc-navbar-command">

            <div className="arc-navbar-system">
              <span className="arc-navbar-system-ring">
                <span />
              </span>

              <div>
                <small>
                  SYSTEM
                </small>

                <strong>
                  ONLINE
                </strong>
              </div>
            </div>

            <a
              href="/login"
              className="arc-navbar-login"
            >
              <span>
                Entrar
              </span>

              <ArrowUpRight
                size={13}
                strokeWidth={1.55}
              />
            </a>

            <a
              href="#project"
              className="arc-navbar-project"
              onClick={(event) => {
                event.preventDefault();

                const target =
                  document.querySelector<HTMLElement>(
                    "#project",
                  );

                if (!target) {
                  return;
                }

                closeMenu();

                const top =
                  target.getBoundingClientRect()
                    .top +
                  window.scrollY -
                  108;

                window.scrollTo({
                  top,
                  behavior:
                    "smooth",
                });

                window.history.replaceState(
                  null,
                  "",
                  "#project",
                );
              }}
            >
              <span className="arc-navbar-project-mark">
                <Sparkles
                  size={12}
                  strokeWidth={1.6}
                />
              </span>

              <span>
                Enviar projeto
              </span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.7}
              />
            </a>

          </div>

          {/* ==================================================
              MOBILE BUTTON
          =================================================== */}

          <button
            type="button"
            className="arc-navbar-menu"
            aria-label={
              menuOpen
                ? "Fechar menu"
                : "Abrir menu"
            }
            aria-expanded={
              menuOpen
            }
            onClick={() =>
              setMenuOpen(
                (current) =>
                  !current,
              )
            }
          >
            <span>
              {menuOpen
                ? "FECHAR"
                : "MENU"}
            </span>

            <i>
              {menuOpen ? (
                <X
                  size={18}
                  strokeWidth={1.5}
                />
              ) : (
                <Menu
                  size={18}
                  strokeWidth={1.5}
                />
              )}
            </i>
          </button>

        </div>

        {/* ====================================================
            BOTTOM PROGRESS
        ===================================================== */}

        <div className="arc-navbar-progress">
          <span
            style={{
              transform: `scaleX(${scrollProgress})`,
            }}
          />
        </div>
      </header>

      {/* ======================================================
          MOBILE OVERLAY
      ======================================================= */}

      <aside
        className={[
          "arc-navbar-mobile",
          menuOpen
            ? "is-open"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-hidden={!menuOpen}
      >
        <div className="arc-navbar-mobile-noise" />

        <div className="arc-navbar-mobile-glow" />

        <div className="arc-navbar-mobile-inner">

          <div className="arc-navbar-mobile-top">
            <span>
              ARC / NAVIGATION
            </span>

            <span>
              2026
            </span>
          </div>

          <nav className="arc-navbar-mobile-nav">
            {navigation.map(
              (item, index) => {
                const active =
                  activeSection ===
                  item.hash;

                return (
                  <a
                    key={item.hash}
                    href={item.hash}
                    className={[
                      "arc-navbar-mobile-item",
                      active
                        ? "is-active"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    style={{
                      "--mobile-delay": `${
                        80 +
                        index * 60
                      }ms`,
                    } as React.CSSProperties}
                    onClick={(event) =>
                      handleNavigation(
                        event,
                        item,
                      )
                    }
                  >
                    <span className="arc-navbar-mobile-number">
                      {item.number}
                    </span>

                    <span className="arc-navbar-mobile-label">
                      {item.label}
                    </span>

                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.35}
                    />
                  </a>
                );
              },
            )}
          </nav>

          <div className="arc-navbar-mobile-actions">

            <a
              href="/login"
              className="arc-navbar-mobile-login"
              onClick={closeMenu}
            >
              <div>
                <small>
                  CLIENT ACCESS
                </small>

                <strong>
                  Entrar no ARC
                </strong>
              </div>

              <ArrowUpRight
                size={18}
                strokeWidth={1.4}
              />
            </a>

            <a
              href="#project"
              className="arc-navbar-mobile-project"
              onClick={(event) => {
                event.preventDefault();

                const target =
                  document.querySelector<HTMLElement>(
                    "#project",
                  );

                if (!target) {
                  return;
                }

                closeMenu();

                window.scrollTo({
                  top:
                    target
                      .getBoundingClientRect()
                      .top +
                    window.scrollY -
                    82,
                  behavior:
                    "smooth",
                });

                window.history.replaceState(
                  null,
                  "",
                  "#project",
                );
              }}
            >
              <div>
                <small>
                  ARC / PROJECT INTAKE
                </small>

                <strong>
                  Começar um projeto
                </strong>
              </div>

              <span>
                <Sparkles
                  size={16}
                  strokeWidth={1.5}
                />
              </span>
            </a>

          </div>

          <div className="arc-navbar-mobile-footer">

            <div>
              <span className="arc-navbar-mobile-live-dot" />
              SYSTEM ONLINE
            </div>

            <span>
              DIGITAL PRODUCTS · SYSTEMS · AI
            </span>

            <span>
              ESC
            </span>

          </div>

        </div>
      </aside>
    </>
  );
}

export default Navbar;