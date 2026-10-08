"use client";

import React from "react";
import { ProjectItem, SupportedLocale } from "@/types/portfolio";
import { ProjectCard } from "@/components/ui/ProjectCard";

interface CodeSectionProps {
  projects: ProjectItem[];
  locale: SupportedLocale;
}

export function CodeSection({ projects, locale }: CodeSectionProps) {
  const codeProjects = projects.filter((p) => p.sectionId === "code");

  return (
    <section
      id="code"
      aria-label="Code and Engineering Projects"
      className="relative w-full flex flex-col items-center scroll-mt-28"
    >
      {/* Top connector line continuing uninterruptedly from Hero */}
      <div className="w-[1.5px] h-24 sm:h-32 bg-neutral-700/80 shrink-0" />

      {/* Render Code Projects with continuous vertical line between cards */}
      {codeProjects.map((project, index) => (
        <React.Fragment key={project.id}>
          <ProjectCard project={project} locale={locale} />
          {/* Continuous vertical connector line between projects and to next section */}
          <div className="w-[1.5px] h-24 sm:h-36 bg-neutral-700/80 shrink-0" />
        </React.Fragment>
      ))}
    </section>
  );
}
