"use client";

import React from "react";
import { ProjectItem, SupportedLocale } from "@/types/portfolio";
import { ProjectCard } from "@/components/ui/ProjectCard";

interface ThreeDSectionProps {
  projects: ProjectItem[];
  locale: SupportedLocale;
}

export function ThreeDSection({ projects, locale }: ThreeDSectionProps) {
  const threeDProjects = projects.filter((p) => p.sectionId === "3d");

  return (
    <section
      id="3d"
      aria-label="3D Modeling and ArtStation Showcase"
      className="relative w-full flex flex-col items-center scroll-mt-28"
    >
      {/* Render 3D Projects with continuous vertical line */}
      {threeDProjects.map((project) => (
        <React.Fragment key={project.id}>
          <ProjectCard project={project} locale={locale} />
          {/* Continuous vertical connector line to Footer */}
          <div className="w-[1.5px] h-24 sm:h-36 bg-neutral-700/80 shrink-0" />
        </React.Fragment>
      ))}
    </section>
  );
}
