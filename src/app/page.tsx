"use client";

import React, { useEffect, useState } from "react";
import { SectionId, SupportedLocale } from "@/types/portfolio";
import { PERSONAL_PROFILE, INITIAL_PROJECTS } from "@/data/portfolioData";
import { SpotlightBackground } from "@/components/layout/SpotlightBackground";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { CodeSection } from "@/components/sections/CodeSection";
import { UnitySection } from "@/components/sections/UnitySection";
import { ThreeDSection } from "@/components/sections/ThreeDSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionId>("about");
  const [locale, setLocale] = useState<SupportedLocale>("pt");

  // Non-invasive automatic location/language detection
  useEffect(() => {
    // 1. Prioritize user's saved choice if previously selected
    try {
      const savedLocale = localStorage.getItem("portfolio_locale") as SupportedLocale | null;
      if (savedLocale === "pt" || savedLocale === "en") {
        setLocale(savedLocale);
        return;
      }
    } catch {
      // Ignore if localStorage is disabled or restricted
    }

    // 2. Lightweight, non-invasive check of browser language & local timezone
    try {
      const browserLanguages = [
        navigator.language,
        ...(navigator.languages || []),
      ].map((lang) => (lang || "").toLowerCase());

      const isPtLanguage = browserLanguages.some((lang) => lang.startsWith("pt"));

      const timeZone = (Intl.DateTimeFormat().resolvedOptions().timeZone || "").toLowerCase();
      const isBrazilTimeZone =
        timeZone.includes("sao_paulo") ||
        timeZone.includes("brazil") ||
        timeZone.includes("fortaleza") ||
        timeZone.includes("recife") ||
        timeZone.includes("manaus") ||
        timeZone.includes("belem") ||
        timeZone.includes("cuiaba") ||
        timeZone.includes("campo_grande") ||
        timeZone.includes("porto_velho") ||
        timeZone.includes("boa_vista") ||
        timeZone.includes("rio_branco") ||
        timeZone.includes("maceio") ||
        timeZone.includes("bahia") ||
        timeZone.includes("noronha") ||
        timeZone.includes("santarem") ||
        timeZone.includes("araguaina");

      // In Brazil -> Keep Portuguese ("pt"). Outside Brazil -> Set to English ("en").
      if (isPtLanguage || isBrazilTimeZone) {
        setLocale("pt");
      } else {
        setLocale("en");
      }
    } catch {
      setLocale("pt");
    }
  }, []);

  // Toggle locale between Portuguese and English, persisting preference
  const handleToggleLocale = () => {
    setLocale((prev) => {
      const next: SupportedLocale = prev === "pt" ? "en" : "pt";
      try {
        localStorage.setItem("portfolio_locale", next);
      } catch {
        // Ignore localStorage error
      }
      return next;
    });
  };

  // Scroll spy to automatically update active nav icon based on viewport
  useEffect(() => {
    const sectionIds: SectionId[] = ["about", "code", "unity", "3d"];
    const handleScroll = () => {
      // Check if user scrolled to the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        setActiveSection("3d");
        return;
      }

      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SpotlightBackground>
      {/* Sticky top navigation bar with blur effect on scroll */}
      <Navbar
        activeSection={activeSection}
        onSelectSection={setActiveSection}
        locale={locale}
      />

      <main className="w-full flex flex-col items-center">
        {/* Section 1: Hero & About & Contact */}
        <HeroSection profile={PERSONAL_PROFILE} locale={locale} />

        {/* Section 2: Code & Engineering (SITTAX & PORTFOLIO) */}
        <CodeSection projects={INITIAL_PROJECTS} locale={locale} />

        {/* Section 3: Unity & Tools (Custom Spawner Tool) */}
        <UnitySection projects={INITIAL_PROJECTS} locale={locale} />

        {/* Section 4: 3D Modeling (ArtStation Showcase) */}
        <ThreeDSection projects={INITIAL_PROJECTS} locale={locale} />
      </main>

      {/* Footer concluding the continuous central timeline spine with 3 columns */}
      <Footer
        profile={PERSONAL_PROFILE}
        locale={locale}
        onToggleLocale={handleToggleLocale}
      />
    </SpotlightBackground>
  );
}
