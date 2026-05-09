"use client";

import { useEffect, useRef, useState } from "react";
import Projects from "./components/homePage/Project";
import Contact from "./components/homePage/Contact";
import Services from "./components/homePage/Service";
import Hero from "./components/homePage/Hero";
import { BG, GOLD, WHITE } from "./data";


export default function EsconixHome() {
  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: ${BG}; color: ${WHITE}; -webkit-font-smoothing: antialiased; }
        ::selection { background: rgba(201,168,76,0.3); color: ${WHITE}; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${BG}; }
        ::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.3); border-radius: 2px; }
      `}</style>
      

      <main>
        <Hero />

        {/* Thin gold separator */}
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ height: 1, background: `linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)` }} />
        </div>

        <Services />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ height: 1, background: `linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)` }} />
        </div>

        <Projects />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ height: 1, background: `linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)` }} />
        </div>

        <Contact />
      </main>
      
    </>
  );
}