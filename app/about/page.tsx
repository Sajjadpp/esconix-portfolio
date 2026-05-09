"use client";

import CTABand from "../components/aboutPage/CTABrand";
import AboutHero from "../components/aboutPage/AboutHero";
import Story from "../components/aboutPage/Story";
import Values from "../components/aboutPage/Values";
import Team from "../components/aboutPage/Team";
import { BG, WHITE } from "../data";
import { useEffect, useRef } from "react";



function GoldLine() {
  return (
    <div
      style={{
        height: 1,
        background: `linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)`,
        margin: "0 auto",
        maxWidth: 1100,
      }}
    />
  );
}


export default function AboutPage() {

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let animationFrame = 0;
    let isScrolling = true;

    const scrollSpeed = 0.5;

    const autoScroll = () => {
      if (isScrolling) {
        window.scrollBy(0, scrollSpeed);

        // stop at bottom
        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight
        ) {
          cancelAnimationFrame(animationFrame);
          return;
        }
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    // pause scrolling when user interacts
    const pauseScroll = () => {
      isScrolling = false;

      // clear previous timer
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // restart after 5 seconds
      timeoutRef.current = setTimeout(() => {
        isScrolling = true;
      }, 5000);
    };

    // detect user interaction
    window.addEventListener("wheel", pauseScroll);
    window.addEventListener("touchstart", pauseScroll);
    window.addEventListener("mousedown", pauseScroll);
    window.addEventListener("keydown", pauseScroll);

    animationFrame = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("wheel", pauseScroll);
      window.removeEventListener("touchstart", pauseScroll);
      window.removeEventListener("mousedown", pauseScroll);
      window.removeEventListener("keydown", pauseScroll);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: ${BG}; color: ${WHITE}; -webkit-font-smoothing: antialiased; }
        ::selection { background: rgba(201,168,76,0.3); color: ${WHITE}; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${BG}; }
        ::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.3); border-radius: 2px; }

        @media (max-width: 700px) {
          .story-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>

      

      <main>
        <AboutHero />

        <div style={{ padding: "0 24px" }}><GoldLine /></div>

        <Story />

        <div style={{ padding: "0 24px" }}><GoldLine /></div>

        <Values />

        <div style={{ padding: "0 24px" }}><GoldLine /></div>

        <Team />

        <div style={{ padding: "0 24px" }}><GoldLine /></div>

        <CTABand />
      </main>
    </>
  );
}