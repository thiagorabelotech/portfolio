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
    pt: "Desenvolvedor de software atuando no desenvolvimento e manutenção de produtos, do front-end ao back-end. Experiência complementar com Unity e modelagem 3D. Natural de Goiânia-GO, atualmente cursando Análise e Desenvolvimento de Sistemas.",
    en: "Software developer working on product development and maintenance, from front-end to back-end. Complementary background in Unity and 3D modeling. Based in Goiânia, Brazil, currently pursuing a degree in Systems Analysis and Development.",
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
      pt: "Plataforma Corporativa de Gestão Fiscal e Tributária",
      en: "Enterprise Tax & Fiscal Management Platform",
    },
    description: {
      pt: "Atuação no desenvolvimento e manutenção contínua de sistema corporativo de cálculo e gestão fiscal. Trabalho focado em demandas de sprint, resolução de bugs em telas e regras de negócio, implementação de novos recursos no front-end, suporte e regras no back-end e banco de dados, além do acompanhamento do fluxo de mensageria com RabbitMQ para alto volume de processamento de notas fiscais.",
      en: "Development and continuous maintenance of an enterprise tax and fiscal management system. Focused on sprint tasks, fixing UI and business logic bugs, implementing new front-end features, supporting back-end services and databases, alongside monitoring RabbitMQ messaging queues for high-volume invoice processing.",
    },
    logoType: "icon",
    logoAccentColor: "#fff", // "#f97316"
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
      pt: "Aplicação Web & Showcase",
      en: "Web Application & Showcase",
    },
    description: {
      pt: "Interface prototipada no Figma e desenvolvida com Next.js, React, TypeScript e Tailwind CSS. Estrutura orientada a componentes modulares, layout responsivo e estética dark minimalista com foco em fluidez visual e boa experiência de navegação.",
      en: "Interface prototyped in Figma and developed with Next.js, React, TypeScript, and Tailwind CSS. Built with a modular component architecture, responsive layout, and a minimalist dark aesthetic focused on visual fluidity and a smooth navigation experience.",
    },
    logoType: "text",
    logoValue: "</>",
    imageSrc: "/images/projects/BG_Portfolio.png",
    imageAlt: "Portfolio Website Design & Architecture",
    technologies: ["Figma", "React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "unity-tools",
    sectionId: "unity",
    title: "UNITY",
    subtitle: {
      pt: "Desenvolvimento na Engine, Editor Scripting & Ferramentas",
      en: "Engine Development, Editor Scripting & Tooling",
    },
    description: {
      pt: "Apesar da imagem ilustrar apenas uma das ferramentas que desenvolvi no editor, ela representa apenas parte do meu trabalho na engine. Criada para otimizar o fluxo de level design com spawner, pintura de detalhes em superfícies e substituição em massa de objetos por prefabs, etc, foi pensada para eliminar tarefas repetitivas. Minha atuação na Unity abrange também desenvolvimento de mecânicas, iluminação, Animation Rigging, Cinemachine e construção de telas com UI Toolkit.",
      en: "Although the image illustrates just one of the tools I developed in the editor, it represents only part of my work in the engine. Created to optimize level design workflows with spawning, surface detail painting, batch prefab replacement, etc., it was designed to eliminate repetitive tasks. My work in Unity also covers mechanics development, lighting, Animation Rigging, Cinemachine, and UI creation with UI Toolkit.",
    },
    logoType: "icon",
    logoAccentColor: "#fff", // "#38bdf8"
    imageSrc: "/images/projects/BG_UnityTools.png",
    imageAlt: "Unity Twilite Custom Tool in Action",
    technologies: ["Unity", "C#"],
  },
  {
    id: "3d-showcase",
    sectionId: "3d",
    title: "3D ASSETS",
    subtitle: {
      pt: "Personagens Estilizados & Cenários Modulares para Games",
      en: "Stylized Characters & Modular Environments for Games",
    },
    description: {
      pt: "Criação de modelos 3D voltados para jogos, com foco principal em personagens estilizados, inspirados na identidade visual do Fortnite, e também na construção de cenários modulares. Processo executado desde a blocagem até a retopologia, e a texturização no Substance Painter, sempre preparando os assets para rodar direto na engine.",
      en: "Creation of 3D models for games, with a primary focus on stylized characters, inspired by Fortnite's visual identity, as well as building modular environments. Workflow executed from blocking to retopology, with texturing in Substance Painter, always preparing assets to run directly in the engine.",
    },
    logoType: "icon",
    logoAccentColor: "#fff", // "#a855f7"
    externalLink: {
      url: "https://www.artstation.com/thiagorabelodev3d",
      label: "artstation.com/thiagorabelodev3d",
    },
    imageSrc: "/images/projects/BG_3DModeling.png",
    imageAlt: "3D Modeling and Assets Showcase",
    technologies: ["Blender", "Substance Painter"],
  },
];
