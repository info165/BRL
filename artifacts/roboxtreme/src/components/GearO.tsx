import type { CSSProperties } from "react";
import gearImg from "@assets/gear-o.png";

type GearOProps = {
  /** Rendered width and height. Defaults to 0.8em so it matches the surrounding capital letters. */
  size?: string;
  /** Soft gold glow behind the gear, for the large hero headline. */
  glow?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * The metal gear that stands in for the second "O" in "Robotics".
 * Decorative only: pair it with an accessible label on the word it sits in.
 */
export default function GearO({ size = "0.8em", glow = false, className = "", style }: GearOProps) {
  return (
    <img
      src={gearImg}
      alt=""
      aria-hidden="true"
      draggable={false}
      className={`inline-block shrink-0 select-none object-contain ${className}`}
      style={{
        width: size,
        height: size,
        filter: glow
          ? "drop-shadow(0 0 16px rgba(255,190,90,0.35)) drop-shadow(0 4px 10px rgba(0,0,0,0.55))"
          : "drop-shadow(0 1px 2px rgba(0,0,0,0.5))",
        ...style,
      }}
    />
  );
}
