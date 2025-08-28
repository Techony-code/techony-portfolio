import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_6mxzbdv",   
        "template_13fa79b", 
        form.current,
        "fSu5liyLOo5GwysFL"    
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-cyan-400 mb-6"
        >
          Contact Me
        </motion.h2>

        <p className="text-gray-300 mb-10 max-w-xl mx-auto">
          I’m always open to discussing new projects, opportunities, or
          collaborations. You can message me directly here or reach me via my links.
        </p>

        {/* Quick Contact Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <a
            href="mailto:samade744@gmail.com"
            className="flex items-center gap-2 bg-slate-800/70 px-5 py-3 rounded-xl border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-all"
          >
            <FiMail /> samade744@gmail.com
          </a>
          <a
            href="https://github.com/Techony-code"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-800/70 px-5 py-3 rounded-xl border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-all"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-iyanuoluwa-adewunmi-413140330/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-800/70 px-5 py-3 rounded-xl border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-all"
          >
            <FiLinkedin /> LinkedIn
          </a>
          <a
            href="https://x.com/SammyAde86685"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-800/70 px-5 py-3 rounded-xl border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-all"
          >
            <FaXTwitter /> 
          </a>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 max-w-xl mx-auto shadow-lg"
        >
          <div className="mb-4 text-left">
            <label className="block text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/30 outline-none"
            />
          </div>

          <div className="mb-4 text-left">
            <label className="block text-gray-300 mb-1">Your Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/30 outline-none"
            />
          </div>

          <div className="mb-4 text-left">
            <label className="block text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/30 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-lg font-semibold transition-all duration-300"
          >
            {status === "sending"
              ? "Sending..."
              : status === "success"
              ? "Message Sent ✅"
              : status === "error"
              ? "Error ❌"
              : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
