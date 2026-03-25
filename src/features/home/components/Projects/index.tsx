"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Smartphone, Monitor } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  type: "mobile" | "web";
  github: string;
  demo?: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cloud-Backed Web Platform",
    description:
      "Built and improved a web application with a strong focus on maintainability, backend integration and delivery workflows. Contributed across frontend, backend and deployment using a modern TypeScript-based stack.",
    type: "web",
    github: "https://github.com/your-repo",
    demo: "https://your-demo-link.com",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "AWS",
      "Terraform",
    ],
  },
  {
    id: 2,
    title: "Product-Focused Sports Platform",
    description:
      "Contributed to a product that handled historical data, analysis workflows and team-focused features. Worked across application logic, UI improvements and overall product delivery.",
    type: "web",
    github: "https://github.com/your-repo",
    demo: "https://your-demo-link.com",
    technologies: ["Next.js", "NestJS", "Prisma", "TypeScript", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Mobile Experience with Shared Backend",
    description:
      "Developed mobile-facing functionality connected to backend services and product workflows, with attention to usability, scalability and consistent release practices.",
    type: "mobile",
    github: "https://github.com/your-repo",
    demo: "https://your-demo-link.com",
    technologies: ["Expo", "React Native", "TypeScript", "NestJS", "AWS"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const TypeIcon = project.type === "mobile" ? Smartphone : Monitor;

  return (
    <Card className="flex h-full flex-col justify-between border-zinc-800 bg-zinc-900/70 p-6 shadow-none transition hover:-translate-y-1 hover:border-blue-500/40">
      <div>
        <div className="mb-4 flex items-center justify-between gap-4">
          <Badge
            variant="outline"
            className="border-blue-500/30 bg-blue-500/10 text-blue-300"
          >
            <TypeIcon className="mr-2 h-3.5 w-3.5" />
            {project.type === "mobile" ? "Mobile" : "Web"}
          </Badge>
        </div>

        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>

        <p className="mt-4 text-sm leading-7 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="border-zinc-700 bg-zinc-950/60 text-zinc-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button
          asChild
          size="sm"
          className="bg-blue-600 text-white hover:bg-blue-500"
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </a>
        </Button>

        {project.demo && (
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-zinc-700 bg-zinc-900/50 text-zinc-200 hover:border-blue-500 hover:bg-zinc-900"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        )}
      </div>
    </Card>
  );
}

export default function ProjectsGrid() {
  return (
    <section id="projects" className="bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm text-blue-300">
            Selected Projects
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Work aligned with product, backend and cloud delivery
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
            A focused selection of projects that reflect how I contribute across
            application development, backend systems and infrastructure.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
