'use client'

import { MUTED, GOLD_LIGHT } from "../data";

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

export default Footer;
