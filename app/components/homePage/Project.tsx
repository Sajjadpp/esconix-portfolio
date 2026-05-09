import { WHITE, GOLD_LIGHT, MUTED, PROJECTS, GOLD } from "@/app/data";
import FadeUp from "../assets/FadeUp";
import SectionLabel from "../assets/SectionLabel";

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

export default Projects;