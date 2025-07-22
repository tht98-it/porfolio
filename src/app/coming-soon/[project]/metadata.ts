// src/app/coming-soon/[project]/metadata.ts
import { Metadata } from "next";

interface Project {
  name: string;
  description: string;
}

const projects: Record<string, Project> = {
  "streaming-app": {
    name: "Streaming Media App",
    description:
      "Real-time video streaming app built with Next.js and Socket.IO.",
  },
  "trading-platform": {
    name: "Trading Platform",
    description: "Microservices-based trading app with Nest.js and Redis.",
  },
  "invoice-ai-app": {
    name: "Invoice AI App",
    description: "AI-powered invoice generator with Next.js and LaTeX.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: { project: string };
}): Promise<Metadata> {
  const project = projects[params.project] || projects["streaming-app"];
  return {
    title: `Coming Soon | ${project.name}`,
    description: project.description,
  };
}
