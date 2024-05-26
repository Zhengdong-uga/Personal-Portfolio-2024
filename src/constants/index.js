import {
    mobile,
    backend,
    creator,
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
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    APT,
    Ruijin,
    peepers,
    adobe,
    blender,
    python,
    sql,
    tableau,
    unity,
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
      title: "Front-End Developer",
      icon: web,
    },
    {
      title: "UI/UX Designer",
      icon: mobile,
    },
    {
      title: "AR/VR Developer",
      icon: backend,
    },
    {
      title: "Data Analyst",
      icon: creator,
    },
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
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      
      name: "Three JS",
      icon: threejs,
      
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      
    },
    {
      
      name: "git",
      icon: git,
    },
    {
      name: "Node.js",
      icon: nodejs,
    },
    {
      name: "SQL",
      icon: adobe,
    },
    {
      
      name: "figma",
      icon: figma,
    },
    {
      name: "Belender 3D",
      icon: blender,
    },
    {
      name: "Unity",
      icon: unity,
    },
  ];
  
  const experiences = [
    {
      title: "Website Developer",
      company_name: "The Apple Truck",
      icon: APT,
      iconBg: "#E6DEDD",
      date: "Feb 2024 - Aug 2024",
      points: [
        "Redesigned and developed the e-commerce website to enhance mobile accessibility and user experience on the WIX.",
        "Created a dropdown navigation menu to improve site usability and facilitate easy access to product categories.",
        "Collaborating with cross-functional experts including designers & researchers, product manager, and data analyst to create high-quality products.",
        "Conducted SEO improvements to increase site visibility and conversion rates, leveraging website statistics and user behavior analysis.",
      ],
    },
    {
      title: "Project Manager",
      company_name: "Ruijin",
      icon: Ruijin,
      iconBg: "white",
      date: "Apr 2023 - Aug 2023",
      points: [
        "Designed the UI/UX for an AI-driven business analytics consultant platform, ensuring intuitive and user-friendly navigation",
        "Conducted comprehensive UX research, including user interviews, surveys, and usability testing to gather insights and inform design decisions.",
        "Developed wireframes, prototypes, and high-fidelity mockups to effectively communicate design ideas and iterate based on user feedback.",
        "Prepared detailed reports, presentations, and analyses to communicate project progress, findings, and recommendations to stakeholders and senior management.",
      ],
    },
    {
      title: "Founder & Graphic Designer",
      company_name: "Peepers Official(NFT Project)",
      icon: peepers,
      iconBg: "White",
      date: "May 2022 - Jan 2023",
      points: [
        "Designed the concept and imagery for Peepers Official, creating a unique aesthetic for NFT aliens.",
        "Used Moralis to code and generate 1800 unique NFT pieces, ensuring distinct attributes and theme consistency.",
        "Led the graphic design process, from initial sketches to final digital artwork.",
        "Collaborated on project development, marketing, and launch strategies to enhance visibility and engagement.",
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
    // Development Projects
  {
    name: "Personal Portfolio 2024",
    description:
      "A React and Three.js 3D portfolio website showcasing my skills through immersive 3D graphics and animations. This project highlights my expertise in modern web technologies, creative design, and engaging user experiences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Zhengdong-uga/Personal-Portfolio-2024",
    category: "development",
  },

  {
    name: "Interface Fire",
    description:
      "A modern app for critiquing gaming interfaces, showcasing interesting game interfaces, providing insights that may inspire UX designers in applying concepts to real-world Apps. It familiarize users with various gaming interfaces and their functionalities.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "vanilla javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Zhengdong-uga/InterfaceFire",
    category: "development",
  },

  {
    name: "Gengo Guru",
    description:
      "Gengo Guru is a responsive language learning app that generates random sentences in target languages. It helps users become familiar with random sentences, offering features to control the number of sentences and toggle translations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vanilla javascript",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Zhengdong-uga/GengoGuru",
    category: "development",
  },

  // Design Projects
  {
    name: "Ecommerce Redesign",
    description:
      "A personal portfolio website to showcase my design and development skills, featuring a clean and modern design with interactive elements.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "wix",
        color: "green-text-gradient",
      },
      
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    category: "design",
  },
  {
    name: "Usability Research",
    description:
      "An e-commerce store design project focusing on user experience and visual aesthetics, providing a seamless shopping experience.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "adobe xd",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    category: "design",
  },
  
  // Archive Projects
  {
    name: "Old Project 1",
    description:
      "An older project that demonstrates early development skills.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    category: "archive",
  },
  {
    name: "Old Project 2",
    description:
      "Another older project showcasing initial design and development work.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    category: "archive",
  },
];
  
  export { services, technologies, experiences, testimonials, projects };
