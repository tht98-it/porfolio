"use client";

import { motion } from "framer-motion";

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

const ComingSoonPage = ({ params }: { params: { project: string } }) => {
  const project = projects[params.project] || projects["streaming-app"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          {project.name}
        </h2>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <p className="text-gray-500 mb-6">
          I'm working hard to launch this project soon!
        </p>
        <a
          href="https://github.com/tht98-it"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Check My GitHub
        </a>
      </motion.div>
    </div>
  );
};

export default ComingSoonPage;
