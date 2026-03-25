"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const groups = [
  {
    title: "Frontend",
    description:
      "Interfaces focused on performance, usability and maintainability.",
    items: ["TypeScript", "React", "Next.js"],
  },
  {
    title: "Backend",
    description:
      "APIs, services and application logic for production-ready systems.",
    items: ["Node.js", "NestJS", "Express", "Prisma"],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Infrastructure, deployment workflows and cloud-native delivery.",
    items: [
      "AWS",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Helm",
      "GitHub Actions",
    ],
  },
  {
    title: "Mobile",
    description: "Cross-platform mobile work for product-focused applications.",
    items: ["Expo", "React Native"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm text-blue-300">
            Core Stack
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Technologies I use across product, backend and cloud
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
            A focused stack built around modern web applications, backend
            services and cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card className="h-full border-zinc-800 bg-zinc-900/70 p-6 shadow-none transition hover:border-blue-500/40">
                <h3 className="text-xl font-semibold text-white">
                  {group.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {group.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="border-zinc-700 bg-zinc-950/60 px-3 py-1 text-zinc-300"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
