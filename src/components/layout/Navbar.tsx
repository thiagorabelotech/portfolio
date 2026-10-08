"use client";

import React, { useEffect, useState } from "react";
import { SectionId, SupportedLocale } from "@/types/portfolio";
import {
  PersonNavIcon,
  CodeNavIcon,
  CubeNavIcon,
  GeometryNavIcon,
} from "@/components/icons/NavIcons";

interface NavbarProps {
  activeSection: SectionId;
  onSelectSection?: (sectionId: SectionId) => void;
  locale: SupportedLocale;
}

export function Navbar({
  activeSection,
  onSelectSection,
  locale,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasPassedEmail, setHasPassedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const emailEl = document.getElementById("hero-email");
      if (emailEl) {
        const rect = emailEl.getBoundingClientRect();
        const header = document.querySelector("header");
        const headerHeight = header ? header.offsetHeight : 85;
        // The vertical line in the header shows only after passing the email
        setHasPassedEmail(rect.bottom <= headerHeight);
      } else {
        setHasPassedEmail(window.scrollY > 450);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: Array<{
    id: SectionId;
    label: string;
    icon: React.ReactNode;
  }> = [
    {
      id: "about",
      label: "Home",
      icon: <PersonNavIcon size={34} />,
    },
    {
      id: "code",
      label: locale === "pt" ? "Código & Web" : "Code & Web",
      icon: <CodeNavIcon size={34} />,
    },
    {
      id: "unity",
      label: "Unity",
      icon: <CubeNavIcon size={34} />,
    },
    {
      id: "3d",
      label: "3D Modeling",
      icon: <GeometryNavIcon size={34} />,
    },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: SectionId
  ) => {
    e.preventDefault();
    if (onSelectSection) {
      onSelectSection(sectionId);
    }

    if (sectionId === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.getElementById(sectionId);
    if (target) {
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 85;

      // Locate the project card within the target section to calculate exact position
      const card = target.querySelector("[data-project-card]") || target;
      const cardRect = card.getBoundingClientRect();
      const targetTop = cardRect.top + window.scrollY;

      // Frame the card with a comfortable 24px breathing space under the fixed header
      const offsetPosition = targetTop - headerHeight - 24;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full flex flex-col items-center pt-5 pb-0 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-[#09090b]/85 shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >

      {/* 4 Icon Navigation Bar */}
      <nav
        aria-label="Portfolio sections"
        className="flex items-center gap-12 sm:gap-16"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
              className={`group relative flex flex-col items-center py-2 transition-all duration-200 focus:outline-none cursor-pointer ${
                isActive
                  ? "text-white"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              {/* Icon */}
              <div className="transition-transform group-hover:scale-105">
                {item.icon}
              </div>

              {/* Red indicator under active item */}
              <div
                className={`mt-2 h-[2.5px] w-9 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-red-500 opacity-100 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                    : "opacity-0"
                }`}
              />

              {/* Floating Tooltip on Hover */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-mono font-medium text-white bg-neutral-900/95 border border-neutral-700/80 rounded-md shadow-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-150 whitespace-nowrap z-50 scale-95 group-hover:scale-100">
                {item.label}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-neutral-900 border-t border-l border-neutral-700 rotate-45" />
              </div>
            </a>
          );
        })}
      </nav>

      {/* Central connector bar extending to the exact bottom border of the header */}
      <div className="w-full max-w-4xl relative flex flex-col items-center mt-2 px-6">
        {/* Horizontal thin divider line */}
        <div className="w-full h-[1px] bg-neutral-700/60" />
        {/* Vertical connector tick touching the header bottom strictly when scrolled past email */}
        <div
          className={`w-[1.5px] h-6 bg-neutral-700/80 transition-all duration-300 origin-top ${
            hasPassedEmail ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          }`}
        />
      </div>
    </header>
  );
}
