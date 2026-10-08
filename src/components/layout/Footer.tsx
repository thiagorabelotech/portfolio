"use client";

import React from "react";
import { ArrowUp, Mail, Globe } from "lucide-react";
import { PersonalProfile, SupportedLocale } from "@/types/portfolio";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/NavIcons";
import { ArtstationProjectIcon } from "@/components/icons/ProjectIcons";

interface FooterProps {
  profile: PersonalProfile;
  locale: SupportedLocale;
  onToggleLocale?: () => void;
}

export function Footer({ profile, locale, onToggleLocale }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full flex flex-col items-center pt-0 pb-16 px-6 bg-gradient-to-b from-transparent to-neutral-950/90">
      {/* Terminal node concluding the continuous central spine */}
      <div className="w-2.5 h-2.5 rounded-full border border-neutral-600 bg-neutral-800 shadow-[0_0_8px_rgba(255,255,255,0.15)] -mt-1 mb-10 shrink-0" />

      {/* 3-Column Footer Section (without vertical dividers) */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-center">
        {/* Left Column: Voltar ao topo */}
        <div className="flex justify-center md:justify-start">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 py-2 text-neutral-400 hover:text-white transition-colors duration-200 text-xs tracking-wider cursor-pointer focus:outline-none"
            title={locale === "pt" ? "Voltar ao topo" : "Back to top"}
            aria-label={locale === "pt" ? "Voltar ao topo" : "Back to top"}
          >
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            <span>{locale === "pt" ? "VOLTAR AO TOPO" : "BACK TO TOP"}</span>
          </button>
        </div>

        {/* Center Column: Redes Sociais */}
        <div className="flex justify-center items-center gap-5">
          <a
            href={profile.socialLinks.email}
            className="p-1 text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer"
            title="Email"
            aria-label="Send Email"
          >
            <Mail className="w-[18px] h-[18px]" />
          </a>

          {/* GitHub - Desabilitado com Tooltip em construção */}
          <div className="relative group/social flex items-center justify-center">
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="p-1 text-neutral-600 hover:text-neutral-500 cursor-not-allowed select-none transition-colors duration-200"
              aria-label="GitHub (em construção)"
            >
              <GitHubIcon size={18} />
            </button>
            <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium text-neutral-300 bg-neutral-900/95 border border-neutral-700/80 rounded-md shadow-xl pointer-events-none opacity-0 group-hover/social:opacity-100 transition-all duration-150 whitespace-nowrap z-30 scale-95 group-hover/social:scale-100">
              {locale === "pt" ? "GitHub em construção" : "GitHub under construction"}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-neutral-900 border-b border-r border-neutral-700 rotate-45" />
            </div>
          </div>

          {/* LinkedIn - Desabilitado com Tooltip em construção */}
          <div className="relative group/social flex items-center justify-center">
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="p-1 text-neutral-600 hover:text-neutral-500 cursor-not-allowed select-none transition-colors duration-200"
              aria-label="LinkedIn (em construção)"
            >
              <LinkedInIcon size={18} />
            </button>
            <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium text-neutral-300 bg-neutral-900/95 border border-neutral-700/80 rounded-md shadow-xl pointer-events-none opacity-0 group-hover/social:opacity-100 transition-all duration-150 whitespace-nowrap z-30 scale-95 group-hover/social:scale-100">
              {locale === "pt" ? "LinkedIn em construção" : "LinkedIn under construction"}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-neutral-900 border-b border-r border-neutral-700 rotate-45" />
            </div>
          </div>

          {profile.socialLinks.artstation && (
            <a
              href={profile.socialLinks.artstation}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer flex items-center justify-center"
              title="ArtStation"
              aria-label="ArtStation Profile"
            >
              <ArtstationProjectIcon size={18} />
            </a>
          )}
        </div>

        {/* Right Column: Sutil seletor PT | EN */}
        <div className="flex justify-center md:justify-end">
          {onToggleLocale && (
            <button
              onClick={onToggleLocale}
              className="group flex items-center gap-2 py-2 text-neutral-400 hover:text-white transition-colors duration-200 text-xs tracking-wider cursor-pointer focus:outline-none"
              title={
                locale === "pt"
                  ? "Alternar idioma para Inglês"
                  : "Switch language to Portuguese"
              }
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
              <span
                className={
                  locale === "pt"
                    ? "font-bold text-white"
                    : "text-neutral-500 hover:text-neutral-300"
                }
              >
                PT
              </span>
              <span className="text-neutral-600">/</span>
              <span
                className={
                  locale === "en"
                    ? "font-bold text-white"
                    : "text-neutral-500 hover:text-neutral-300"
                }
              >
                EN
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Copyright & Info */}
      <div className="mt-10 text-center text-xs text-neutral-500 tracking-wider">
        <p>
          {profile.name} • {profile.role[locale]}
        </p>
        <p className="mt-1 text-neutral-600">
          {locale === "pt"
            ? "Desenvolvido com Next.js, TypeScript e Tailwind CSS"
            : "Engineered with Next.js, TypeScript & Tailwind CSS"}
        </p>
      </div>
    </footer>
  );
}
