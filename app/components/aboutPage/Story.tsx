import { WHITE, GOLD_LIGHT, MUTED, GOLD_DARK, BG, GOLD } from "@/app/data";
import FadeUp from "../assets/FadeUp";
import SectionLabel from "../assets/SectionLabel";

// ── Story ──────────────────────────────────────────────────────────────────────
function Story() {
  return (
    <section id="story" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div
        className="story-grid"
        style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
        }}
      >
        {/* Left — text */}
        <FadeUp>
          <SectionLabel>How we started</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 700,
              color: WHITE,
              letterSpacing: "-0.03em",
              fontFamily: "'Syne', sans-serif",
              marginBottom: 28,
              lineHeight: 1.15,
            }}
          >
            Built out of frustration.{" "}
            <span style={{ color: GOLD_LIGHT }}>Driven by purpose.</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              "Esconix was born in Kerala when four developers and designers kept seeing the same problem — small businesses were either paying too much for mediocre work, or settling for DIY tools that never quite fit.",
              "We started taking on projects together in 2023, quickly realising that our combined skill set — full-stack engineering, mobile development, SEO, and design strategy — made us unusually well-rounded for the size we are.",
              "Today we serve clients locally in Kerala and remotely across India and beyond. We're lean by design — four focused specialists who own every project from kick-off to launch.",
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontSize: 15,
                  color: MUTED,
                  lineHeight: 1.8,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {text}
              </p>
            ))}
          </div>
        </FadeUp>

        {/* Right — timeline */}
        <FadeUp delay={0.15}>
          <div style={{ position: "relative", paddingLeft: 32 }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: 0, top: 8, bottom: 8,
                width: 1,
                background: `linear-gradient(to bottom, transparent, rgba(201,168,76,0.4), transparent)`,
              }}
            />

            {[
              { year: "2023", title: "Founded", desc: "Four friends decided to stop freelancing separately and build something together." },
              { year: "2023", title: "First 5 clients", desc: "Word spread fast. Local businesses started reaching out for websites and fixes." },
              { year: "2024", title: "Going remote", desc: "Expanded beyond Kerala — taking on remote clients across India." },
              { year: "2024", title: "20+ projects", desc: "Crossed 20 shipped projects spanning websites, apps, and SEO campaigns." },
              { year: "2025", title: "What's next", desc: "Growing our impact. Same tight team, bigger ambitions." },
            ].map((item, i) => (
              <div
                key={i}
                style={{ position: "relative", paddingLeft: 28, marginBottom: i < 4 ? 36 : 0 }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: -7, top: 6,
                    width: 13, height: 13,
                    borderRadius: "50%",
                    background: i === 4
                      ? `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD_LIGHT})`
                      : BG,
                    border: `1px solid ${i === 4 ? GOLD_LIGHT : "rgba(201,168,76,0.45)"}`,
                    boxShadow: i === 4 ? `0 0 12px rgba(201,168,76,0.4)` : "none",
                  }}
                />
                <div
                  style={{
                    fontSize: 10,
                    color: GOLD,
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.12em",
                    marginBottom: 4,
                  }}
                >
                  {item.year}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: WHITE,
                    fontFamily: "'Syne', sans-serif",
                    marginBottom: 4,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: MUTED,
                    lineHeight: 1.65,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
export default Story