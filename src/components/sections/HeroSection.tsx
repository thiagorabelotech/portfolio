"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Check } from "lucide-react";
import { PersonalProfile, SupportedLocale } from "@/types/portfolio";

interface HeroSectionProps {
  profile: PersonalProfile;
  locale: SupportedLocale;
}

export function HeroSection({ profile, locale }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="about"
      aria-label="About and Contact"
      className="relative w-full h-screen min-h-[640px] max-h-[1080px] flex flex-col items-center justify-between overflow-hidden pt-28 pb-0 px-6"
    >
      {/* 16:9 3D Spotlight background image with overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/images/spotlight-hero-bg.png"
          alt="Spotlight with floating 3D cube and sphere"
          fill
          priority
          className="object-cover object-center blur-[2px] scale-105"
        />
        {/* Soft vignette and contrast overlay to keep text perfectly legible */}
        <div className="absolute inset-0 bg-radial from-black/20 via-black/45 to-[#09090b]/90" />
        {/* Bottom smooth fade to blend into subsequent sections */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#09090b]" />
      </div>

      {/* Top spacer to vertically center the content block */}
      <div className="relative z-10 flex-1 w-full min-h-[50px]" />

      {/* Main Center Block: Name, Title, and Description (Dead center of viewport) */}
      <div className="relative z-10 shrink-0 flex flex-col items-center text-center w-full max-w-5xl px-4 py-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[96px] font-extrabold tracking-wider text-white whitespace-nowrap drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] leading-tight lg:leading-none">
          {profile.name}
        </h1>

        <p className="mt-3 text-base sm:text-lg font-medium text-neutral-300 tracking-wide drop-shadow-md">
          {profile.role[locale]}
        </p>

        <p className="mt-6 text-sm sm:text-base text-neutral-300/85 font-light leading-relaxed max-w-lg drop-shadow-md">
          {profile.summary[locale]}
        </p>
      </div>

      {/* Bottom Section: Space leading to email, and vertical spine line starting strictly after email */}
      <div className="relative z-10 flex-1 w-full flex flex-col items-center justify-between min-h-[140px]">
        {/* Spacer before email (no line) */}
        <div className="flex-1 min-h-[40px]" />

        {/* Email Contact Direct Click-to-Copy */}
        <button
          id="hero-email"
          type="button"
          onClick={handleCopyEmail}
          className="group relative flex items-center gap-3 px-3 py-1.5 text-neutral-300 hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none shrink-0"
          title={locale === "pt" ? "Clique para copiar o e-mail" : "Click to copy email"}
          aria-label={locale === "pt" ? "Copiar endereço de e-mail" : "Copy email address"}
        >
          {copied ? (
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 animate-in fade-in transition-all" />
          ) : (
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 group-hover:text-white transition-colors" />
          )}
          <span className="text-xs sm:text-sm font-medium tracking-wide">
            {profile.email}
          </span>

          {copied && (
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[11px] text-emerald-400 font-mono tracking-tight whitespace-nowrap bg-neutral-900/90 px-2 py-0.5 rounded border border-emerald-500/40 shadow-sm pointer-events-none">
              {locale === "pt" ? "Copiado!" : "Copied!"}
            </span>
          )}
        </button>

        {/* Connector line continuing downward all the way to the bottom edge */}
        <div className="w-[1.5px] h-6 sm:h-14 bg-neutral-700/80 mt-3 shrink-0" />
      </div>
    </section>
  );
}
