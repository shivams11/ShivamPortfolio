import {
  mobile,
  backend,
  // creator,
  web,
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
  // figma,
  // docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  // carrent,
  // jobit,
  // tripguide,
  // threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

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
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "SkilledUp Technology",
    // icon: starbucks,
    iconBg: "#383E56",
    date: "Sept 2023 - March 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Redline Racing",
    // icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];


const projects = [
  {
    name: "CoffeeShopX Web Application",
    description:
      "Engineered the full-stack CoffeeShopX web application, integrating a responsive UI with a robust backend, accommodating peak user loads of 5,000+ sessions per day, and streamlined the online ordering process to boost customer satisfaction by 25% . Developed a feature-rich web application utilizing advanced technologies such as JavaScript, React JS, Shadcn ui, Aceternity ui, Express.js and MongoDB. Implemented scalable architecture to ensure optimal performance and maintainability",
      image:"https://images.unsplash.com/photo-1469957761306-556935073eba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmVlJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],

    source_code_link: "https://coffee-shop-x.vercel.app/",
  },
  {
    name: "Bitezy – Full Stack Web Application:",
    description:
      "Engineered a scalable food ordering web application servicing over 20,000 active users, implementing features for real-time order tracking, user profile management, and advanced search capabilities, resulting in a 25% increase in user retention. Architected and crafted a responsive user interface for a food ordering site with React, optimizing user journey and checkout process, leading to a 30% boost in conversion rates and a 20% rise in customer retention.",
      image:"https://images.unsplash.com/photo-1613652038578-a9a988b54a60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMG9yZGVyaW5nfGVufDB8fDB8fHww",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],

    // source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, projects };
