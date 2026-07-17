import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Roberto Isasmendi",
  initials: "RI",
  location: "Tucumán, Argentina, GMT-3",
  locationLink: "https://www.google.com/maps/place/Tucum%C3%A1n",
  about:
    "Customer Success Manager and Product Owner for Web3 and fintech SaaS.",
  summary:
    "Customer Success Manager and Product Owner with 5+ years across Web3, fintech, and SaaS, all remote. I run onboarding, retention, and analytics, and I build internal tooling that turns customer data into revenue. Bilingual Spanish and English, with professional Portuguese.",
  avatarUrl: "/roberto.jpg",
  personalWebsiteUrl: "",
  contact: {
    email: "robertoisasmendis@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/titoisasmendi",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/roberto-isasmendi",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Universidad Nacional de Tucumán",
      degree: "Industrial Engineering",
      start: "2011",
      end: "2016",
    },
    {
      school: "Digital House + Rolling Code School",
      degree: "Full-Stack Web Development",
      start: "2020",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Fuul",
      link: "https://fuul.xyz",
      badges: ["Remote", "Web3", "Customer Success", "SQL", "Dune", "PostHog"],
      title: "Customer Success Manager",
      start: "2025",
      end: null,
      description:
        "Customer success and operations for a Web3 incentives and referral SaaS platform.",
      highlights: [
        "Grew MRR of live clients 150% and tripled average customer lifetime",
        "Held annual churn at 10% while owning onboarding, retention, and expansion across the account base",
        "Cut onboarding time by roughly two thirds by standardizing the launch playbook",
        "Built an internal CS operations system on Claude Code that cut biweekly client review time by about 98%, from hours of manual work to minutes, surfacing expansion signals early",
      ],
    },
    {
      company: "JBKnowledge",
      link: "https://jbknowledge.com",
      badges: ["Remote", "Fintech", "Product", "Agile", "Team Lead"],
      title: "Product Owner",
      start: "2020",
      end: "2024",
      description:
        "Owned product for enterprise fintech accounts, from discovery through delivery.",
      highlights: [
        "Led a team of 8 across engineering, design, and QA, with direct hiring, 1:1s, and performance conversations",
        "Reduced delivery cycle time from 1 month to 2 weeks",
        "Launched 3 products from discovery to release",
      ],
    },
    {
      company: "Tarjeta Ahorro Plus",
      link: "https://www.google.com/search?q=Tarjeta+Ahorro+Plus",
      badges: ["Fintech", "B2B2C", "Operations", "Business Development"],
      title: "Business Development Manager",
      start: "2018",
      end: "2020",
      description:
        "Business development and operations for a regional consumer fintech.",
      highlights: [
        "Opened regional operations from zero and signed 150+ SMEs",
        "Built and led a team of 5 for a B2B2C fintech operation",
      ],
    },
  ],
  skills: [
    "Customer Success",
    "Product Management",
    "SQL",
    "Data Visualization",
    "PostHog",
    "Dune",
    "Redash",
    "Python / pandas",
    "AWS",
    "GraphQL",
    "Agile / Scrum",
    "Claude Code / AI tooling",
    "Spanish / English / Portuguese",
  ],
  projects: [
    {
      title: "CS Operations System",
      techStack: ["Claude Code", "Python", "SQL", "Pipedrive"],
      description:
        "Internal skills that automate client health checks, program reviews, and meeting logging, turning customer data into retention and expansion signals.",
    },
  ],
} as const;
