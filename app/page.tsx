"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import { Globe, LayoutDashboard, ShieldCheck, Code2, SearchCheck, Lightbulb } from "lucide-react";

// ── Tokens ────────────────────────────────────────────────────────────────────
const GOLD = "#C9A84C";
const GOLD_LIGHT = "#E8C97A";
const GOLD_DARK = "#A07830";
const BG = "#090909";
const BG2 = "#111111";
const WHITE = "#F5F5F5";
const MUTED = "#888888";

// ── Data ──────────────────────────────────────────────────────────────────────
const NAV_LINKS = ["Services", "Projects", "Contact"];

const SERVICES = [
  {
    icon: Globe,
    title: "Website Creation",
    desc: "Pixel-perfect, blazing-fast websites built to convert visitors into clients. Landing pages, business sites, portfolios — crafted with care.",
  },
  {
    icon: LayoutDashboard,
    title: "Web Applications",
    desc: "Custom dashboards, portals, and tools that solve real business problems. We turn complex requirements into elegant, usable software.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    desc: "Your site stays healthy, fast, and up-to-date. Ongoing care, updates, and fixes — so you never have to worry about the technical side.",
  },
  {
    icon: Code2,
    title: "Application Developement",
    desc: "Application development involves creating software applications that solve real-world problems through coding, design, testing, and deployment.",
  },
  {
    icon: SearchCheck,
    title: "SEO Marketing",
    desc: "SEO marketing helps websites rank higher on search engines to attract more visitors and customers organically.",
  },

  {
    icon: Lightbulb,
    title: "Problem Solving",
    desc: "Stuck with a tech challenge? We consult, diagnose, and deliver. No jargon — just clear solutions that move your business forward.",
  },
];

const PROJECTS = [
  {
    title: "Retail Hub",
    tag: "E-commerce",
    desc: "Full-stack storefront with inventory management and payment integration.",
    year: "2024",
  },
  {
    title: "MediTrack",
    tag: "Web App",
    desc: "Patient scheduling and records portal for a local healthcare clinic.",
    year: "2024",
  },
  {
    title: "Bloom Studio",
    tag: "Portfolio",
    desc: "Editorial portfolio site for a Kerala-based photography studio.",
    year: "2023",
  },
  {
    title: "LogiDash",
    tag: "Dashboard",
    desc: "Real-time logistics tracking dashboard with live shipment status.",
    year: "2023",
  },
];

// ── Hooks ─────────────────────────────────────────────────────────────────────
function useHideOnScroll() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 60 || y < lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return visible;
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const onScroll = () => {
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);
  return active;
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 90;
  window.scrollTo({ top, behavior: "smooth" });
}

// function useActiveSection(ids: string[]) {
//   const [active, setActive] = useState("");
//   useEffect(() => {
//     const onScroll = () => {
//       let current = "";
//       for (const id of ids) {
//         const el = document.getElementById(id);
//         if (el && window.scrollY >= el.offsetTop - 120) current = id;
//       }
//       setActive(current);
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [ids]);
//   return active;
// }

// function scrollToSection(id: string) {
//   const el = document.getElementById(id);
//   if (!el) return;
//   const offset = 90;
//   const top = el.getBoundingClientRect().top + window.scrollY - offset;
//   window.scrollTo({ top, behavior: "smooth" });
// }

// ── Sub-components ────────────────────────────────────────────────────────────

function GoldDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "0 auto 48px", maxWidth: 120 }}>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, transparent, ${GOLD})` }} />
      <div style={{ width: 6, height: 6, background: GOLD, transform: "rotate(45deg)" }} />
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to left, transparent, ${GOLD})` }} />
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p style={{
      fontSize: 11,
      letterSpacing: "0.25em",
      textTransform: "uppercase",
      color: GOLD,
      marginBottom: 12,
      fontFamily: "'DM Mono', monospace",
    }}>
      {children}
    </p>
  );
}

function FadeUp({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// ── Header ────────────────────────────────────────────────────────────────────
function Header() {
  const visible = useHideOnScroll();
  const active = useActiveSection(["services", "projects", "contact"]);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  const handleMenuNav = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          key="header"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed",
            top: 30,
            left: isMobile ? 16 : undefined,
            right: isMobile ? 16 : undefined,
            width: "calc(100% - 48px)",
            maxWidth: 1100,
            zIndex: 100,
            borderRadius: 24,
            padding: isMobile ? "0 16px" : "0 28px",
            height: isMobile ? 58 : 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: scrolled ? "rgba(9,9,9,0.82)" : "rgba(9,9,9,0.50)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: `1px solid rgba(201,168,76,${scrolled ? 0.28 : 0.15})`,
            boxShadow: scrolled
              ? `0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)`
              : "none",
            transition: "background 0.4s, border-color 0.4s, box-shadow 0.4s",
          }}
        >
          {/* Logo — clicks back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <div style={{
              width: 34, height: 34,
              background: `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD_LIGHT})`,
              borderRadius: 9,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 17, color: "#000", fontWeight: 700, flexShrink: 0,
            }}>◈</div>
            <span style={{ color: WHITE, fontWeight: 600, fontSize: 17, letterSpacing: "-0.02em", fontFamily: "'Syne', sans-serif" }}>
              Esconix
            </span>
          </button>

          {isMobile ? (
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                border: `1px solid rgba(201,168,76,0.25)`,
                background: "rgba(255,255,255,0.03)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <div style={{ width: 18, height: 14, position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: 2,
                    background: WHITE,
                    borderRadius: 2,
                    transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
                    transition: "transform 0.25s ease",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 6,
                    width: "100%",
                    height: 2,
                    background: WHITE,
                    borderRadius: 2,
                    opacity: menuOpen ? 0 : 1,
                    transition: "opacity 0.2s ease",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 12,
                    width: "100%",
                    height: 2,
                    background: WHITE,
                    borderRadius: 2,
                    transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
                    transition: "transform 0.25s ease",
                  }}
                />
              </div>
            </button>
          ) : (
            <nav style={{ display: "flex", gap: 4, alignItems: "center" }}>
              {NAV_LINKS.map((l) => {
                const id = l.toLowerCase();
                const isActive = active === id;
                return (
                  <button
                    key={l}
                    onClick={() => scrollToSection(id)}
                    style={{
                      position: "relative",
                      background: isActive ? "rgba(201,168,76,0.10)" : "transparent",
                      border: "none",
                      cursor: "pointer",
                      color: isActive ? WHITE : MUTED,
                      fontSize: 14,
                      fontWeight: isActive ? 500 : 400,
                      letterSpacing: "0.01em",
                      fontFamily: "'DM Sans', sans-serif",
                      padding: "7px 16px",
                      borderRadius: 50,
                      transition: "color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = WHITE;
                        e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = MUTED;
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    {l}
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        style={{
                          position: "absolute",
                          bottom: 5,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 16,
                          height: 2,
                          borderRadius: 2,
                          background: `linear-gradient(90deg, ${GOLD_DARK}, ${GOLD_LIGHT})`,
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                  </button>
                );
              })}

              <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)", margin: "0 8px" }} />

              <button
                onClick={() => scrollToSection("contact")}
                style={{
                  background: `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD_LIGHT})`,
                  color: "#000",
                  padding: "9px 22px",
                  borderRadius: 50,
                  fontSize: 13,
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.03em",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "opacity 0.2s, transform 0.2s",
                  boxShadow: `0 0 20px rgba(201,168,76,0.2)`,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "scale(0.97)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
              >
                Get in touch
              </button>
            </nav>
          )}

          <AnimatePresence>
            {isMobile && menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  left: 0,
                  right: 0,
                  width: "100%",
                  borderRadius: 18,
                  padding: 12,
                  background: "rgba(9,9,9,0.97)",
                  border: `1px solid rgba(201,168,76,0.25)`,
                  boxShadow: "0 16px 32px rgba(0,0,0,0.45)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                {NAV_LINKS.map((l) => {
                  const id = l.toLowerCase();
                  const isActive = active === id;
                  return (
                    <button
                      key={`mobile-${l}`}
                      onClick={() => handleMenuNav(id)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        background: isActive ? "rgba(201,168,76,0.12)" : "transparent",
                        border: "none",
                        color: isActive ? WHITE : WHITE,
                        fontSize: 15,
                        fontWeight: isActive ? 600 : 500,
                        letterSpacing: "0.01em",
                        fontFamily: "'DM Sans', sans-serif",
                        padding: "12px 14px",
                        borderRadius: 12,
                        cursor: "pointer",
                      }}
                    >
                      {l}
                    </button>
                  );
                })}
                <button
                  onClick={() => handleMenuNav("contact")}
                  style={{
                    marginTop: 4,
                    width: "100%",
                    background: `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD_LIGHT})`,
                    color: "#000",
                    padding: "12px 16px",
                    borderRadius: 12,
                    fontSize: 14,
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    letterSpacing: "0.03em",
                    fontFamily: "'DM Sans', sans-serif",
                    boxShadow: `0 0 20px rgba(201,168,76,0.2)`,
                  }}
                >
                  Get in touch
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -60]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      padding: "140px 24px 100px",
      textAlign: "center",
    }}>
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      {/* Radial glow */}
      <div style={{
        position: "absolute",
        top: "40%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600, height: 600,
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)`,
        zIndex: 0,
        pointerEvents: "none",
      }} />

      {/* Corner ornaments */}
      {[
        { top: 80, left: 40 },
        { top: 80, right: 40 },
        { bottom: 80, left: 40 },
        { bottom: 80, right: 40 },
      ].map((pos, i) => (
        <div key={i} style={{
          position: "absolute", ...pos,
          width: 40, height: 40, zIndex: 1,
          borderTop: i < 2 ? `1px solid rgba(201,168,76,0.3)` : "none",
          borderBottom: i >= 2 ? `1px solid rgba(201,168,76,0.3)` : "none",
          borderLeft: i % 2 === 0 ? `1px solid rgba(201,168,76,0.3)` : "none",
          borderRight: i % 2 === 1 ? `1px solid rgba(201,168,76,0.3)` : "none",
        }} />
      ))}

      <motion.div style={{ y, opacity, position: "relative", zIndex: 2, maxWidth: 820 }}>
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            border: `1px solid rgba(201,168,76,0.35)`,
            borderRadius: 50,
            padding: "6px 16px",
            marginBottom: 36,
            background: "rgba(201,168,76,0.07)",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: GOLD, display: "inline-block" }} />
          <span style={{ fontSize: 12, color: GOLD, letterSpacing: "0.15em", fontFamily: "'DM Mono', monospace" }}>
            WEBSITE · APPS · SOLUTIONS
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(42px, 7vw, 88px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            marginBottom: 24,
            color: WHITE,
            fontFamily: "'Syne', sans-serif",
          }}
        >
          We build digital{" "}
          <span style={{
            background: `linear-gradient(135deg, ${GOLD_DARK} 0%, ${GOLD_LIGHT} 50%, ${GOLD_DARK} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            experiences
          </span>
          {" "}that work.
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 18,
            color: MUTED,
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto 48px",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Esconix is a four-partner creative tech firm focused on small businesses.
          We design, build, and ship websites and applications — fast, clean, and purposeful.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href="#contact"
            style={{
              background: `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD_LIGHT})`,
              color: "#000",
              padding: "14px 36px",
              borderRadius: 50,
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.02em",
              fontFamily: "'DM Sans', sans-serif",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: `0 0 32px rgba(201,168,76,0.25)`,
              display: "inline-block",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 0 48px rgba(201,168,76,0.4)`; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 0 32px rgba(201,168,76,0.25)`; }}
          >
            Get in touch
          </a>
          <a
            href="#projects"
            style={{
              color: WHITE,
              padding: "14px 36px",
              borderRadius: 50,
              fontSize: 15,
              fontWeight: 500,
              textDecoration: "none",
              border: `1px solid rgba(255,255,255,0.15)`,
              fontFamily: "'DM Sans', sans-serif",
              transition: "border-color 0.2s, color 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = `rgba(201,168,76,0.4)`; e.currentTarget.style.color = GOLD_LIGHT; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = `rgba(255,255,255,0.15)`; e.currentTarget.style.color = WHITE; }}
          >
            View our work
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          style={{ display: "flex", gap: 48, justifyContent: "center", marginTop: 72, flexWrap: "wrap" }}
        >
          {[["20+", "Projects delivered"], ["4", "Expert partners"], ["2+", "Years of craft"]].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 32, fontWeight: 700, color: GOLD_LIGHT, fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}>{n}</div>
              <div style={{ fontSize: 12, color: MUTED, marginTop: 4, letterSpacing: "0.05em", fontFamily: "'DM Mono', monospace" }}>{l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", zIndex: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ width: 24, height: 40, border: `1px solid rgba(201,168,76,0.3)`, borderRadius: 12, display: "flex", justifyContent: "center", paddingTop: 6 }}
        >
          <div style={{ width: 4, height: 8, background: GOLD, borderRadius: 2 }} />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ── Services ──────────────────────────────────────────────────────────────────
function Services() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="services" style={{ padding: "120px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <FadeUp style={{ textAlign: "center", marginBottom: 16 }}>
        <SectionLabel>What we do</SectionLabel>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: WHITE, letterSpacing: "-0.03em", fontFamily: "'Syne', sans-serif", marginBottom: 16 }}>
          Services built for <span style={{ color: GOLD_LIGHT }}>small businesses</span>
        </h2>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 500, margin: "0 auto", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
          We cover every phase of your digital presence — from the first pixel to long-term support.
        </p>
      </FadeUp>

      <div style={{ marginTop: 60, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
        {SERVICES.map((s, i) => (
          <FadeUp key={s.title} delay={i * 0.1}>
            {(() => {
              const isHovered = hoveredCard === s.title;
              const Icon = s.icon;
              return (
            <div
              style={{
                padding: "28px 24px",
                borderRadius: 20,
                border: `1px solid rgba(201,168,76,0.12)`,
                background: "rgba(255,255,255,0.02)",
                height: "100%",
                minHeight: 228,
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 0 0 rgba(201,168,76,0)",
                transition: "border-color 0.35s ease, background 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                setHoveredCard(s.title);
                (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(201,168,76,0.35)`;
                (e.currentTarget as HTMLDivElement).style.background = `rgba(201,168,76,0.06)`;
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 28px rgba(201,168,76,0.14)";
              }}
              onMouseLeave={(e) => {
                setHoveredCard(null);
                (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(201,168,76,0.12)`;
                (e.currentTarget as HTMLDivElement).style.background = `rgba(255,255,255,0.02)`;
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 rgba(201,168,76,0)";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(circle at 78% 18%, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0.08) 22%, rgba(10,10,10,0) 62%)",
                  opacity: isHovered ? 1 : 0,
                  transition: "opacity 0.35s ease",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  border: "1px solid rgba(201,168,76,0.2)",
                  background: "rgba(201,168,76,0.08)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}>
                  <Icon size={22} color={GOLD_LIGHT} strokeWidth={1.9} />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: WHITE, marginBottom: 9, fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em", lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.75, fontFamily: "'DM Sans', sans-serif" }}>{s.desc}</p>
              </div>
            </div>
              );
            })()}
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

// ── Projects ──────────────────────────────────────────────────────────────────
function Projects() {
  return (
    <section id="projects" style={{ padding: "120px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <FadeUp style={{ textAlign: "center", marginBottom: 16 }}>
        <SectionLabel>Our work</SectionLabel>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: WHITE, letterSpacing: "-0.03em", fontFamily: "'Syne', sans-serif", marginBottom: 16 }}>
          Projects we're <span style={{ color: GOLD_LIGHT }}>proud of</span>
        </h2>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 480, margin: "0 auto", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
          Real solutions shipped for real clients. Every project is a problem solved.
        </p>
      </FadeUp>

      <div style={{ marginTop: 60, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
        {PROJECTS.map((p, i) => (
          <FadeUp key={p.title} delay={i * 0.1}>
            <div
              style={{
                borderRadius: 20,
                border: `1px solid rgba(255,255,255,0.07)`,
                overflow: "hidden",
                transition: "border-color 0.3s, transform 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(201,168,76,0.3)`;
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(255,255,255,0.07)`;
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              {/* Placeholder image area */}
              <div style={{
                height: 180,
                background: `linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(10,10,10,0.9) 100%)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                borderBottom: `1px solid rgba(201,168,76,0.08)`,
                position: "relative",
              }}>
                <div style={{ fontSize: 48, opacity: 0.15, color: GOLD_LIGHT, fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>
                  {p.title[0]}
                </div>
                <div style={{
                  position: "absolute", top: 14, right: 14,
                  background: "rgba(201,168,76,0.12)",
                  border: `1px solid rgba(201,168,76,0.25)`,
                  borderRadius: 50, padding: "4px 12px",
                  fontSize: 11, color: GOLD,
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.08em",
                }}>
                  {p.tag}
                </div>
              </div>
              <div style={{ padding: "24px 24px 28px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: WHITE, fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}>{p.title}</h3>
                  <span style={{ fontSize: 11, color: MUTED, fontFamily: "'DM Mono', monospace" }}>{p.year}</span>
                </div>
                <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>{p.desc}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: `1px solid rgba(201,168,76,0.18)`,
    borderRadius: 12,
    padding: "14px 18px",
    color: WHITE,
    fontSize: 15,
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "120px 24px 100px", maxWidth: 680, margin: "0 auto" }}>
      <FadeUp style={{ textAlign: "center", marginBottom: 56 }}>
        <SectionLabel>Let's talk</SectionLabel>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: WHITE, letterSpacing: "-0.03em", fontFamily: "'Syne', sans-serif", marginBottom: 16 }}>
          Ready to build <span style={{ color: GOLD_LIGHT }}>something?</span>
        </h2>
        <p style={{ color: MUTED, fontSize: 16, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
          Tell us about your project. We'll get back within 24 hours.
        </p>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: `1px solid rgba(201,168,76,0.18)`,
          borderRadius: 24,
          padding: "48px 40px",
        }}>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: "center", padding: "40px 0" }}
            >
              <div style={{ fontSize: 48, marginBottom: 16, color: GOLD }}>◈</div>
              <h3 style={{ fontSize: 22, fontWeight: 600, color: WHITE, fontFamily: "'Syne', sans-serif", marginBottom: 8 }}>Message received!</h3>
              <p style={{ color: MUTED, fontFamily: "'DM Sans', sans-serif" }}>We'll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12, color: MUTED, marginBottom: 8, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>NAME</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" style={inputStyle}
                    onFocus={(e) => e.currentTarget.style.borderColor = `rgba(201,168,76,0.5)`}
                    onBlur={(e) => e.currentTarget.style.borderColor = `rgba(201,168,76,0.18)`}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, color: MUTED, marginBottom: 8, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>EMAIL</label>
                  <input name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" style={inputStyle}
                    onFocus={(e) => e.currentTarget.style.borderColor = `rgba(201,168,76,0.5)`}
                    onBlur={(e) => e.currentTarget.style.borderColor = `rgba(201,168,76,0.18)`}
                  />
                </div>
              </div>
              <div>
                <label style={{ display: "block", fontSize: 12, color: MUTED, marginBottom: 8, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>MESSAGE</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project..." rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => e.currentTarget.style.borderColor = `rgba(201,168,76,0.5)`}
                  onBlur={(e) => e.currentTarget.style.borderColor = `rgba(201,168,76,0.18)`}
                />
              </div>
              <button
                onClick={handleSubmit}
                style={{
                  background: `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD_LIGHT})`,
                  color: "#000",
                  padding: "15px 32px",
                  borderRadius: 50,
                  fontSize: 15,
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.02em",
                  transition: "opacity 0.2s, transform 0.2s",
                  alignSelf: "flex-start",
                  boxShadow: `0 0 24px rgba(201,168,76,0.2)`,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Send message →
              </button>
            </div>
          )}
        </div>
      </FadeUp>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      borderTop: `1px solid rgba(255,255,255,0.06)`,
      padding: "32px 24px",
      maxWidth: 1100,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16,
    }}>
      <span style={{ color: MUTED, fontSize: 13, fontFamily: "'DM Mono', monospace" }}>
        © {new Date().getFullYear()} Esconix. All rights reserved.
      </span>
      <div style={{ display: "flex", gap: 24 }}>
        {["GitHub", "LinkedIn", "Instagram"].map((s) => (
          <a key={s} href="#" style={{ color: MUTED, fontSize: 13, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", transition: "color 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.color = GOLD_LIGHT}
            onMouseLeave={(e) => e.currentTarget.style.color = MUTED}
          >
            {s}
          </a>
        ))}
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buttonSize = isMobile ? 44 : 48;
  const iconSize = isMobile ? 21 : 23;

  return (
    <motion.button
      aria-label="Chat on WhatsApp"
      onClick={() => window.open("https://wa.me/919999999999", "_blank", "noopener,noreferrer")}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        y: [0, -6, 0],
        scale: 1,
        boxShadow: [
          "0 10px 28px rgba(37,211,102,0.45), 0 10px 22px rgba(0,0,0,0.35)",
          "0 14px 34px rgba(37,211,102,0.52), 0 12px 26px rgba(0,0,0,0.4)",
          "0 10px 28px rgba(37,211,102,0.45), 0 10px 22px rgba(0,0,0,0.35)",
        ],
      }}
      transition={{
        opacity: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        width: buttonSize,
        height: buttonSize,
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.2)",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 9999,
      }}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.53 0 .24 5.29.24 11.8c0 2.08.54 4.11 1.57 5.9L0 24l6.48-1.69a11.76 11.76 0 0 0 5.56 1.42h.01c6.5 0 11.79-5.29 11.79-11.8 0-3.15-1.23-6.1-3.32-8.45ZM12.05 21.7h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.84 1 1.03-3.74-.24-.38a9.78 9.78 0 0 1-1.52-5.2c0-5.42 4.41-9.83 9.83-9.83 2.63 0 5.1 1.02 6.96 2.88a9.79 9.79 0 0 1 2.87 6.95c0 5.42-4.41 9.83-9.83 9.83Zm5.39-7.37c-.29-.14-1.72-.85-1.99-.95-.27-.1-.47-.14-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.14-1.21-.45-2.31-1.43-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.12-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.2.05-.37-.02-.51-.08-.14-.67-1.62-.92-2.22-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-.99 2.44.03 1.44 1.03 2.83 1.18 3.03.14.2 2.03 3.1 4.92 4.34.69.3 1.22.48 1.64.61.69.22 1.32.19 1.82.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34Z"
          fill="#FFFFFF"
        />
      </svg>
    </motion.button>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function EsconixHome() {
  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: ${BG}; color: ${WHITE}; -webkit-font-smoothing: antialiased; }
        ::selection { background: rgba(201,168,76,0.3); color: ${WHITE}; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${BG}; }
        ::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.3); border-radius: 2px; }
      `}</style>
      <div 
        style={{
          width: '100%',
          display: 'flex',
          alignItems: "center",
          justifyContent: 'center',
          marginTop: '30px'
        }}
      >
        <Header />
      </div>

      <main>
        <Hero />

        {/* Thin gold separator */}
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ height: 1, background: `linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)` }} />
        </div>

        <Services />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ height: 1, background: `linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)` }} />
        </div>

        <Projects />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ height: 1, background: `linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)` }} />
        </div>

        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}