import { animate, stagger } from "animejs";

export function animateIntro() {
  animate(".arc-reveal", {
    opacity: [0, 1],
    y: [36, 0],
    delay: stagger(90),
    duration: 900,
    ease: "out(4)",
  });
}

export function animateHero() {
  animate(".hero-kicker, .hero-title-line, .hero-copy, .hero-actions, .hero-art", {
    opacity: [0, 1],
    y: [40, 0],
    delay: stagger(110),
    duration: 1000,
    ease: "out(4)",
  });
}

export function animateServices() {
  animate(".service-row", {
    opacity: [0, 1],
    x: [-24, 0],
    delay: stagger(70),
    duration: 700,
    ease: "out(3)",
  });
}