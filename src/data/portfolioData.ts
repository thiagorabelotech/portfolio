import {
  NavItemConfig,
  PersonalProfile,
  ProjectItem,
} from "@/types/portfolio";

export const PERSONAL_PROFILE: PersonalProfile = {
  name: "THIAGO RABELO",
  role: {
    pt: "Full Stack Developer",
    en: "Full Stack Developer",
  },
  summary: {
    pt: "Desenvolvedor focado na construção de sistemas web robustos, arquitetura moderna de software e ferramentas interativas. Experiência em desenvolvimento front-end com React/TypeScript, back-end escalável e desenvolvimento com Unity e 3D.",
    en: "Developer focused on engineering robust web applications, modern software architecture, and interactive tools. Experienced in React/TypeScript front-end development, scalable back-ends, and Unity/3D workflows.",
  },
  email: "thiagorabelotech@gmail.com",
  socialLinks: {
    email: "mailto:thiagorabelotech@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    artstation: "https://www.artstation.com/thiagorabelodev3d",
  },
};

export const NAVIGATION_ITEMS: NavItemConfig[] = [
  {
    id: "about",
    label: { pt: "Sobre & Contato", en: "About & Contact" },
    href: "#about",
  },
  {
    id: "code",
    label: { pt: "Código & Engenharia", en: "Code & Engineering" },
    href: "#code",
  },
  {
    id: "unity",
    label: { pt: "Unity & Ferramentas", en: "Unity & Tools" },
    href: "#unity",
  },
  {
    id: "3d",
    label: { pt: "Modelagem 3D", en: "3D Modeling" },
    href: "#3d",
  },
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: "sittax",
    sectionId: "code",
    title: "SITTAX",
    subtitle: {
      pt: "Plataforma de Gestão Fiscal e Tributária",
      en: "Tax & Fiscal Management Platform",
    },
    description: {
      pt: "Atuação no desenvolvimento e manutenção de produto corporativo para análise e cálculo tributário. Implementação de módulos front-end e regras de negócio com foco em integridade de dados e alta disponibilidade.",
      en: "Engineering and maintenance of an enterprise software product for tax analysis and automated calculations. Implemented front-end features and core business logic with high reliability.",
    },
    logoType: "icon",
    logoAccentColor: "#f97316",
    externalLink: {
      url: "https://sittax.com.br",
      label: "sittax.com.br",
    },
    imageSrc: "/images/projects/BG_Sittax.png",
    imageAlt: "Software SITTAX Interface",
    technologies: ["Angular", "C#", "SQL Server", "TypeScript", "RabbitMQ"],
  },
  {
    id: "portfolio",
    sectionId: "code",
    title: "PORTFOLIO",
    subtitle: {
      pt: "Aplicação Web Pessoal & Showcase",
      en: "Personal Web Application & Showcase",
    },
    description: {
      pt: "Desenvolvimento desta plataforma com Next.js, TypeScript e Tailwind CSS. Arquitetura orientada a componentes modulares, layout responsivo e estética visual dark com foco de luz cênico.",
      en: "Designed and developed this personal platform utilizing Next.js, TypeScript, and Tailwind CSS. Modular component architecture, responsive design, and atmospheric dark theme.",
    },
    logoType: "text",
    logoValue: "</>",
    imageSrc: "/images/projects/BG_Portfolio.png",
    imageAlt: "Portfolio Website Design & Architecture",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "unity-tools",
    sectionId: "unity",
    title: "TOOLS",
    subtitle: {
      pt: "Ferramenta Customizada de Spawner & Automação",
      en: "Custom Spawner & Scene Automation Tool",
    },
    description: {
      pt: "Desenvolvimento de extensões customizadas para o editor da Unity (Editor Scripting), viabilizando instanciação em massa de assets com controle de densidade, rotação procedural e otimização de workflow de level design.",
      en: "Custom Unity Editor tool scripting enabling procedural asset instantiation, density scattering, and optimized scene assembly for game design workflows.",
    },
    logoType: "icon",
    logoAccentColor: "#38bdf8",
    imageSrc: "/images/projects/BG_UnityTools.png",
    imageAlt: "Unity Custom Spawner Tool in Action",
    technologies: ["Unity", "C#"],
  },
  {
    id: "3d-showcase",
    sectionId: "3d",
    title: "3D ASSETS",
    subtitle: {
      pt: "Modelagem Hard Surface & Assets Estilizados",
      en: "Hard Surface Modeling & Stylized Assets",
    },
    description: {
      pt: "Modelagem e texturização de assets 3D focados em pipelines para jogos e renderização em tempo real. Topologia otimizada e mapeamento UV detalhado.",
      en: "3D asset creation and texturing tailored for real-time game engines. Optimized topology, UV unwrapping, and PBR texturing pipelines.",
    },
    logoType: "icon",
    logoAccentColor: "#a855f7",
    externalLink: {
      url: "https://www.artstation.com/thiagorabelodev3d",
      label: "artstation.com/thiagorabelodev3d",
    },
    imageSrc: "/images/projects/BG_3DModeling.png",
    imageAlt: "3D Modeling and Assets Showcase",
    technologies: ["Blender", "Substance Painter"],
  },
];
