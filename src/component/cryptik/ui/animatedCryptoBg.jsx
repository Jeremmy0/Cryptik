const icons = [
  { label: "₿", name: "Bitcoin" },
  { label: "Ξ", name: "Ethereum" },
  { label: "◎", name: "Solana" },
  { label: "🅑", name: "Binance Coin" },
  { label: "✕", name: "Ripple" },
  { label: "Ð", name: "Dogecoin" },
  { label: "₳", name: "Cardano" },
  { label: "●", name: "Polkadot" },
  { label: "Ł", name: "Litecoin" },
  { label: "Λ", name: "Avalanche" },
  { label: "🔗", name: "Chainlink" },
  { label: "🦄", name: "Uniswap" },
  { label: "★", name: "Stellar" },
  { label: "T", name: "Tron" },
  { label: "🐕", name: "Shiba Inu" },
  { label: "ɱ", name: "Monero" },
];

// Spread icons vertically, including at the very top (y: -50 to y: 1000)
const placements = [
  [150, 0, 78, 0.48, "0s"],
  [500, 60, 36, 0.33, "2s"],
  [800, 120, 60, 0.41, "1s"],
  [1200, 30, 32, 0.36, "3s"],
  [1600, 80, 40, 0.38, "0.5s"],
  [300, 200, 54, 0.44, "1.5s"],
  [700, 350, 28, 0.31, "2.5s"],
  [1100, 320, 44, 0.39, "0.7s"],
  [1500, 400, 38, 0.34, "1.2s"],
  [400, 700, 52, 0.53, "2.2s"],
  [900, 600, 34, 0.35, "0.8s"],
  [1300, 700, 46, 0.56, "1.8s"],
  [1700, 600, 30, 0.32, "2.8s"],
  [600, 900, 56, 0.60, "1.1s"],
  [1000, 1000, 42, 0.37, "2.1s"],
  [1400, 1050, 36, 0.30, "0.6s"],
];

// Generate N random repeat displacements within bounds
const NUM_REPEATS = 3;
const SVG_WIDTH = 1920;
const SVG_HEIGHT = 1080;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const repeats = Array.from({ length: NUM_REPEATS }, () => ({
  dx: getRandomInt(-200, 200),
  dy: getRandomInt(-100, 100),
}));

const CryptoBg = () => (
  <svg
    width="100%"
    height="100%"
    viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 1,
      pointerEvents: "none",
    }}
  >
    {repeats.map((repeat, rIdx) =>
      placements.map(([x, y, size, opacity, delay], i) => {
        const nx = Math.max(0, Math.min(SVG_WIDTH, x + repeat.dx));
        const ny = Math.max(0, Math.min(SVG_HEIGHT, y + repeat.dy));
        const icon = icons[i % icons.length];
        const animId = `float${rIdx}_${i}`;
        // Clamp opacity between 0.3 and 0.6
        const clampedOpacity = Math.max(0.3, Math.min(0.6, opacity));
        return (
          <g key={animId} opacity={clampedOpacity}>
            <text
              x={nx}
              y={ny}
              textAnchor="middle"
              fontSize={size}
              fontFamily="Segoe UI, Arial"
              fill="#fff"
              fontWeight="bold"
              opacity={clampedOpacity}
            >
              {icon.label}
              <animate
                attributeName="y"
                values={`${ny};${ny + 20};${ny}`}
                dur="10s"
                begin={delay}
                repeatCount="indefinite"
              />
            </text>
          </g>
        );
      })
    )}
  </svg>
);

export default CryptoBg;