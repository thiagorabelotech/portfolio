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
    pt: "Desenvolvedor de software atuando de ponta a ponta na construção e manutenção de produtos, do front-end ao back-end, adotando a tecnologia mais adequada para cada desafio. Experiência complementar no desenvolvimento de ferramentas interativas na Unity. Natural de Goiânia-GO, atualmente cursando Análise e Desenvolvimento de Sistemas.",
    en: "Full stack software developer engineering and maintaining multiplatform products from front-end to back-end, selecting the most suitable technology for each challenge. Complementary background in interactive tooling within Unity. Based in Goiânia, Brazil, currently pursuing a degree in Systems Analysis and Development.",
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
      pt: "Atuação no desenvolvimento e manutenção contínua de sistema corporativo de cálculo e gestão fiscal durante a fase de expansão da empresa para diversas sedes no país. Trabalho focado em demandas de sprint, resolução de bugs em telas e regras de negócio, implementação de novos recursos no front-end com Angular, suporte e regras no back-end em C# com SQL Server, além do acompanhamento do fluxo de mensageria com RabbitMQ para alto volume de processamento de notas fiscais.",
      en: "Full stack engineering and continuous maintenance of an enterprise fiscal management platform during nationwide company expansion. Handled sprint tasks including UI and business logic bug fixes, feature development in Angular, back-end service maintenance in C# with SQL Server, and monitoring RabbitMQ messaging queues processing high volumes of fiscal invoices.",
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
      pt: "Aplicação Web & Showcase de Engenharia",
      en: "Personal Web Application & Engineering Showcase",
    },
    description: {
      pt: "Concebido sob a prática de Design First, partindo de prototipagem no Figma com estudo de UX/UI, harmonia de cores e design tokens antes da escrita de código. Desenvolvido para refletir minha base técnica no ecossistema React com TypeScript, utilizando Next.js para renderização de alta performance e Tailwind CSS para estilização utilitária e responsiva em uma arquitetura modular de componentes.",
      en: "Engineered with a Design First mindset, starting from Figma prototyping with UX/UI research, color harmony, and design tokens prior to implementation. Built to reflect my technical foundation in the React and TypeScript ecosystem, leveraging Next.js for high-performance rendering and Tailwind CSS for responsive styling across a modular component architecture.",
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
      pt: "Com 4 a 5 anos de prática na Unity explorando C#, mecânicas de gameplay, iluminação de cenas, Cinemachine e Animation Rigging, este projeto destaca o desenvolvimento de ferramentas de suporte para o editor (Editor Scripting). A ferramenta exibida (Twilight) acelera fluxos de level design ao viabilizar spawner paramétrico, pintura de detalhes em malhas e substituição em massa de objetos por prefabs, integrando conceitos modernos de UI Toolkit e prototipagem prévia de interface.",
      en: "With 4 to 5 years of hands-on experience in Unity utilizing C#, gameplay mechanics, scene lighting, Cinemachine, and Animation Rigging, this project highlights custom editor tooling. The featured tool (Twilight) optimizes level design workflows through parametric spawning, surface detail painting, and batch prefab replacement, incorporating modern UI Toolkit patterns and interface design to eliminate repetitive scene setup.",
    },
    logoType: "icon",
    logoAccentColor: "#38bdf8",
    imageSrc: "/images/projects/BG_UnityTools.png",
    imageAlt: "Unity Twilight Custom Tool in Action",
    technologies: ["Unity", "C#"],
  },
  {
    id: "3d-showcase",
    sectionId: "3d",
    title: "3D ASSETS",
    subtitle: {
      pt: "Modelagem de Personagens & Assets Estilizados",
      en: "Stylized Character Modeling & Game Assets",
    },
    description: {
      pt: "Pipeline de produção 3D com foco em modelagem orgânica e personagens estilizados inspirados no padrão visual de produções contemporâneas como Fortnite. Processo executado desde a blocagem, escultura e retopologia no Blender até o mapeamento UV e texturização PBR no Substance 3D Painter. Foco em topologia limpa voltada para renderização em tempo real (25k a 45k triângulos), poses para apresentação e modelagem de peças modulares para integração em jogos.",
      en: "3D production pipeline focused on organic modeling and stylized characters inspired by contemporary titles such as Fortnite. Complete workflow spanning blocking, sculpting, and retopology in Blender to UV unwrapping and PBR texturing in Substance 3D Painter. Emphasizes clean, game-ready topology (25k to 45k tris), presentation posing, and modular asset creation for game engines.",
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
