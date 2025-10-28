import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, ExternalLink, Brain, Database, Cloud, Code, Smartphone, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import profileImage from "../assets/user.png";

// Proyectos basados en tu experiencia actual
const projects = [
  {
    name: "ESG FORCE.AI",
    description: "ESG SaaS platform with AI for sustainability impact measurement",
    tech: "AI, RAG, Cloud, Angular",
    icon: <Brain className="w-8 h-8" />,
    link: "https://esgforce.ai",
    gradient: "from-green-500 to-blue-500"
  },
  {
    name: "GO2GROW.AI",
    description: "Connected global talent with companies, unlocking career growth and international opportunities.",
    tech: "LLMs, Pinecone, AWS, Angular, Node.js",
    icon: <Cloud className="w-8 h-8" />,
    link: "https://go2grow.ai/",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    name: "Circle AI",
    description: "B2B Networking & Market Insights platform",
    tech: "AI, React, Node.js",
    icon: <Globe className="w-8 h-8" />,
    link: "https://github.com/Circle-AI-DEV/Circle-AI-MVP",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "OZARU.io",
    description: "AI-Powered Business Management platform",
    tech: "Angular, Laravel, AWS",
    icon: <Code className="w-8 h-8" />,
    link: "https://console.ozaru.one/",
    gradient: "from-orange-500 to-red-500"
  },
  {
    name: "La Reyna APP",
    description: "Web Delivery Platform for restaurants",
    tech: "React, Django, MongoDB",
    icon: <Smartphone className="w-8 h-8" />,
    link: "https://github.com/R0g3r-SH/lareyna-app",
    gradient: "from-red-500 to-pink-500"
  },
  {
    name: "SHERLOCK EXPRESS",
    description: "Secure Background Verification platform",
    tech: "React Native, Firebase",
    icon: <Database className="w-8 h-8" />,
    link: "https://github.com/R0g3r-SH/SherlockAPI",
    gradient: "from-indigo-500 to-blue-500"
  }
];

// Skills actualizados basados en tu currículum
const skills = [
  "Machine Learning", "LLMs", "RAG Systems", "Pinecone", "Python", "FastAPI",
  "React", "Angular", "Next.js", "Node.js", "Django", "Flask", "AWS", 
  "Google Cloud", "Vector Databases", "TypeScript", "Java", "C++", "Git"
];

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

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-[#0a0a0a]/70 via-[#101828]/60 to-[#0a0a0a]/70 backdrop-blur-sm overflow-hidden text-center">

      {/* Efecto de fondo simple */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(60,90,255,0.08) 0%, transparent 70%)",
        }}
        animate={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 pt-16">

        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          {/* Profile Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mx-auto w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full shadow-[0_0_50px_rgba(99,102,241,0.3)] border border-white/10 overflow-hidden backdrop-blur-md bg-white/5"
          >
            <img src={profileImage} alt="Roger SH" className="w-full h-full object-cover" />
          </motion.div>

          {/* Main Text */}
          <div className="space-y-5">
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm{" "}
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
              Experienced AI/ML developer specializing in designing and deploying machine learning models 
              to optimize system performance and drive data-driven decisions. Skilled in full-stack development 
              with modern frameworks and cloud technologies.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToProjects}
              className="group relative overflow-hidden bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-indigo-600/40"
            >
              <span>View Projects</span>
              <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex justify-center space-x-6 pt-6"
          >
            <motion.a 
              href="https://github.com/R0g3r-SH" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <Github size={26} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/roger-sarinana/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <Linkedin size={26} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* PROJECTS SECTION */}
        <motion.div
          id="projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 space-y-8"
        >
          <motion.h2 
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Recent Projects
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
             
                className="group relative bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                onClick={() => window.open(project.link, '_blank')}
              >
                <motion.div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white mb-4`}
                  whileHover={{ scale: 1.05 }}
                >
                  {project.icon}
                </motion.div>
                
                <h3 className="text-white font-bold text-lg mb-2">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <p className="text-indigo-400 text-xs font-medium">{project.tech}</p>
                
                <motion.div
                  className="absolute top-4 right-4 text-gray-400 group-hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <ExternalLink size={16} />
                </motion.div>
                
                {/* Efecto de brillo al hover */}
                <div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SKILLS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 space-y-6"
        >
          <motion.h2 
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Skills & Technologies
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.05, 
                  background: "linear-gradient(45deg, #4F46E5, #7C3AED)",
                }}
                className="px-4 py-2 bg-indigo-600/20 text-white rounded-full font-semibold text-sm cursor-default border border-indigo-500/30"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* QUOTE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <motion.p 
            className="text-gray-300 italic max-w-xl mx-auto text-lg sm:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            "I build scalable AI solutions that drive innovation and deliver measurable impact in fast-paced environments."
          </motion.p>
        </motion.div>

        {/* CONTACT CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex justify-center pb-16"
        >
          <motion.a
            href="mailto:rogersarinana7@gmail.com"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all"
            whileHover={{ 
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
          </motion.a>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;