"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

// ── Tokens ────────────────────────────────────────────────────────────────────
const GOLD_DARK  = "#A07830";
const GOLD_LIGHT = "#E8C97A";
const WHITE      = "#F5F5F5";
const MUTED      = "#888888";

// ── Nav config ────────────────────────────────────────────────────────────────
// type: "section" = smooth scroll to #id on home page
//       "page"    = navigate to a route
const NAV_ITEMS = [
  { label: "Services",  type: "section", target: "services"  },
  { label: "Projects",  type: "section", target: "projects"  },
  { label: "About",     type: "page",    target: "/about"    },
  { label: "Contact",   type: "section", target: "contact"   },
] as const;

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

// ── Header ────────────────────────────────────────────────────────────────────
export default function Header() {
  const visible  = useHideOnScroll();
  const pathname = usePathname();
  const router   = useRouter();
  const isHome   = pathname === "/";

  const sectionIds = NAV_ITEMS
    .filter((n) => n.type === "section")
    .map((n) => n.target as string);

  const activeSection = useActiveSection(isHome ? sectionIds : []);

  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [isMobile,  setIsMobile]  = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Determine if a nav item is "active"
  function isActive(item: typeof NAV_ITEMS[number]) {
    if (item.type === "page") return pathname === item.target;
    return isHome && activeSection === item.target;
  }

  // Handle nav click — scroll if on home, navigate if on other page
  function handleNav(item: typeof NAV_ITEMS[number]) {
    if (item.type === "page") {
      router.push(item.target);
      return;
    }
    if (isHome) {
      scrollToSection(item.target);
    } else {
      // Go home first, then scroll after load
      router.push(`/#${item.target}`);
    }
    setMenuOpen(false);
  }

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
            top: 16,
            width: isMobile ? "auto" : "calc(100% - 48px)",
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
              ? "0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)"
              : "none",
            transition: "background 0.4s, border-color 0.4s, box-shadow 0.4s",
          }}
        >
          {/* ── Logo ── */}
          <button
            onClick={() => router.push("/")}
            style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "none", border: "none", cursor: "pointer", padding: 0,
            }}
          >
            <div style={{
              width: 34, height: 34,
              background: `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD_LIGHT})`,
              borderRadius: 9,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 17, color: "#000", fontWeight: 700, flexShrink: 0,
            }}>
              ◈
            </div>
            <span style={{
              color: WHITE, fontWeight: 600, fontSize: 17,
              letterSpacing: "-0.02em", fontFamily: "'Syne', sans-serif",
            }}>
              Esconix
            </span>
          </button>

          {/* ── Desktop Nav ── */}
          {!isMobile && (
            <nav style={{ display: "flex", gap: 4, alignItems: "center" }}>
              {NAV_ITEMS.map((item) => {
                const active = isActive(item);
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNav(item)}
                    style={{
                      position: "relative",
                      background: active ? "rgba(201,168,76,0.10)" : "transparent",
                      border: "none",
                      cursor: "pointer",
                      color: active ? WHITE : MUTED,
                      fontSize: 14,
                      fontWeight: active ? 500 : 400,
                      letterSpacing: "0.01em",
                      fontFamily: "'DM Sans', sans-serif",
                      padding: "7px 16px",
                      borderRadius: 50,
                      transition: "color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        e.currentTarget.style.color = WHITE;
                        e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        e.currentTarget.style.color = MUTED;
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    {item.label}
                    {active && (
                      <motion.div
                        layoutId="nav-pill"
                        style={{
                          position: "absolute",
                          bottom: 5, left: "50%",
                          transform: "translateX(-50%)",
                          width: 16, height: 2,
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
                onClick={() => handleNav({ label: "Contact", type: "section", target: "contact" })}
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
                  boxShadow: "0 0 20px rgba(201,168,76,0.2)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "scale(0.97)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
              >
                Get in touch
              </button>
            </nav>
          )}

          {/* ── Mobile Hamburger ── */}
          {isMobile && (
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              style={{
                width: 42, height: 42,
                borderRadius: 12,
                border: "1px solid rgba(201,168,76,0.25)",
                background: "rgba(255,255,255,0.03)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <div style={{ width: 18, height: 14, position: "relative" }}>
                {[0, 6, 12].map((top, i) => (
                  <span
                    key={i}
                    style={{
                      position: "absolute", left: 0, top,
                      width: "100%", height: 2,
                      background: WHITE, borderRadius: 2,
                      transform: menuOpen
                        ? i === 0 ? "translateY(6px) rotate(45deg)"
                        : i === 2 ? "translateY(-6px) rotate(-45deg)"
                        : "none"
                        : "none",
                      opacity: menuOpen && i === 1 ? 0 : 1,
                      transition: "transform 0.25s ease, opacity 0.2s ease",
                    }}
                  />
                ))}
              </div>
            </button>
          )}

          {/* ── Mobile Dropdown ── */}
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
                  left: 0, right: 0,
                  borderRadius: 18,
                  padding: 12,
                  background: "rgba(9,9,9,0.97)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  boxShadow: "0 16px 32px rgba(0,0,0,0.45)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                {NAV_ITEMS.map((item) => {
                  const active = isActive(item);
                  return (
                    <button
                      key={`mobile-${item.label}`}
                      onClick={() => handleNav(item)}
                      style={{
                        width: "100%", textAlign: "left",
                        background: active ? "rgba(201,168,76,0.12)" : "transparent",
                        border: "none",
                        color: WHITE,
                        fontSize: 15,
                        fontWeight: active ? 600 : 500,
                        letterSpacing: "0.01em",
                        fontFamily: "'DM Sans', sans-serif",
                        padding: "12px 14px",
                        borderRadius: 12,
                        cursor: "pointer",
                      }}
                    >
                      {item.label}
                    </button>
                  );
                })}

                <button
                  onClick={() => handleNav({ label: "Contact", type: "section", target: "contact" })}
                  style={{
                    marginTop: 4, width: "100%",
                    background: `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD_LIGHT})`,
                    color: "#000",
                    padding: "12px 16px",
                    borderRadius: 12,
                    fontSize: 14, fontWeight: 700,
                    border: "none", cursor: "pointer",
                    letterSpacing: "0.03em",
                    fontFamily: "'DM Sans', sans-serif",
                    boxShadow: "0 0 20px rgba(201,168,76,0.2)",
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