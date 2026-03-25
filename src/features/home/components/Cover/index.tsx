"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Cover() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(24,24,27,0.1),_rgba(24,24,27,0.95))]" />

      <div className="relative z-10 container mx-auto flex min-h-screen max-w-6xl items-center px-6 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="w-full"
        >
          <motion.span
            variants={fadeUp}
            className="mb-4 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm text-blue-300"
          >
            Available for Full Stack, Backend and Cloud-focused roles
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl"
          >
            Luis Jaller
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="mt-4 max-w-3xl text-2xl font-semibold text-blue-400 md:text-3xl"
          >
            Full Stack Engineer focused on TypeScript, Node.js, Next.js and AWS
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl"
          >
            I build scalable web applications and cloud-backed systems with a
            strong focus on backend architecture, maintainability and delivery.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-3xl text-base leading-7 text-zinc-400 md:text-lg"
          >
            My experience spans product development, APIs, microservices,
            infrastructure as code and modern deployment workflows.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-500"
            >
              <a href="#projects">View Projects</a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-zinc-700 bg-zinc-900/50 text-zinc-200 hover:border-blue-500 hover:bg-zinc-900 hover:text-blue-500"
            >
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="https://github.com/jallerangel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-300 transition hover:border-blue-500/50 hover:text-white"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jallerangel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-300 transition hover:border-blue-500/50 hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>

            <a
              href="mailto:jallerangel06@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-300 transition hover:border-blue-500/50 hover:text-white"
            >
              <Mail className="h-4 w-4" />
              jallerangel06@gmail.com
            </a>
          </motion.div>

          <motion.button
            variants={fadeUp}
            onClick={scrollToNext}
            className="mt-16 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-blue-400"
          >
            Scroll to explore
            <ArrowDown className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
