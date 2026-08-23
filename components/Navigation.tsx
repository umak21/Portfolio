"use client";

import { useEffect, useRef } from "react";

const NAV_LINKS = [
  { href: "#hero-section", label: "Home", icon: "fa-house" },
  { href: "#about-section", label: "About", icon: "fa-user" },
  { href: "#journey-section", label: "Journey", icon: "fa-route" },
  { href: "#experience-section", label: "Experience", icon: "fa-briefcase" },
  { href: "#projects-section", label: "Projects", icon: "fa-code-branch" },
  { href: "#education-section", label: "Certifications", icon: "fa-certificate" },
  { href: "#contact-section", label: "Contact", icon: "fa-envelope" },
];

export default function Navigation() {
  const sidebarRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const overlay = overlayRef.current;
    const hamburger = hamburgerRef.current;
    const closeBtn = closeBtnRef.current;
    if (!sidebar || !overlay || !hamburger || !closeBtn) return;

    function openSidebar() {
      sidebar!.classList.add("active");
      overlay!.classList.add("active");
      document.body.classList.add("sidebar-open");
      hamburger!.setAttribute("aria-expanded", "true");
      sidebar!.setAttribute("aria-hidden", "false");
      closeBtn!.focus();
    }

    function closeSidebar() {
      sidebar!.classList.remove("active");
      overlay!.classList.remove("active");
      document.body.classList.remove("sidebar-open");
      hamburger!.setAttribute("aria-expanded", "false");
      sidebar!.setAttribute("aria-hidden", "true");
      hamburger!.focus();
    }

    function toggleSidebar() {
      sidebar!.classList.contains("active") ? closeSidebar() : openSidebar();
    }

    function onKeydown(e: KeyboardEvent) {
      if (e.key === "Escape" && sidebar!.classList.contains("active")) closeSidebar();
    }

    function onResize() {
      if (window.innerWidth > 950 && sidebar!.classList.contains("active")) closeSidebar();
    }

    function onDocumentClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link || link.getAttribute("href") === "#") return;
      const target = document.querySelector(link.getAttribute("href")!);
      if (!target) return;

      e.preventDefault();
      const isInSidebar = sidebar!.contains(link);
      if (isInSidebar && sidebar!.classList.contains("active")) {
        closeSidebar();
        setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 280);
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    hamburger.addEventListener("click", toggleSidebar);
    closeBtn.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("click", onDocumentClick);
    window.addEventListener("resize", onResize);

    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    const sidebarLinks = sidebar.querySelectorAll<HTMLAnchorElement>(".sidebar-nav a");

    function updateActiveLink() {
      const y = window.scrollY + 110;
      sections.forEach((sec) => {
        const id = sec.getAttribute("id");
        const inView = y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight;
        sidebarLinks.forEach((a) => {
          if (a.getAttribute("href") === `#${id}`) a.classList.toggle("active", inView);
        });
      });
    }
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    updateActiveLink();

    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        document.fonts.ready.then(() => {
          requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
        });
      }
    }

    return () => {
      hamburger.removeEventListener("click", toggleSidebar);
      closeBtn.removeEventListener("click", closeSidebar);
      overlay.removeEventListener("click", closeSidebar);
      document.removeEventListener("keydown", onKeydown);
      document.removeEventListener("click", onDocumentClick);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", updateActiveLink);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <div className="sidebar-overlay" ref={overlayRef} />

      <aside id="sidebar" className="sidebar" ref={sidebarRef} aria-label="Mobile navigation" aria-hidden="true">
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <div className="sidebar-initials" aria-hidden="true">
              UK
            </div>
            <span className="sidebar-name">
              Umar <span className="sidebar-name-accent">Kamara</span>
            </span>
          </div>
          <button className="sidebar-close" ref={closeBtnRef} aria-label="Close menu">
            <i className="fas fa-xmark" aria-hidden="true" />
          </button>
        </div>
        <nav className="sidebar-nav" aria-label="Mobile navigation">
          <ul role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={link.href === "#hire-section" ? "sidebar-hire" : undefined}>
                  <i className={`fas ${link.icon}`} aria-hidden="true" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
            <li>
              <a href="#hire-section" className="sidebar-hire">
                <i className="fas fa-handshake" aria-hidden="true" />
                <span>Hire Me</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <a href="https://github.com/umak21?tab=repositories&type=public" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/umar-kamara-3aa528384"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" aria-hidden="true" />
          </a>
          <a href="https://x.com/umar21_k" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
            <i className="fab fa-twitter" aria-hidden="true" />
          </a>
        </div>
      </aside>

      <header id="site-header">
        <nav aria-label="Main navigation">
          <div className="nav-inner">
            <a href="#hero-section" className="nav-logo" aria-label="Home">
              Umar <span>Kamara</span>
            </a>

            <ul className="nav-links" role="list">
              <li>
                <a href="#about-section">About</a>
              </li>
              <li>
                <a href="#journey-section">Journey</a>
              </li>
              <li>
                <a href="#experience-section">Experience</a>
              </li>
              <li>
                <a href="#projects-section">Projects</a>
              </li>
              <li>
                <a href="#education-section">Certifications</a>
              </li>
              <li>
                <a href="#contact-section">Contact</a>
              </li>
            </ul>

            <a href="#hire-section" className="nav-cta">
              Hire Me
            </a>

            <button
              className="nav-hamburger"
              ref={hamburgerRef}
              aria-label="Open menu"
              aria-expanded="false"
              aria-controls="sidebar"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
