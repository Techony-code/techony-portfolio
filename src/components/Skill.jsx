import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCheck } from "react-icons/fi";

//  Categories/data

const categories = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React",
      "Tailwind CSS",
      "Accessibility",
      "Responsive UI",
    ],
  },
  {
    title: "Blockchain",
    items: [
      "Solidity",
      "Hardhat",
      "Remix",
      "Ethers.js",
      "Web3.js",
      "Ethereum",
      "Polygon",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Vercel", "Netlify"],
  },
];

//  Motion variants

const cardContainer = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
};

const skillItem = {
  hidden: { opacity: 0, scale: 0.72, y: 6 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.36, ease: "easeOut" } },
};


function useScrollDirection() {
  const [dir, setDir] = React.useState(null);
  React.useEffect(() => {
    let lastY = window.pageYOffset;
    let ticking = false;

    const onScroll = () => {
      const y = window.pageYOffset;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (Math.abs(y - lastY) > 5) {
            setDir(y > lastY ? "down" : "up");
            lastY = y;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return dir;
}

/* Skills component */

export default function Skills({ animateOnlyOnScrollDown = false }) {
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: false, 
  });

  const scrollDir = useScrollDirection();

  const shouldShow = animateOnlyOnScrollDown
    ? inView && (scrollDir === "down" || scrollDir === null)
    : inView;

  return (
    <section id="skill" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.45 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-12"
        >
          My Skills
        </motion.h2>

        {/* grid of category cards */}
        <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              variants={cardContainer}
              initial="hidden"
              animate={shouldShow ? "show" : "hidden"}
              className="rounded-2xl bg-slate-800/80 border border-slate-700 p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
                {cat.title}
              </h3>

              {/* skills list */}
              <motion.ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.items.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={skillItem}
                    className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2"
                  >
                    <span
                      aria-hidden="true"
                      className="grid place-items-center w-5 h-5 rounded-sm border border-slate-600 bg-slate-800"
                    >
                      <FiCheck className="w-4 h-4 text-cyan-400" />
                    </span>
                    <span className="text-sm text-gray-200">{skill}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
