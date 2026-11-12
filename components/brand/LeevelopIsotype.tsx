import type { SVGProps } from "react";

type LeevelopIsotypeProps = SVGProps<SVGSVGElement> & {
  size?: number;
  teal?: string;
  blue?: string;
};

export function LeevelopIsotype({
  size = 40,
  teal = "#29B9CD",
  blue = "#339DFF",
  ...props
}: LeevelopIsotypeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      role="img"
      aria-label="Símbolo da Leevelop"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16 8 H42 V53 H68 V80 H27 C21 80 16 79 16 73 Z" fill={teal} />
      <circle cx="68" cy="24" r="16" fill={blue} />
      <path d="M68 53 H85 Q96 53 96 64 V80 H68 Z" fill={blue} />
    </svg>
  );
}
