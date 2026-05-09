"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SectionLabel from "../assets/SectionLabel";
import { GOLD, GOLD_DARK, GOLD_LIGHT, MUTED, WHITE } from "@/app/data";
import FadeUp from "../assets/FadeUp";

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: `1px solid rgba(201,168,76,0.18)`,
    borderRadius: 12,
    padding: "14px 18px",
    color: WHITE,
    fontSize: 15,
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "120px 24px 100px", maxWidth: 680, margin: "0 auto" }}>
      <FadeUp style={{ textAlign: "center", marginBottom: 56 }}>
        <SectionLabel>Let's talk</SectionLabel>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: WHITE, letterSpacing: "-0.03em", fontFamily: "'Syne', sans-serif", marginBottom: 16 }}>
          Ready to build <span style={{ color: GOLD_LIGHT }}>something?</span>
        </h2>
        <p style={{ color: MUTED, fontSize: 16, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
          Tell us about your project. We'll get back within 24 hours.
        </p>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: `1px solid rgba(201,168,76,0.18)`,
          borderRadius: 24,
          padding: isMobile ? "32px 20px" : "48px 40px",
        }}>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: "center", padding: "40px 0" }}
            >
              <div style={{ fontSize: 48, marginBottom: 16, color: GOLD }}>◈</div>
              <h3 style={{ fontSize: 22, fontWeight: 600, color: WHITE, fontFamily: "'Syne', sans-serif", marginBottom: 8 }}>Message received!</h3>
              <p style={{ color: MUTED, fontFamily: "'DM Sans', sans-serif" }}>We'll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

              {/* Name + Email — side by side on desktop, stacked on mobile */}
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: 16,
              }}>
                <div>
                  <label style={{ display: "block", fontSize: 12, color: MUTED, marginBottom: 8, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>NAME</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={(e) => e.currentTarget.style.borderColor = `rgba(201,168,76,0.5)`}
                    onBlur={(e) => e.currentTarget.style.borderColor = `rgba(201,168,76,0.18)`}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, color: MUTED, marginBottom: 8, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>EMAIL</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    style={inputStyle}
                    onFocus={(e) => e.currentTarget.style.borderColor = `rgba(201,168,76,0.5)`}
                    onBlur={(e) => e.currentTarget.style.borderColor = `rgba(201,168,76,0.18)`}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label style={{ display: "block", fontSize: 12, color: MUTED, marginBottom: 8, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>MESSAGE</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => e.currentTarget.style.borderColor = `rgba(201,168,76,0.5)`}
                  onBlur={(e) => e.currentTarget.style.borderColor = `rgba(201,168,76,0.18)`}
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                style={{
                  background: `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD_LIGHT})`,
                  color: "#000",
                  padding: "15px 32px",
                  borderRadius: 50,
                  fontSize: 15,
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.02em",
                  transition: "opacity 0.2s, transform 0.2s",
                  alignSelf: isMobile ? "stretch" : "flex-start",
                  textAlign: "center",
                  boxShadow: `0 0 24px rgba(201,168,76,0.2)`,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Send message →
              </button>
            </div>
          )}
        </div>
      </FadeUp>
    </section>
  );
}

export default Contact;