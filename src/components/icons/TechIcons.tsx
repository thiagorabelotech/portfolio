import React from "react";
import Image from "next/image";

interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function AngularIcon({ size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 2L2 5.5L3.5 17.5L12 22L20.5 17.5L22 5.5L12 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 5.5L7 16.5H9.5L10.5 14H13.5L14.5 16.5H17L12 5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M11 12H13" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function CSharpIcon({ size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" />
      <path d="M10 8.5C7.5 8.5 7.5 15.5 10 15.5" />
      <path d="M14 10V14" />
      <path d="M16 10V14" />
      <path d="M13 11H17" />
      <path d="M13 13H17" />
    </svg>
  );
}

export function DotNetIcon({ size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="5" cy="18" r="1.5" fill="currentColor" />
      <path d="M7 6V18" />
      <path d="M11 12C11 8.5 15 8.5 15 12V18" />
      <path d="M19 12V18" />
      <path d="M17 9H21" />
    </svg>
  );
}

export function SqlServerIcon({ size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V5" />
      <path d="M4 12V19C4 20.66 7.58 22 12 22C16.42 22 20 20.66 20 19V12" />
    </svg>
  );
}

export function TypeScriptIcon({ size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 8H13M10 8V16" />
      <path d="M14 14C14.5 15.5 16.5 16 17.5 15C18.5 14 17.5 12.5 16 12C14.5 11.5 14.5 10 15.5 9.5C16.5 9 17.5 9.5 18 10.5" />
    </svg>
  );
}

export function RabbitMQIcon({ size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" />
      <path d="M8 8L10 12" />
      <path d="M16 8L14 12" />
      <circle cx="10" cy="14" r="1" fill="currentColor" />
      <circle cx="14" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}

export function NextJsIcon({ size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 8V16" />
      <path d="M9 10L15.5 17" />
      <path d="M15 8V13" />
    </svg>
  );
}

export function ReactIcon({ size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function TailwindIcon({ size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 12C7 9 9 8 11 9C12 9.5 12.5 10.5 13.5 11C14.5 11.5 15.5 11 16 9C15 12 13 13 11 12C10 11.5 9.5 10.5 8.5 10C7.5 9.5 6.5 10 6 12Z" />
      <path d="M10 16C11 13 13 12 15 13C16 13.5 16.5 14.5 17.5 15C18.5 15.5 19.5 15 20 13C19 16 17 17 15 16C14 15.5 13.5 14.5 12.5 14C11.5 13.5 10.5 14 10 16Z" />
    </svg>
  );
}

export function UnityTechIcon({ size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3L4 7.5V16.5L12 21L20 16.5V7.5L12 3Z" />
      <path d="M12 12V21" />
      <path d="M12 12L4 7.5" />
      <path d="M12 12L20 7.5" />
    </svg>
  );
}

export function BlenderIcon({ size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="14" r="5" />
      <circle cx="12" cy="14" r="2" fill="currentColor" />
      <path d="M12 9V3M8 10L3 7M16 10L21 7" />
    </svg>
  );
}

export function GenericToolIcon({ size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

/**
 * Returns matching icon image source URL from the user's custom technology icon assets
 */
export function getTechnologyIconSrc(techName: string): string | null {
  const norm = techName.toLowerCase();

  if (norm.includes("angular")) return "/images/tech/Angular_icon.png";
  if (norm.includes("c#") || norm.includes("csharp")) return "/images/tech/CSharp_icon.png";
  if (norm.includes(".net") || norm.includes("dotnet")) return "/images/tech/CSharp_icon.png";
  if (norm.includes("sql")) return "/images/tech/Sql_icon.png";
  if (norm.includes("typescript")) return "/images/tech/Typescript_icon.png";
  if (norm.includes("rabbitmq")) return "/images/tech/RabbitMQ_icon.png";
  if (norm.includes("next")) return "/images/tech/NextJS_icon.png";
  if (norm.includes("react")) return "/images/tech/React_icon.png";
  if (norm.includes("node")) return "/images/tech/NodeJS_icon.png";
  if (norm.includes("tailwind")) return "/images/tech/Tailwind_icon.png";
  if (norm.includes("unity")) return "/images/tech/UnityTools_icon.svg";
  if (norm.includes("blender")) return "/images/tech/Blender_icon.png";
  if (norm.includes("substance")) return "/images/tech/SubstancePainter_icon.png";
  if (norm.includes("figma")) return "/images/tech/Figma_icon.png";

  return null;
}

/**
 * Returns matching icon component for any technology name
 */
export function getTechnologyIcon(techName: string, size = 18) {
  const norm = techName.toLowerCase();

  if (norm.includes("angular")) return <AngularIcon size={size} />;
  if (norm.includes("c#") || norm.includes("csharp")) return <CSharpIcon size={size} />;
  if (norm.includes(".net") || norm.includes("dotnet")) return <DotNetIcon size={size} />;
  if (norm.includes("sql")) return <SqlServerIcon size={size} />;
  if (norm.includes("typescript")) return <TypeScriptIcon size={size} />;
  if (norm.includes("rabbitmq")) return <RabbitMQIcon size={size} />;
  if (norm.includes("next")) return <NextJsIcon size={size} />;
  if (norm.includes("react")) return <ReactIcon size={size} />;
  if (norm.includes("tailwind")) return <TailwindIcon size={size} />;
  if (norm.includes("unity")) return <UnityTechIcon size={size} />;
  if (norm.includes("blender")) return <BlenderIcon size={size} />;

  return <GenericToolIcon size={size} />;
}

/**
 * Interactive Tech Badge with Tooltip matching Rocketseat style, utilizing custom official icons
 */
export function TechBadgeWithTooltip({ name }: { name: string }) {
  const iconSrc = getTechnologyIconSrc(name);

  return (
    <div className="relative group/tech inline-flex items-center justify-center">
      <div
        className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-200 cursor-pointer flex items-center justify-center p-1 group-hover/tech:scale-115"
        aria-label={name}
      >
        {iconSrc ? (
          <Image
            src={iconSrc}
            alt={name}
            width={28}
            height={28}
            className="w-6 h-6 sm:w-7 sm:h-7 object-contain drop-shadow-md"
          />
        ) : (
          getTechnologyIcon(name, 22)
        )}
      </div>

      {/* Floating Tooltip */}
      <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-mono font-medium text-white bg-neutral-900/95 border border-neutral-700/80 rounded-md shadow-xl pointer-events-none opacity-0 group-hover/tech:opacity-100 transition-all duration-150 whitespace-nowrap z-30 scale-95 group-hover/tech:scale-100">
        {name}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-neutral-900 border-b border-r border-neutral-700 rotate-45" />
      </div>
    </div>
  );
}
