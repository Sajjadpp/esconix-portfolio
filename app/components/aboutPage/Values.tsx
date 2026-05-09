import { WHITE, GOLD_LIGHT, MUTED, GOLD, VALUES } from "@/app/data";
import FadeUp from "../assets/FadeUp";
import SectionLabel from "../assets/SectionLabel";


function Values() {
  return (
    <section id="values" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <FadeUp style={{ textAlign: "center", marginBottom: 60 }}>
        <SectionLabel>What we stand for</SectionLabel>
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
          Principles we won't{" "}
          <span style={{ color: GOLD_LIGHT }}>compromise on</span>
        </h2>
        <p
          style={{
            color: MUTED,
            fontSize: 15,
            maxWidth: 460,
            margin: "0 auto",
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1.7,
          }}
        >
          These aren't values written for a pitch deck. They're the decisions we
          make on every project, every day.
        </p>
      </FadeUp>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
        }}
      >
        {VALUES.map((v, i) => (
          <FadeUp key={v.title} delay={i * 0.1}>
            <div
              style={{
                padding: "36px 28px",
                borderRadius: 20,
                border: `1px solid rgba(201,168,76,0.12)`,
                background: "rgba(255,255,255,0.015)",
                height: "100%",
                transition: "border-color 0.3s, background 0.3s, transform 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(201,168,76,0.35)";
                el.style.background = "rgba(201,168,76,0.05)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(201,168,76,0.12)";
                el.style.background = "rgba(255,255,255,0.015)";
                el.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  fontSize: 26,
                  color: GOLD,
                  marginBottom: 20,
                  lineHeight: 1,
                }}
              >
                {v.symbol}
              </div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: WHITE,
                  marginBottom: 12,
                  fontFamily: "'Syne', sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                {v.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: MUTED,
                  lineHeight: 1.75,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {v.desc}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

export default Values;