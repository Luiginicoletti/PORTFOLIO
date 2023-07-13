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
  reactjs,
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
    title: "ReactNinja",
    company_name: "ReactJS - 91.5 Horas",
    icon: reactninja,
    iconMini: udemy,
    iconBg: "#151d42",
    date: "Udemy - Julho de 2022",
    points: [
  
    ],
  },
  {
    title: "Javascript Ninja",
    company_name: "Javascript - 42.5 Horas",
    icon: jsninja,
    iconMini: udemy,
    iconBg: "#151d42",
    date: "Udemy - Julho de 2022",
    points: [
  
    ],
  },
  {
    title: "Next completo Cod3r",
    company_name: "NextJS - 28.5 Horas",
    icon: nextcoder,
    iconMini: udemy,
    iconBg: "#050816",
    date: "Udemy - Julho de 2022",
    points: [
   
    ],
  },
  {
    title: "Next completo Cod3r",
    company_name: "NextJS - 28.5 Horas",
    iconMini: udemy,
    icon: reactzero,
    iconBg: "#050816",
    date: "Udemy - Julho de 2022",
    points: [
   
    ],
  },
  {
    title: "Engenharia de software",
    company_name: "Engenharia de software - 86.0 Horas",
    iconMini: alura,
    icon: inprogress,
    iconBg: "#050816",
    date: "Alura - Em progresso...",
    points: [
   
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
    name: "IgniteLAB",
    description:
      "A on demand video plataform with scheduled release via HandleCMS." , tags : [
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
    description:
      "A beautiful and modern SPA built with some UI/UX stuffs.",
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
