export default function HeroBgIcons({ placements, iconColors }) {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {placements.map(([left, top, fontSize, label], i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left,
            top,
            fontSize,
            color: iconColors[label] || "#fff",
            opacity: 0.18,
            fontWeight: "bold",
            WebkitTextStroke: `2px ${iconColors[label] || "#fff"}`,
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.08))",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {label}
        </div>
      ))}
    </div>
  );
}