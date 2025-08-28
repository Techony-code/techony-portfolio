import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// ✅ Import images correctly
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const projects = [
  {
    title: "Dodge Hellcat documentation",
    description:
      "A website that tells you everything you need to know about the Dodge Hellcat.",
    image: img1,
    github: "https://github.com/Techony-code/hellcat",
    demo: "https://hellcatproject.netlify.app/",
  },
  {
    title: "Decrntralized Staking App",
    description:
      "A fun JavaScript game where users guess the correct color. Focused on DOM manipulation & beginner-friendly logic.",
    image: img2,
    github: "https://github.com/Techony-code/decentralized-staking",
    demo: "https://nexostakingapp.vercel.app",
  },
  {
    title: "Decentralized Exchange",
    description:
      "Developed a decentralized exchange app that facilitate the trustless trading between tokens.",
    image: img3,
    github:
      "https://github.com/Techony-code/Decentralized-Exchange-Hardhat-Solidity-Project",
    demo: "https://dex-challenge-beta.vercel.app/",
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

        <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                <p className="text-sm text-gray-300 mb-4">
                  {proj.description}
                </p>
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
