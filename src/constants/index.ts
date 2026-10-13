export const links = {
  contactEmail: "mdnomankaif55@gmail.com",
};

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
] as const;

export const clientReviews = [
  {
    id: 1,
    name: "Sarah Mohammed",
    review:
      "Noman's web development expertise is impressive. He built ClinSim as a robust clinical training platform, bringing patient simulations, real-time responses, and performance tracking together. He was professional throughout the project and delivered a solution that met our needs.",
  },
  {
    id: 2,
    name: "Anil Yadav",
    review:
      "Noman has been a pleasure to work with. He understood the requirements for Certify and is turning them into a clear, practical exam preparation platform. His frontend and backend work on practice exams, interactive labs, and content management has been excellent.",
  },
] as const;

export const myProjects = [
  {
    title: "ClinSim — Clinical Case Simulation Platform",
    desc: "Built a full-stack medical training platform where students manage virtual patients, place clinical orders, and track patient responses in real time.",
    subdesc:
      "Includes automated scoring, performance analytics, a case-authoring dashboard, and role-based access for admins and case writers.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "CASL",
    ],
    href: "https://ccs-software-client-bvhn-six.vercel.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
  },
  {
    title: "Certify — Certification Exam Preparation Platform",
    desc: "Built Certify, a certification exam preparation platform for Cisco CCNA and CompTIA A+, Network+, and Security+ learners.",
    subdesc:
      "Features practice exams, drag-and-drop and performance-based questions, simulated networking labs, progress tracking, and an admin panel for managing exam content.",
    tags: [],
    href: null,
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
  },
] as const;

export const workExperiences = [
  {
    id: 1,
    name: "Fission",
    pos: "Junior Full Stack Developer + DevOps",
    duration: "Jan 2026 - Present",
    descriptionBefore: "Build and deploy ",
    website: {
      label: "linkswatch.com",
      href: "https://linkswatch.com/",
    },
    descriptionAfter:
      " and affiliate products, implementing frontend and backend features while managing deployment workflows and ongoing improvements.",
    logo: "/assets/fission-logo.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "Fission",
    pos: "Full Stack Intern",
    duration: "Aug 2025 - Dec 2025",
    descriptionBefore:
      "Built the Fission.it and Keens.org websites, developed backend functionality for the careers page, and automated blog publishing workflows.",
    website: null,
    descriptionAfter: "",
    logo: "/assets/fission-logo.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Ricoz",
    pos: "Full Stack Intern",
    duration: "Mar 2025 - Jun 2025",
    descriptionBefore:
      "Developed the backend for the BookMyStudio app, a studio booking platform available on Google Play.",
    website: null,
    descriptionAfter: "",
    logo: null,
    animation: "salute",
  },
] as const;

export const socialLinks = [
  {
    name: "GitHub",
    icon: "/assets/github.svg",
    url: "https://github.com/Nomankaif",
  },
] as const;
