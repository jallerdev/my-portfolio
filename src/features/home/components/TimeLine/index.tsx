"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Rocket, Code, Briefcase, Zap, Atom } from "lucide-react";

const timeline = [
  {
    year: "2023",
    title: "Web Foundations",
    description:
      "Started with HTML, CSS and JavaScript, then moved into real client work and modern development workflows.",
    icon: Rocket,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "2023",
    title: "Backend & DevOps Foundations",
    description:
      "Built backend services with Node.js and Express while working with Docker, Kubernetes, CI/CD and Terraform on Azure.",
    icon: Code,
    tags: ["Node.js", "Express", "Docker", "Kubernetes", "Terraform", "Azure"],
  },
  {
    year: "2024",
    title: "Microservices & Delivery",
    description:
      "Expanded into NestJS microservices, Helm-based deployments, GitHub Actions and observability with New Relic.",
    icon: Briefcase,
    tags: [
      "NestJS",
      "Microservices",
      "Helm",
      "GitHub Actions",
      "Terraform",
      "New Relic",
    ],
  },
  {
    year: "2025",
    title: "AWS Cloud Systems",
    description:
      "Worked on AWS-based systems using Lambda, SQS, EventBridge and RDS, managed through Infrastructure as Code.",
    icon: Zap,
    tags: ["AWS", "Lambda", "SQS", "EventBridge", "RDS", "Terraform"],
  },
  {
    year: "2025 – 2026",
    title: "Product-Focused Full Stack Work",
    description:
      "Delivered product-facing work with React, Next.js, Prisma, Expo and NestJS across frontend, backend and deployment.",
    icon: Atom,
    tags: ["React", "Next.js", "Prisma", "Expo", "NestJS", "DynamoDB", "Helm"],
  },
];

export default function TimeLine() {
  return (
    <section id="journey" className="bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm text-blue-300">
            Career Path
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            From fundamentals to cloud-backed product delivery
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
            A practical progression from web fundamentals to backend systems,
            cloud infrastructure and full stack product work.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-zinc-800 md:block" />

          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="relative md:pl-16"
                >
                  <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-blue-500/30 bg-zinc-900 text-blue-400 md:flex">
                    <Icon className="h-5 w-5" />
                  </div>

                  <Card className="border-zinc-800 bg-zinc-900/70 p-6 shadow-none transition hover:border-blue-500/40">
                    <div className="flex flex-col gap-4">
                      <div>
                        <span className="text-sm font-medium text-blue-400">
                          {item.year}
                        </span>
                        <h3 className="mt-2 text-2xl font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-400">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="border-zinc-700 bg-zinc-950/60 text-zinc-300"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
