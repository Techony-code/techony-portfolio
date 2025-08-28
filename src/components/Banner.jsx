import React from 'react'
// images
import Image from '../assets/avatar.jpg'
// icons
import { TypeAnimation } from 'react-type-animation'
// for Motion
import { motion } from 'framer-motion'
// variable
import { fadeIn } from '../variants'
import { Link } from 'react-scroll'
import CountUp from 'react-countup'

function Banner() {
  return (
    <section 
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#0f172a] text-white"
      id="home"
    >
      {/* Background accents */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] top-[-150px] left-[-200px]"></div>
      <div className="absolute w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[120px] bottom-[-100px] right-[-150px]"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col gap-y-12 lg:flex-row items-center lg:gap-x-16">
          
          {/* text */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <motion.h2
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              SAMUEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ADEWUNMI</span>
            </motion.h2>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase"
            >
              <span className="text-gray-300 mr-2">I am a</span>
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
                  'Blockchain Enthausist',
                  2000,
                ]}
                speed={50}
                className="text-cyan-400"
                wrapper="span"
                repeat={Infinity}
              />
              <div className="div"></div>
            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="max-w-xl mx-auto lg:mx-0 text-gray-300 leading-relaxed"
            >
              I craft immersive digital experiences with code and design.
              Blending creativity and functionality to build interfaces that feel seamless.
            </motion.p>

            {/* buttons */}
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="flex gap-x-6 items-center justify-center lg:justify-start"
            >
              <Link
                to="contact"
                smooth={true}
                offset={-50}
                className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-500/80 to-blue-500/80 text-white font-medium cursor-pointer hover:from-cyan-600/80 hover:to-blue-600/80 transition-all duration-300"
              >
                Contact Me
              </Link>
              <a 
                href="#work"
                className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                My works
              </a>
            </motion.div>

            {/* stats (counter up) */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.6 } }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="flex gap-x-12 justify-center lg:justify-start mt-8"
            >
              <div className="text-center">
                <h3 className="text-4xl font-bold text-cyan-400">
                  <CountUp start={0} end={2} duration={2.5} />+
                </h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-cyan-400">
                  <CountUp start={0} end={25} duration={2.5} />+
                </h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </motion.div>
          </div>

          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex justify-center mt-10 lg:mt-0"
          >
            <img
              src={Image}
              alt="Avatar"
              className="w-40 sm:w-48 md:w-56 lg:w-74 xl:w-80 transition-transform duration-500 shadow-2xl shadow-cyan-500/40 rounded-full filter brightness-75"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner
