import { Product } from "@/lib/products";

const categoryThemes: Record<Product["category"], { bg: string; accent: string; stripe: string }> = {
  "Business & Career":  { bg: "#1a2744", accent: "#4A90D9", stripe: "#2a3d6e" },
  "Sci-Fi & Fantasy":   { bg: "#1a1030", accent: "#9B59B6", stripe: "#2d1b4e" },
  "Technology":         { bg: "#0d2b1e", accent: "#27AE60", stripe: "#1a4a33" },
  "Self-Help":          { bg: "#2b1a0d", accent: "#E67E22", stripe: "#4a2d1a" },
  "Food & Lifestyle":   { bg: "#2b0d1a", accent: "#E91E8C", stripe: "#4a1a2d" },
  "Mystery & Thriller": { bg: "#1a0d0d", accent: "#C0392B", stripe: "#3d1a1a" },
  "Home & Garden":      { bg: "#0d2b2b", accent: "#1ABC9C", stripe: "#1a4a4a" },
};

function wrapText(text: string, maxCharsPerLine: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    if ((current + " " + word).trim().length > maxCharsPerLine) {
      if (current) lines.push(current.trim());
      current = word;
    } else {
      current = (current + " " + word).trim();
    }
  }
  if (current) lines.push(current.trim());
  return lines;
}

export default function BookCover({ product }: { product: Product }) {
  const theme = categoryThemes[product.category];
  const nameLines = wrapText(product.name, 14);
  const lineHeight = 28;
  const totalTextHeight = nameLines.length * lineHeight;
  const textStartY = 160 - totalTextHeight / 2;

  return (
    <svg
      viewBox="0 0 200 280"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full rounded-lg"
      aria-label={product.name}
    >
      {/* Background */}
      <rect width="200" height="280" fill={theme.bg} rx="6" />

      {/* Spine shadow */}
      <rect x="0" y="0" width="12" height="280" fill="rgba(0,0,0,0.3)" rx="6" />
      <rect x="12" y="0" width="4" height="280" fill="rgba(255,255,255,0.04)" />

      {/* Decorative stripe band */}
      <rect x="16" y="40" width="168" height="6" fill={theme.stripe} />
      <rect x="16" y="234" width="168" height="6" fill={theme.stripe} />

      {/* Accent top bar */}
      <rect x="16" y="20" width="168" height="14" fill={theme.accent} rx="2" />

      {/* Center glow */}
      <ellipse cx="108" cy="160" rx="70" ry="55" fill={theme.accent} fillOpacity="0.08" />

      {/* Decorative corner ornament top-right */}
      <circle cx="172" cy="60" r="18" fill={theme.accent} fillOpacity="0.12" />
      <circle cx="172" cy="60" r="10" fill={theme.accent} fillOpacity="0.2" />

      {/* Product name text */}
      {nameLines.map((line, i) => (
        <text
          key={i}
          x="108"
          y={textStartY + i * lineHeight}
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Georgia, 'Playfair Display', serif"
          fontWeight="700"
          fontSize={nameLines.length > 2 ? "16" : "18"}
          fill="#FFFFFF"
          letterSpacing="0.5"
        >
          {line}
        </text>
      ))}

      {/* Thin rule under title */}
      <line
        x1="50"
        y1={textStartY + totalTextHeight + 10}
        x2="166"
        y2={textStartY + totalTextHeight + 10}
        stroke={theme.accent}
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* Category label */}
      <text
        x="108"
        y="224"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'DM Sans', Inter, sans-serif"
        fontSize="9"
        fill={theme.accent}
        letterSpacing="2"
        textDecoration="none"
      >
        {product.category.toUpperCase()}
      </text>

      {/* Publisher tag */}
      <text
        x="108"
        y="254"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'DM Sans', Inter, sans-serif"
        fontSize="8"
        fill="rgba(255,255,255,0.35)"
        letterSpacing="1"
      >
        GLUETRAIN
      </text>

      {/* Border */}
      <rect x="0.5" y="0.5" width="199" height="279" fill="none" stroke={theme.accent} strokeWidth="1" strokeOpacity="0.25" rx="6" />
    </svg>
  );
}
