"use client";

import React from "react";
import { ProjectItem, SupportedLocale } from "@/types/portfolio";
import { ProjectCard } from "@/components/ui/ProjectCard";

interface UnitySectionProps {
  projects: ProjectItem[];
  locale: SupportedLocale;
}

export function UnitySection({ projects, locale }: UnitySectionProps) {
  const unityProjects = projects.filter((p) => p.sectionId === "unity");

  return (
    <section
      id="unity"
      aria-label="Unity and Game Engine Projects"
      className="relative w-full flex flex-col items-center scroll-mt-28"
    >
      {/* Render Unity Projects with continuous vertical line between cards */}
      {unityProjects.map((project) => (
        <React.Fragment key={project.id}>
          <ProjectCard project={project} locale={locale} />
          {/* Continuous vertical connector line to next section */}
          <div className="w-[1.5px] h-24 sm:h-36 bg-neutral-700/80 shrink-0" />
        </React.Fragment>
      ))}
    </section>
  );
}
