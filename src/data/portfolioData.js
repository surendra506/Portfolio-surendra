import {
  BadgeCheck,
  Braces,
  BriefcaseBusiness,
  Code2,
  Database,
  Figma,
  GitBranch,
  Globe,
  Layers3,
  MonitorSmartphone,
  Rocket,
  ServerCog,
  TerminalSquare
} from "lucide-react";
import profileImage from "../../Assests/emp_img-1772023754905.jpeg";

export const portfolio = {
  hero: {
    name: "Surendra Pratap Ahirwar",
    title: "Full Stack MERN Developer",
    tagline: "I build scalable web applications and interactive user experiences",
    summary:
      "I craft polished interfaces, strong backend systems, and cinematic digital experiences that feel premium from the first scroll.",
    image: profileImage,
    resumeHref: "#contact",
    stats: [
      { label: "Projects Shipped", value: "15+" },
      { label: "DSA Problems", value: "200+" },
      { label: "Focus", value: "MERN + AI Tools" }
    ]
  },
  about: {
    image: profileImage,
    cards: [
      {
        title: "Product-first development",
        description:
          "I approach web development as product work, balancing clean code, clear UX, and features that feel intentionally crafted.",
        icon: Rocket
      },
      {
        title: "Systems + interface thinking",
        description:
          "I enjoy the full stack range: component design, API architecture, data handling, and shaping interactions that feel alive.",
        icon: Layers3
      },
      {
        title: "Problem solving with momentum",
        description:
          "LeetCode practice and hands-on builds have sharpened how I debug, structure logic, and keep moving through hard implementation details.",
        icon: BadgeCheck
      }
    ],
    paragraphs: [
      "I am a MERN developer who likes turning ambitious ideas into clean, production-minded experiences. I care about the details users feel: pacing, motion, clarity, and performance.",
      "My work usually blends React, Tailwind CSS, Node.js, Express.js, and MongoDB with a strong interest in animation systems, reusable UI, and practical architecture.",
      "What keeps me excited is the mix of engineering and design in modern web development. I like solving hard problems, but I also like making the result feel beautiful."
    ]
  },
  skills: [
    {
      category: "Programming Languages",
      icon: Code2,
      items: [
        { name: "JavaScript", level: 92, icon: Code2 },
        { name: "Python", level: 86, icon: TerminalSquare },
        { name: "Java", level: 78, icon: Braces },
        { name: "SQL", level: 80, icon: Database }
      ]
    },
    {
      category: "Frontend Craft",
      icon: MonitorSmartphone,
      items: [
        { name: "HTML", level: 94, icon: Globe },
        { name: "CSS", level: 91, icon: Braces },
        { name: "React", level: 93, icon: MonitorSmartphone },
        { name: "Tailwind CSS", level: 90, icon: Figma }
      ]
    },
    {
      category: "Backend Logic",
      icon: ServerCog,
      items: [
        { name: "Node.js", level: 87, icon: ServerCog },
        { name: "Express.js", level: 85, icon: BriefcaseBusiness },
        { name: "REST APIs", level: 86, icon: TerminalSquare }
      ]
    },
    {
      category: "Data Layer",
      icon: Database,
      items: [
        { name: "MongoDB", level: 84, icon: Database },
        { name: "MySQL", level: 78, icon: Database },
        { name: "PostgreSQL", level: 68, icon: Database },
        { name: "Schema Design", level: 81, icon: Database }
      ]
    },
    {
      category: "Workflow Tools",
      icon: TerminalSquare,
      items: [
        { name: "Git", level: 89, icon: GitBranch },
        { name: "GitHub", level: 90, icon: GitBranch },
        { name: "VS Code", level: 94, icon: TerminalSquare },
        { name: "Postman", level: 85, icon: TerminalSquare },
        { name: "Figma", level: 76, icon: Figma },
        { name: "AWS S3", level: 65, icon: ServerCog }
      ]
    },
    {
      category: "AI + CS Fundamentals",
      icon: BadgeCheck,
      items: [
        { name: "DSA", level: 86, icon: BadgeCheck },
        { name: "OOP", level: 82, icon: Layers3 },
        { name: "Prompt Engineering", level: 88, icon: TerminalSquare },
        { name: "Claude", level: 82, icon: TerminalSquare },
        { name: "Codex", level: 84, icon: TerminalSquare },
        { name: "Cursor", level: 80, icon: TerminalSquare },
        { name: "Antigravity", level: 76, icon: Rocket },
        { name: "API Integration", level: 86, icon: ServerCog }
      ]
    }
  ],
  projects: [
    {
      title: "Tile Visualizer",
      kicker: "AI-based computer vision project",
      visual: "AI",
      description:
        "Built a real-time tile placement visualizer with 90%+ detection accuracy using a custom-trained CV model. Trained on 10,000+ Kaggle images across 15+ tile categories and improved spatial precision by 35% with segmentation, edge detection, and surface mapping.",
      techStack: ["Python", "JavaScript", "Tailwind CSS", "Kaggle", "OpenCV", "NumPy"],
      liveDemo: "https://tilesitsolutions.com/3d-ar-tile-viewer/",
      githubRepo: "https://github.com/surendra506"
    },
    {
      title: "3D House Designer",
      kicker: "AI-powered 360 degree room system",
      visual: "360",
      description:
        "Launched a 360 degree 3D room visualization system rendering 10+ interactive objects with Three.js. Crafted 5+ reusable design templates, reduced design turnaround by 40%, and improved visual realism by 35% using texture mapping and dynamic lighting.",
      techStack: ["JavaScript", "Three.js", "Tailwind CSS", "3D Textures", "Dynamic Lighting"],
      liveDemo: "https://tilesitsolutions.com/3d-ar-tile-viewer/living_room/living_room.html",
      githubRepo: "https://github.com/surendra506"
    },
    {
      title: "WeekMate HRMS",
      kicker: "HR management system",
      visual: "HR",
      description:
        "Built a full-stack HRMS platform where managers can create projects, assign tasks, and manage work with role-based access. Developed task creation, assignment, status tracking, deadline management, and responsive React/Tailwind UI that reduced workflow setup time by 30%.",
      techStack: ["React.js", "HTML", "Tailwind CSS", "MongoDB", "Role-Based Access"],
      liveDemo: "https://github.com/surendra506",
      githubRepo: "https://github.com/surendra506"
    },
    {
      title: "Document Editor",
      kicker: "Collaborative writing system",
      visual: "DOC",
      description:
        "A MERN-based document workflow with structured content editing, collaborative thinking, and a cleaner writing experience.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      liveDemo: "https://surendra506.github.io/Portfolio-surendra/",
      githubRepo: "https://github.com/surendra506/Docify"
    },
    {
      title: "Edge Detection Tool",
      kicker: "Computer vision utility",
      visual: "CV",
      description:
        "A Python and OpenCV utility for extracting edges, improving image analysis, and supporting computer vision style workflows.",
      techStack: ["Python", "OpenCV", "Image Processing"],
      liveDemo: "https://github.com/surendra506/TILES-IT-SOLUTION",
      githubRepo: "https://github.com/surendra506/TILES-IT-SOLUTION"
    },
    {
      title: "Cinematic Portfolio",
      kicker: "Interactive brand experience",
      visual: "3D",
      description:
        "A premium developer portfolio built around immersive motion, 3D visuals, smooth scrolling, and performance-aware frontend architecture.",
      techStack: ["React", "Tailwind CSS", "Framer Motion", "GSAP", "Three.js"],
      liveDemo: "https://surendra506.github.io/Portfolio-surendra/",
      githubRepo: "https://github.com/surendra506/Portfolio-surendra"
    },
  ],
  experience: [
    {
      title: "MERN Stack Learning",
      period: "Current Focus",
      description:
        "Building increasingly complex full-stack projects to strengthen architecture decisions, state management, API design, and deployment readiness."
    },
    {
      title: "200+ DSA Problems Solved",
      period: "LeetCode Journey",
      description:
        "Consistent algorithm practice across arrays, recursion, trees, linked lists, and problem decomposition that transfers directly into day-to-day debugging."
    },
    {
      title: "Internship / Training",
      period: "Applied Experience",
      description:
        "Hands-on learning through real product tasks, collaborative work, iteration under feedback, and adapting ideas into maintainable implementation."
    }
  ],
  contact: {
    email: "surendraahirwar506@gmail.com",
    headline: "Let’s make the next build feel premium.",
    message:
      "I am open to internships, full-time roles, freelance collaborations, and product work that values both engineering depth and standout user experience."
  },
  socialLinks: [
    { label: "GitHub", href: "https://github.com/surendra506" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/surendra-pratap-ahirwar/" },
    { label: "LeetCode", href: "https://leetcode.com/u/surendra506/" }
  ]
};
