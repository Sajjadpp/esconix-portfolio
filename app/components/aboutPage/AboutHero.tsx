import { GOLD, WHITE, GOLD_DARK, GOLD_LIGHT, MUTED, STATS } from "@/app/data";
import { useScroll, useTransform, motion } from "framer-motion";

// ── Hero / Intro ──────────────────────────────────────────────────────────────
function AboutHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -50]);
  const opacity = useTransform(scrollY, [0, 320], [1, 0]);

  return (
    <section
      style={{
        minHeight: "88vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "140px 24px 100px",
        textAlign: "center",
      }}
    >
      {/* Grid bg */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "45%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700, height: 500,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, rgba(201,168,76,0.09) 0%, transparent 70%)`,
          zIndex: 0, pointerEvents: "none",
        }}
      />

      {/* Corner brackets */}
      {[
        { top: 80, left: 40 }, { top: 80, right: 40 },
        { bottom: 60, left: 40 }, { bottom: 60, right: 40 },
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: "absolute", ...pos,
            width: 36, height: 36, zIndex: 1,
            borderTop: i < 2 ? `1px solid rgba(201,168,76,0.25)` : "none",
            borderBottom: i >= 2 ? `1px solid rgba(201,168,76,0.25)` : "none",
            borderLeft: i % 2 === 0 ? `1px solid rgba(201,168,76,0.25)` : "none",
            borderRight: i % 2 === 1 ? `1px solid rgba(201,168,76,0.25)` : "none",
          }}
        />
      ))}

      <motion.div style={{ y, opacity, position: "relative", zIndex: 2, maxWidth: 860 }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            border: `1px solid rgba(201,168,76,0.3)`,
            borderRadius: 50, padding: "6px 18px", marginBottom: 36,
            background: "rgba(201,168,76,0.06)",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: GOLD, display: "inline-block" }} />
          <span style={{ fontSize: 11, color: GOLD, letterSpacing: "0.18em", fontFamily: "'DM Mono', monospace" }}>
            OUR STORY
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(40px, 6.5vw, 82px)",
            fontWeight: 700,
            lineHeight: 1.06,
            letterSpacing: "-0.04em",
            marginBottom: 28,
            color: WHITE,
            fontFamily: "'Syne', sans-serif",
          }}
        >
          Four builders.{" "}
          <span
            style={{
              background: `linear-gradient(135deg, ${GOLD_DARK} 0%, ${GOLD_LIGHT} 50%, ${GOLD_DARK} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            One mission.
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 18,
            color: MUTED,
            lineHeight: 1.8,
            maxWidth: 600,
            margin: "0 auto 56px",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Esconix was started by four friends who were tired of watching small
          businesses settle for overpriced, generic websites. We set out to change
          that — one project at a time.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          style={{
            display: "flex", gap: 0, justifyContent: "center",
            border: `1px solid rgba(201,168,76,0.15)`,
            borderRadius: 20, overflow: "hidden",
            maxWidth: 600, margin: "0 auto",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                flex: 1, padding: "24px 16px", textAlign: "center",
                borderRight: i < STATS.length - 1 ? `1px solid rgba(201,168,76,0.12)` : "none",
              }}
            >
              <div
                style={{
                  fontSize: 28, fontWeight: 700,
                  color: GOLD_LIGHT,
                  fontFamily: "'Syne', sans-serif",
                  letterSpacing: "-0.03em",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 11, color: MUTED,
                  marginTop: 4, letterSpacing: "0.06em",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutHero