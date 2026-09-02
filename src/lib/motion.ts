import { animate, stagger } from "animejs";

function prefersReducedMotion() {
  return window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
}

export function animateHero() {
  if (prefersReducedMotion()) {
    return;
  }

  animate(".hero-reveal", {
    opacity: [0, 1],
    y: [28, 0],
    delay: stagger(90),
    duration: 850,
    ease: "out(4)",
  });

  animate(".hero-glow", {
    scale: [0.94, 1],
    opacity: [0, 1],
    duration: 1400,
    delay: 250,
    ease: "out(4)",
  });

  animate(".hero-panel-progress span", {
    width: ["0%", "34%"],
    duration: 1200,
    delay: 700,
    ease: "out(3)",
  });
}

/**
 * Compatibilidade com componentes antigos
 * que ainda podem existir dentro de src.
 */
export function animateIntro() {
  if (prefersReducedMotion()) {
    return;
  }

  animate(".arc-reveal", {
    opacity: [0, 1],
    y: [30, 0],
    delay: stagger(80),
    duration: 800,
    ease: "out(4)",
  });
}

/**
 * Compatibilidade com a antiga seção de serviços.
 */
export function animateServices() {
  if (prefersReducedMotion()) {
    return;
  }

  animate(".service-row", {
    opacity: [0, 1],
    x: [-20, 0],
    delay: stagger(70),
    duration: 700,
    ease: "out(3)",
  });
}