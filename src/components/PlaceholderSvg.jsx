const PALETTES = [
  ["#f4b942", "#c0392b", "#6b1e1e"],
  ["#1f7a5c", "#0e4d3a", "#a7e0c8"],
  ["#3a6ea5", "#0b2a4a", "#9fd3e8"],
  ["#d98e4a", "#7a3b1e", "#f3d9b1"],
  ["#2d5a3d", "#0f2a1a", "#8fc79a"],
  ["#b23a48", "#4a1020", "#f7c6a3"],
];

/** Random-looking SVG placeholder. Replace with <img src="..."/> when real photos are ready. */
export default function PlaceholderSvg({ seed = 0, className = "" }) {
  const [a, b, c] = PALETTES[seed % PALETTES.length];
  const id = `ph-${seed}`;
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="Placeholder image"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${id})`} />
      <circle cx={80 + ((seed * 53) % 240)} cy={70 + ((seed * 31) % 60)} r={40 + (seed % 3) * 12} fill={c} opacity=".35" />
      <path
        d={`M0 300 L0 ${190 - (seed % 3) * 20} Q100 ${130 + (seed % 4) * 15} 200 ${190 - (seed % 2) * 25} T400 ${170 + (seed % 3) * 10} L400 300Z`}
        fill={c}
        opacity=".45"
      />
      <path
        d={`M0 300 L0 ${240 - (seed % 2) * 15} Q150 ${200 + (seed % 3) * 10} 400 ${235 - (seed % 3) * 10} L400 300Z`}
        fill="#000"
        opacity=".25"
      />
    </svg>
  );
}
