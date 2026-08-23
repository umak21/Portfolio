"use client";

import { useEffect } from "react";

function animateCounter(el: Element) {
  const target = parseInt((el as HTMLElement).dataset.count ?? "0", 10);
  const duration = 900;
  const start = performance.now();

  (function step(now: number) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = String(Math.floor(eased * target));
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = String(target);
  })(start);
}

export default function ScrollEffects() {
  useEffect(() => {
    const el = document.getElementById("footer-year");
    if (el) el.textContent = String(new Date().getFullYear());

    const animateItems = document.querySelectorAll("[data-animate]");
    const animateObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          const delay = Number(target.dataset.delay) || 0;
          setTimeout(() => target.classList.add("animated"), delay);
          animateObserver.unobserve(target);
        });
      },
      { threshold: 0.12 }
    );
    animateItems.forEach((item) => animateObserver.observe(item));

    const counters = document.querySelectorAll(".stat-number[data-count]");
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((counter) => counterObserver.observe(counter));

    return () => {
      animateObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return null;
}
