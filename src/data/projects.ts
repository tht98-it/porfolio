import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "streaming-app",
    title: "Streaming Media App",
    description:
      "Real-time video streaming app built with Next.js and Socket.IO.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/tht98-it/streaming-app",
    url: "/coming-soon/streaming-app",
    tags: [
      "Next.js",
      "Nest.js",
      "TypeScript",
      "PostgreSQL",
      "Socket.IO",
      "OAuth2",
    ],
  },
  {
    id: "trading-platform",
    title: "Trading Platform",
    description: "Microservices-based trading app with Nest.js and Redis.",
    icon: "/skills/nestjs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/tht98-it/trading-platform",
    url: "/coming-soon/trading-platform",
    tags: [
      "Next.js",
      "Nest.js",
      "TypeScript",
      "PostgreSQL",
      "Socket.IO",
      "OAuth2",
      "Redis",
    ],
  },
  {
    id: "invoice-ai-app",
    title: "Invoice AI App",
    description: "AI-powered invoice generator with Next.js and LaTeX.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/tht98-it/invoice-ai-fe",
    url: "/coming-soon/invoice-ai-app",
    tags: ["Next.js", "Nest.js", "TypeScript", "PostgreSQL", "AI", "LaTeX"],
  },
];

export default projects;
