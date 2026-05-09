import { GOLD, WHITE, GOLD_DARK, GOLD_LIGHT, MUTED } from "@/app/data";
import { useScroll, useTransform, motion } from "framer-motion";

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

export default Hero;