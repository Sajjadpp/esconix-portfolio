import { GOLD } from "@/app/data";

function SectionLabel({ children }: { children: string }) {
  return (
    <p style={{
      fontSize: 11,
      letterSpacing: "0.25em",
      textTransform: "uppercase",
      color: GOLD,
      marginBottom: 12,
      fontFamily: "'DM Mono', monospace",
    }}>
      {children}
    </p>
  );
}

export default SectionLabel;