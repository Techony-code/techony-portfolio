import React, { useState, useEffect } from 'react'
import { BiBriefcase, BiHomeAlt } from 'react-icons/bi'
import { BsClipboardData, BsChatSquareText } from 'react-icons/bs'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

function Nav() {
  const navItems = [
    { to: 'home', icon: <BiHomeAlt /> },
    { to: 'skill', icon: <BsClipboardData /> },
    { to: 'work', icon: <BiBriefcase /> },
    { to: 'contact', icon: <BsChatSquareText /> },
  ]

  const [show, setShow] = useState(true)
  const [timeoutId, setTimeoutId] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      // Clear existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      setShow(true)

      // Timeout to hide nav after 2 seconds
      const newTimeoutId = setTimeout(() => {
        setShow(false)
      }, 2000)

      setTimeoutId(newTimeoutId)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [timeoutId])

  return (
    <motion.nav
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 80 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-4 w-full z-50 flex justify-center"
    >
      <div
        className="
          bg-white/10
          backdrop-blur-2xl
          border
          border-white/20
          shadow-lg
          h-[70px]
          rounded-full
          px-6
          flex
          justify-between
          items-center
          text-2xl
          max-w-[420px]
          w-full
        "
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            className="
              cursor-pointer
              w-[60px]
              h-[60px]
              flex
              items-center
              justify-center
              text-white/60
              hover:text-white
              transition-all
              duration-300
              relative
              group
            "
          >
            <span
              className="
                group-hover:scale-125
                group-hover:text-cyan-400
                transition-transform
                duration-300
              "
            >
              {item.icon}
            </span>
            <span
              className="
                absolute
                inset-0
                mx-auto
                my-auto
                rounded-full
                bg-cyan-500/20
                blur-lg
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-300
              "
            ></span>
            <span
              className="
                absolute
                bottom-1
                w-2
                h-2 
                bg-cyan-400
                opacity-0
                group-[.active]:opacity-100
                transition-all
                duration-300
              "
            ></span>
          </Link>
        ))}
      </div>
    </motion.nav>
  )
}

export default Nav