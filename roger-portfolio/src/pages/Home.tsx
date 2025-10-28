import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Download } from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "../assets/user.png";
import { useEffect, useState } from "react";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
<div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a0a]/70 via-[#101828]/60 to-[#0a0a0a]/70 backdrop-blur-sm overflow-hidden text-center">
      {/* Parallax glow background */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(60,90,255,0.08) 0%, transparent 70%)",
        }}
        animate={{
          x: mousePosition.x * 40,
          y: mousePosition.y * 40,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          {/* Profile Image */}
          <motion.div
            whileHover={{ scale: 1.07, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mx-auto w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full shadow-[0_0_50px_rgba(99,102,241,0.3)] border border-white/10 overflow-hidden backdrop-blur-md bg-white/5"
          >
            <img
              src={profileImage}
              alt="Roger SH"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Main Text */}
          <div className="space-y-5">
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                Roger SH
              </span>
            </motion.h1>

            <motion.div
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              AI Engineer · Full-Stack Developer
            </motion.div>

            <motion.p
              className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Innovative programmer and tech entrepreneur crafting impactful
              digital experiences through creativity, technology, and design.
              Passionate about AI, full-stack development, and exploring the
              edge of innovation.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/about"
              className="group relative overflow-hidden bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-indigo-600/40"
            >
              <span>About Me</span>
              <ChevronDown
                className="group-hover:translate-y-1 transition-transform"
                size={20}
              />
            </Link>

            <a
              href="/Roger_Sariñana_Resume.pdf"
              className="group glass-effect px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-lg border border-white/10"
            >
              <Download size={20} />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex justify-center space-x-6 pt-6"
          >
            {[
              {
                href: "https://github.com/R0g3r-SH",
                icon: <Github size={26} />,
              },
              {
                href: "https://www.linkedin.com/in/roger-sarinana/",
                icon: <Linkedin size={26} />,
              },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-7 h-12 border-2 border-indigo-500 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-4 bg-indigo-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
