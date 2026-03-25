"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error sending message");
      }

      const result = await response.json();

      if (result.error) {
        throw new Error(result.error);
      }

      toast({
        title: "Message sent",
        description: "Thanks for reaching out. I will get back to you soon.",
      });

      setIsSuccess(true);
      reset();

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch {
      toast({
        title: "Message failed",
        description:
          "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm text-blue-300">
            Contact
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Let&apos;s talk about opportunities
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
            I&apos;m currently open to Full Stack, Backend and Cloud-focused
            roles where I can contribute across product development, backend
            systems and modern delivery workflows.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45 }}
          >
            <Card className="h-full border-zinc-800 bg-zinc-900/70 p-8 shadow-none">
              <h3 className="text-2xl font-semibold text-white">
                Open to professional conversations
              </h3>

              <p className="mt-4 text-base leading-7 text-zinc-400">
                If you are hiring for Full Stack Engineer, Backend Engineer or
                Cloud / Platform roles, I&apos;d be glad to connect.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:jallerangel06@gmail.com"
                  className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-4 text-zinc-300 transition hover:border-blue-500/40 hover:text-white"
                >
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>jallerangel06@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/jallerangel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-4 text-zinc-300 transition hover:border-blue-500/40 hover:text-white"
                >
                  <Linkedin className="h-5 w-5 text-blue-400" />
                  <span>linkedin.com/in/jallerangel</span>
                </a>

                <a
                  href="https://github.com/jallerangel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-4 text-zinc-300 transition hover:border-blue-500/40 hover:text-white"
                >
                  <Github className="h-5 w-5 text-blue-400" />
                  <span>github.com/jallerangel</span>
                </a>
              </div>

              <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
                <p className="text-sm leading-7 text-zinc-300">
                  Best fit: Full Stack Engineer, Backend Engineer (Node.js /
                  NestJS) and Cloud / Platform Engineer roles with TypeScript,
                  AWS and modern deployment workflows.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            <Card className="border-zinc-800 bg-zinc-900/70 p-8 shadow-none">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="flex min-h-[420px] flex-col items-center justify-center text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                      <CheckCircle2 className="h-8 w-8 text-blue-400" />
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-white">
                      Message sent successfully
                    </h3>

                    <p className="mt-3 max-w-md text-zinc-400">
                      Thanks for reaching out. I&apos;ll review your message and
                      get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-300">
                        Name
                      </label>
                      <Input
                        {...register("name", {
                          required: "Please enter your name",
                        })}
                        placeholder="Your name"
                        className="border-zinc-800 bg-zinc-950/60 text-zinc-100 placeholder:text-zinc-500"
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-300">
                        Email
                      </label>
                      <Input
                        type="email"
                        {...register("email", {
                          required: "Please enter your email",
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Please enter a valid email",
                          },
                        })}
                        placeholder="you@example.com"
                        className="border-zinc-800 bg-zinc-950/60 text-zinc-100 placeholder:text-zinc-500"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-300">
                        Message
                      </label>
                      <Textarea
                        {...register("message", {
                          required: "Please enter a message",
                        })}
                        placeholder="Tell me about the role, team or opportunity."
                        rows={6}
                        className="border-zinc-800 bg-zinc-950/60 text-zinc-100 placeholder:text-zinc-500"
                      />
                      {errors.message && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white hover:bg-blue-500"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
