import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Conference Ticket Generator",
    description:
      "A React app that generates conference tickets with a professional design. Built using React + Tailwind.",
    image: "src/assets/img1.png",
    github: "https://github.com/your-username/conference-ticket",
    demo: "https://conference-ticket-demo.netlify.app",
  },
  {
    title: "Decrntralized Staking App",
    description:
      "A fun JavaScript game where users guess the correct color. Focused on DOM manipulation & beginner-friendly logic.",
    image: "src/assets/img2.png",
    github: "https://github.com/your-username/color-game",
    demo: "https://nexostakingapp.vercel.app",
  },
  {
    title: "Blockchain Voting dApp",
    description:
      "A decentralized voting app built with Solidity, Hardhat, and React frontend. Demonstrates smart contract integration.",
    image: "src/assets/img3.png",
    github: "https://github.com/your-username/voting-dapp",
    demo: "https://voting-dapp-demo.vercel.app",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Works() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section id="work" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-12"
        >
          My Works
        </motion.h2>

        <div
          ref={ref}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover filter brightness-75 hover:brightness-100 hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-cyan-300">
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">{proj.description}</p>
                <div className="flex gap-4">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <FiGithub /> Code
                  </a>
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <FiExternalLink /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
