import { WHITE, GOLD_LIGHT, MUTED, GOLD_DARK, GOLD, TEAM } from "@/app/data";
import FadeUp from "../assets/FadeUp";
import SectionLabel from "../assets/SectionLabel";

// ── Team ──────────────────────────────────────────────────────────────────────
function Team() {
  return (
    <section id="team" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <FadeUp style={{ textAlign: "center", marginBottom: 60 }}>
        <SectionLabel>The people</SectionLabel>
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 700,
            color: WHITE,
            letterSpacing: "-0.03em",
            fontFamily: "'Syne', sans-serif",
            marginBottom: 14,
          }}
        >
          Meet the{" "}
          <span style={{ color: GOLD_LIGHT }}>four of us</span>
        </h2>
        <p
          style={{
            color: MUTED,
            fontSize: 15,
            maxWidth: 440,
            margin: "0 auto",
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1.7,
          }}
        >
          No junior devs hidden in the background. When you work with Esconix,
          you work directly with one of us.
        </p>
      </FadeUp>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24,
        }}
      >
        {TEAM.map((member, i) => (
          <FadeUp key={member.name} delay={i * 0.1}>
            <div
              style={{
                borderRadius: 22,
                border: `1px solid rgba(255,255,255,0.07)`,
                overflow: "hidden",
                transition: "border-color 0.3s, transform 0.3s",
                background: "rgba(255,255,255,0.015)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(201,168,76,0.3)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Avatar area */}
              <div
                style={{
                  height: 140,
                  background: `linear-gradient(135deg, rgba(201,168,76,0.10) 0%, rgba(9,9,9,0.95) 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: `1px solid rgba(201,168,76,0.08)`,
                  position: "relative",
                }}
              >
                {/* Avatar circle */}
                <div
                  style={{
                    width: 72, height: 72,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD_LIGHT})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#000",
                    fontFamily: "'Syne', sans-serif",
                    letterSpacing: "-0.02em",
                    boxShadow: `0 0 32px rgba(201,168,76,0.25)`,
                  }}
                >
                  {member.initials}
                </div>

                {/* Index number */}
                <div
                  style={{
                    position: "absolute",
                    top: 14, right: 16,
                    fontSize: 11,
                    color: MUTED,
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  0{i + 1}
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: "24px 24px 28px" }}>
                <div style={{ marginBottom: 4 }}>
                  <span
                    style={{
                      fontSize: 10,
                      color: GOLD,
                      fontFamily: "'DM Mono', monospace",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    {member.role}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: WHITE,
                    fontFamily: "'Syne', sans-serif",
                    letterSpacing: "-0.02em",
                    marginBottom: 10,
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: MUTED,
                    lineHeight: 1.7,
                    fontFamily: "'DM Sans', sans-serif",
                    marginBottom: 18,
                  }}
                >
                  {member.desc}
                </p>

                {/* Skill pills */}
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: 11,
                        color: GOLD,
                        background: "rgba(201,168,76,0.09)",
                        border: `1px solid rgba(201,168,76,0.2)`,
                        borderRadius: 50,
                        padding: "3px 11px",
                        fontFamily: "'DM Mono', monospace",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

export default Team;
