"use client";

import React from "react";
import Image from "next/image";
import { Globe } from "lucide-react";
import { ProjectItem, SupportedLocale } from "@/types/portfolio";
import {
  SittaxProjectIcon,
  PortfolioProjectIcon,
  UnityToolsProjectIcon,
  ArtstationProjectIcon,
} from "@/components/icons/ProjectIcons";
import { TechBadgeWithTooltip } from "@/components/icons/TechIcons";

interface ProjectCardProps {
  project: ProjectItem;
  locale: SupportedLocale;
  className?: string;
}

export function ProjectCard({
  project,
  locale,
  className = "",
}: ProjectCardProps) {
  // Render official project sub-icons from AssetsAndReferences/SubIcons
  const renderLogo = () => {
    if (project.id === "sittax") {
      return <SittaxProjectIcon size={46} className="shrink-0 drop-shadow-md" />;
    }

    if (project.id === "portfolio") {
      return <PortfolioProjectIcon size={46} className="shrink-0 drop-shadow-md" />;
    }

    if (project.id === "unity-tools") {
      return <UnityToolsProjectIcon size={46} className="shrink-0 drop-shadow-md" />;
    }

    if (project.id === "3d-showcase") {
      return <ArtstationProjectIcon size={46} className="shrink-0 drop-shadow-md" />;
    }

    return <PortfolioProjectIcon size={46} className="shrink-0" />;
  };

  return (
    <article
      id={`project-${project.id}`}
      data-project-card="true"
      aria-labelledby={`heading-${project.id}`}
      className={`relative w-full max-w-5xl mx-auto px-6 py-6 scroll-mt-28 ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Project Information (7 cols on desktop) */}
        <div className="lg:col-span-6 flex flex-col items-start z-10">
          {/* Top Logo / Icon */}
          <div className="mb-3">{renderLogo()}</div>

          {/* Project Title */}
          <h3
            id={`heading-${project.id}`}
            className="text-3xl sm:text-4xl font-extrabold tracking-wider text-white uppercase"
          >
            {project.title}
          </h3>

          {/* Subtitle if available (larger than description) */}
          {project.subtitle && (
            <h4 className="text-base sm:text-lg font-medium text-neutral-300 mt-2 tracking-wide">
              {project.subtitle[locale]}
            </h4>
          )}

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-lg">
            {project.description[locale]}
          </p>

          {/* External Link (without underline) */}
          {project.externalLink && (
            <a
              href={project.externalLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 mt-5 text-sm font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
              title={`Acessar ${project.externalLink.label}`}
            >
              <Globe className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              <span className="transition-colors group-hover:text-white">
                {project.externalLink.label}
              </span>
            </a>
          )}

          {/* Technology Icons with Tooltips (replaces text tags) */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2.5 w-full max-w-md">
              {project.technologies.map((tech) => (
                <TechBadgeWithTooltip key={tech} name={tech} />
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Screenshot with organic gradient fade mask (6 cols on desktop) */}
        <div className="lg:col-span-6 relative w-full h-[280px] sm:h-[340px] md:h-[380px] flex items-center justify-center">
          {project.imageSrc ? (
            <div className="relative w-full h-full rounded-lg overflow-hidden project-image-mask">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt || project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-left lg:object-center transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          ) : (
            <div className="w-full h-full rounded-xl border border-dashed border-neutral-800 bg-neutral-950/40 flex flex-col items-center justify-center text-neutral-600">
              <span className="font-mono text-xs uppercase tracking-wider">
                Preview Asset
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
