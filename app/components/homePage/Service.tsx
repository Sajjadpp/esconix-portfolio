import { WHITE, GOLD_LIGHT, MUTED, SERVICES } from "@/app/data";
import { useState } from "react";
import FadeUp from "../assets/FadeUp";
import SectionLabel from "../assets/SectionLabel";

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


export default Services;