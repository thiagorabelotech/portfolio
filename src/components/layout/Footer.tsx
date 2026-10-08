"use client";

import React from "react";
import { ArrowUp, Mail, ExternalLink, Globe } from "lucide-react";
import { PersonalProfile, SupportedLocale } from "@/types/portfolio";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/NavIcons";

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
            className="group flex items-center gap-2 py-2 text-neutral-400 hover:text-white transition-colors duration-200 text-xs font-mono tracking-wider cursor-pointer focus:outline-none"
            title={locale === "pt" ? "Voltar ao topo" : "Back to top"}
            aria-label={locale === "pt" ? "Voltar ao topo" : "Back to top"}
          >
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            <span>{locale === "pt" ? "VOLTAR AO TOPO" : "BACK TO TOP"}</span>
          </button>
        </div>

        {/* Center Column: Redes Sociais */}
        <div className="flex justify-center items-center gap-3">
          <a
            href={profile.socialLinks.email}
            className="p-2.5 rounded-lg border border-neutral-800/80 bg-neutral-900/60 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors cursor-pointer"
            title="Email"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          {profile.socialLinks.github && (
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-neutral-800/80 bg-neutral-900/60 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors cursor-pointer"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <GitHubIcon size={17} />
            </a>
          )}

          {profile.socialLinks.linkedin && (
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-neutral-800/80 bg-neutral-900/60 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors cursor-pointer"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon size={17} />
            </a>
          )}

          {profile.socialLinks.artstation && (
            <a
              href={profile.socialLinks.artstation}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-neutral-800/80 bg-neutral-900/60 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors cursor-pointer"
              title="ArtStation"
              aria-label="ArtStation Profile"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Right Column: Sutil seletor PT | EN */}
        <div className="flex justify-center md:justify-end">
          {onToggleLocale && (
            <button
              onClick={onToggleLocale}
              className="group flex items-center gap-2 py-2 text-neutral-400 hover:text-white transition-colors duration-200 text-xs font-mono tracking-wider cursor-pointer focus:outline-none"
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
      <div className="mt-10 text-center text-xs text-neutral-500 font-mono tracking-wider">
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
