import {
  graphql,
  // mobile,
  // backend,
  // creator,
  // web,
  javascript,
  typescript,
  html,
  css,
  iphone,
  reactjs,
  devhatlogo,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  ignitelab,
  metaverse,
  threejs,
  reactninja,
  jsninja,
  nextcoder,
  reactzero,
  udemy,
  inprogress,
  alura,
  devhat,
  contact3d,
  jsm,
  jest,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "works",
    title: "Projetos",
  },
  {
    id: "experiences",
    title: "Formações",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

// const services = [
//   {
//     title: "TEAM WORK",
//     icon: web,
//   },
//   {
//     title: "CONSISTENCE",
//     icon: mobile,
//   },
//   {
//     title: "CREATIVITY",
//     icon: backend,
//   },
//   {
//     title: "COMUNICATION",
//     icon: creator,
//   },
//   {
//     title: "DISCIPLINE",
//     icon: web,
//   },
//   {
//     title: "HUNHER FOR KNOWLEDGE",
//     icon: mobile,
//   },
//   {
//     title: "DECISION MAKING",
//     icon: backend,
//   },
//   {
//     title: "PROBLEM SOLVING",
//     icon: creator,
//   },
// ];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Devhat",
    company_name: "Frontend JR",
    icon: devhatlogo,
    iconMini: devhatlogo,
    iconBg: "#4FA5E0",
    date: "Devhat - mar 2023 - Atualmente",
    points: [
      "Desenvolvimento aplicativos da web (ReactJS)",
      "Interface de programação de aplicativos (API)",
      "Gerenciamento de contexto com (zustand)",
      "Desenvolvimento de interfaces de usuário (UI)",
      "Desenvolvimento de Landing Pages",
      "Testes automatizados (Jest)",
      "Testes unitários (React Testing Library)",
      "Controle de versão colaborativa com (Git)",
      "Desenvolvimento de aplicativos mobile (React Native)",
      "Desenvolvimento de aplicativos desktop (Electron)",
      "Codigo limpo e consistente  (ESLint & Prettier)",
      "Estilização (TailwindCSS, sass, styled-components)",
    ],
  },
  {
    title: "ReactNinja",
    company_name: "ReactJS - 91.5 Horas",
    icon: reactninja,
    iconMini: udemy,
    iconBg: "#151d42",
    date: "Last courses 2023",

    points: [
      "React Ninja (91.5 Horas)",
      "Javascript Ninja (43 Horas)",
      "Ultimate-Next14-course (50 Horas)",
      "https://www.jsmastery.pro/ultimate-next-course",
      "Alura (26) Cursos Concluídos",
      "https://cursos.alura.com.br/user/callmenicoletti",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "iPhone",
    description:
      "A clone of iphone 15 web page using most interactive tecnologies",
    tags: [
      {
        name: "React three fiber",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "pink-text-gradient",
      },

      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: iphone,
    source_code_link: "https://github.com/Luiginicoletti/devhat",
    link: "https://iphone-sepia-six.vercel.app/",
  },
  {
    name: "Devhat",
    description:
      "A institutional 3D LP FOR @Devhat OP project built with React Three Fiber and Three JS.",
    tags: [
      {
        name: "React three fiber",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "pink-text-gradient",
      },

      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: devhat,
    source_code_link: "https://github.com/Luiginicoletti/devhat",
    link: "https://devhat-eight.vercel.app/",
  },

  {
    name: "Contact 3D",
    description:
      "A simple contact section with a 3D animation built with React Three Fiber.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },

      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "React Three Fiber",
        color: "pink-text-gradient",
      },
    ],
    image: contact3d,
    source_code_link: "https://github.com/Luiginicoletti/contact3d",
    link: "https://contact3d.vercel.app/",
  },

  {
    name: "JSM",
    description:
      "A landing page for product with a filter and a search bar built with React",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },

      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "GraphQl",
        color: "pink-text-gradient",
      },
      {
        name: "ApolloClient",
        color: "white-text-gradient",
      },
    ],
    image: jsm,
    source_code_link: "https://github.com/Luiginicoletti/jsm",
    link: "jsm-model.vercel.app",
  },

  {
    name: "IgniteLAB",
    description:
      "A on demand video plataform with scheduled release via HandleCMS.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },

      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "GraphQl",
        color: "pink-text-gradient",
      },
      {
        name: "ApolloClient",
        color: "white-text-gradient",
      },
    ],
    image: ignitelab,
    source_code_link: "https://github.com/Luiginicoletti/PROJECT-videoOnDemand",
    link: "https://ignitelab-brown.vercel.app/",
  },
  {
    name: "Carhub",
    description:
      "A car rent project built in the newest next13 with some APIs and clean code SSR/CSR.",
    tags: [
      {
        name: "Next13+",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "FastCar API",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Luiginicoletti/PROJECT-car-rent",
    link: "https://car-rent-gamma.vercel.app/",
  },
  {
    name: "Metaverse",
    description: "A beautiful and modern SPA built with some UI/UX stuffs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "FramerMotion",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX",
        color: "orange-text-gradient",
      },
    ],
    image: metaverse,
    source_code_link: "https://github.com/Luiginicoletti/metaverse",
    link: "https://metaverse-alpha-one.vercel.app/",
  },
];

export { technologies, experiences, testimonials, projects };
