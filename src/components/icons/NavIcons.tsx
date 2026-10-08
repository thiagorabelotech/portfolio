import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

/**
 * About / Person wireframe outline icon matching the Figma mockup
 */
export function PersonNavIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M50 166C50 139.415 56.846 118.774 82.1801 114.254C83.1583 114.08 83.8986 113.239 83.8986 112.246V105.799C83.8986 105.065 83.6292 104.356 83.1414 103.806L73.706 93.1863C67.8533 86.5987 64.5828 77.804 64.5828 68.6525V66.2294C64.5828 56.2461 68.3551 47.6334 76.581 41.142C83.7381 35.494 91.7469 34 100.078 34C108.409 34 115.593 35.8098 122.419 41.142C130.674 47.5903 134.417 56.2461 134.417 66.2294V68.6525C134.417 77.804 131.147 86.5987 125.294 93.1863L115.859 103.806C115.371 104.356 115.101 105.065 115.101 105.799V112.246C115.101 113.239 115.842 114.08 116.82 114.254C142.154 118.774 149 139.415 149 166"
        strokeWidth="9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Code `</>` icon matching Tag_icon.svg from Figma
 */
export function CodeNavIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M72 140L17 101.327L72 60"
        strokeWidth="9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M128 140L183 101.327L128 60"
        strokeWidth="9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M63.3095 187.457L137.31 10.4571"
        strokeWidth="9"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Isometric Cube icon matching Unity_icon.svg from Figma
 */
export function CubeNavIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M100 97.5V169M100 97.5L162 61.5M100 97.5L39 61.5M46.5 140L100 169L155.5 140M162 122V61.5L111 32M39 122V61.5L91.5 32"
        strokeWidth="8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * 3D Geometry icon matching 3D_icon.svg from Figma
 */
export function GeometryNavIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M37.5 59L97.5 94.5V168L37.5 133.5V59ZM50 44.5L117 82V168L177 133.5V53L109.5 15.5L50 44.5Z"
        strokeWidth="9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Sittax Logo Icon (distinctive 4-quadrant bracket logo)
 */
export function SittaxLogoIcon({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Sittax Logo"
    >
      <path
        d="M12 20C12 15.5817 15.5817 12 20 12H22V17H20C18.3431 17 17 18.3431 17 20V22H12V20Z"
        fill="#f97316"
      />
      <path
        d="M28 12H30C34.4183 12 38 15.5817 38 20V22H33V20C33 18.3431 31.6569 17 30 17H28V12Z"
        fill="#f97316"
      />
      <path
        d="M38 28C38 32.4183 34.4183 36 30 36H28V31H30C31.6569 31 33 29.6569 33 28V26H38V28Z"
        fill="#f97316"
      />
      <path
        d="M20 36H18C13.5817 36 10 32.4183 10 28V26H15V28C15 29.6569 16.3431 31 18 31H20V36Z"
        fill="#f97316"
      />
    </svg>
  );
}

/**
 * Clean GitHub Mark SVG
 */
export function GitHubIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

/**
 * Clean LinkedIn Mark SVG
 */
export function LinkedInIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
