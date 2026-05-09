import { WHITE, GOLD_LIGHT, MUTED, GOLD_DARK } from "@/app/data";
import FadeUp from "../assets/FadeUp";
import SectionLabel from "../assets/SectionLabel";

function CTABand() {
  return (
    <section style={{ padding: "80px 24px 120px", maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
      <FadeUp>
        <div
          style={{
            borderRadius: 28,
            border: `1px solid rgba(201,168,76,0.2)`,
            background: "rgba(201,168,76,0.04)",
            padding: "64px 48px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400, height: 200,
              borderRadius: "50%",
              background: `radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)`,
              pointerEvents: "none",
            }}
          />

          <SectionLabel>Ready when you are</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 700,
              color: WHITE,
              letterSpacing: "-0.03em",
              fontFamily: "'Syne', sans-serif",
              marginBottom: 16,
            }}
          >
            Let's build something{" "}
            <span style={{ color: GOLD_LIGHT }}>worth showing.</span>
          </h2>
          <p
            style={{
              color: MUTED,
              fontSize: 15,
              maxWidth: 440,
              margin: "0 auto 36px",
              fontFamily: "'DM Sans', sans-serif",
              lineHeight: 1.7,
            }}
          >
            Tell us about your project — we'll respond within 24 hours with a clear
            scope, timeline, and honest pricing.
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => (window.location.href = "/#contact")}
              style={{
                background: `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD_LIGHT})`,
                color: "#000",
                padding: "14px 36px",
                borderRadius: 50,
                fontSize: 15,
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.02em",
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: `0 0 32px rgba(201,168,76,0.25)`,
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 0 48px rgba(201,168,76,0.4)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 0 32px rgba(201,168,76,0.25)`;
              }}
            >
              Start a project →
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              style={{
                color: WHITE,
                padding: "14px 36px",
                borderRadius: 50,
                fontSize: 15,
                fontWeight: 500,
                border: `1px solid rgba(255,255,255,0.15)`,
                background: "none",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `rgba(201,168,76,0.4)`;
                e.currentTarget.style.color = GOLD_LIGHT;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `rgba(255,255,255,0.15)`;
                e.currentTarget.style.color = WHITE;
              }}
            >
              View our work
            </button>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

export default CTABand;
