import type { SVGProps } from "react";
export type ServiceIconName = "compass" | "browser" | "mobile" | "system" | "automation" | "product";
export function ServiceIcon({ name, ...props }: SVGProps<SVGSVGElement> & { name: ServiceIconName }) {
  const paths: Record<ServiceIconName, string> = {
    compass: "M30 17L26 27L16 32L21 21L30 17Z",
    browser: "M5 15H43M12 22H25V34H12V22ZM29 22H37M29 27H37M29 32H34",
    mobile: "M18 9H30",
    system: "M24 5L34 11V22L24 28L14 22V11L24 5ZM14 22L24 28V40L14 34V22ZM24 28L34 22V34L24 40V28ZM14 11L24 17L34 11",
    automation: "M24 4V9M24 39V44M4 24H9M39 24H44M10 10L14 14M34 34L38 38M38 10L34 14M14 34L10 38",
    product: "M24 6C17 6 12 11 12 18V27M24 6C31 6 36 11 36 18V27M10 41C12 33 17 29 24 29C31 29 36 33 38 41",
  };
  return <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
    {name === "compass" && <circle cx="24" cy="24" r="19"/>}
    {name === "browser" && <rect x="5" y="8" width="38" height="31" rx="3"/>}
    {name === "mobile" && <rect x="14" y="4" width="20" height="40" rx="4"/>}
    {name === "automation" && <circle cx="24" cy="24" r="9"/>}
    {name === "product" && <circle cx="24" cy="17" r="6"/>}
    <path d={paths[name]} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;
}
