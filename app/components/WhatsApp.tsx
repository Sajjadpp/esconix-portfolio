'use client'

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function WhatsAppButton() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buttonSize = isMobile ? 44 : 48;
  const iconSize = isMobile ? 21 : 23;

  return (
    <motion.button
      aria-label="Chat on WhatsApp"
      onClick={() => window.open("https://wa.me/917034384914", "_blank", "noopener,noreferrer")}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        y: [0, -6, 0],
        scale: 1,
        boxShadow: [
          "0 10px 28px rgba(37,211,102,0.45), 0 10px 22px rgba(0,0,0,0.35)",
          "0 14px 34px rgba(37,211,102,0.52), 0 12px 26px rgba(0,0,0,0.4)",
          "0 10px 28px rgba(37,211,102,0.45), 0 10px 22px rgba(0,0,0,0.35)",
        ],
      }}
      transition={{
        opacity: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        width: buttonSize,
        height: buttonSize,
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.2)",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 9999,
      }}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.53 0 .24 5.29.24 11.8c0 2.08.54 4.11 1.57 5.9L0 24l6.48-1.69a11.76 11.76 0 0 0 5.56 1.42h.01c6.5 0 11.79-5.29 11.79-11.8 0-3.15-1.23-6.1-3.32-8.45ZM12.05 21.7h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.84 1 1.03-3.74-.24-.38a9.78 9.78 0 0 1-1.52-5.2c0-5.42 4.41-9.83 9.83-9.83 2.63 0 5.1 1.02 6.96 2.88a9.79 9.79 0 0 1 2.87 6.95c0 5.42-4.41 9.83-9.83 9.83Zm5.39-7.37c-.29-.14-1.72-.85-1.99-.95-.27-.1-.47-.14-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.14-1.21-.45-2.31-1.43-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.12-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.2.05-.37-.02-.51-.08-.14-.67-1.62-.92-2.22-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-.99 2.44.03 1.44 1.03 2.83 1.18 3.03.14.2 2.03 3.1 4.92 4.34.69.3 1.22.48 1.64.61.69.22 1.32.19 1.82.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34Z"
          fill="#FFFFFF"
        />
      </svg>
    </motion.button>
  );
}

export default WhatsAppButton