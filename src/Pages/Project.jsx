import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Importing screenshots
import myproject1 from '../assets/myproject1.png';
import myproject2 from '../assets/myproject2.png';
import myproject3 from '../assets/myproject3.png';

const Projects = () => {
  const projectList = [
    { 
      img: myproject1,
      title: "MERN Auth System",
      desc: "A complete authentication system using MERN stack with JWT, OTP, and email verification.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://github.com/dhirendraprajapati005/mern-auth"
    },
    {
      img: myproject2,
      title: "File Upload App",
      desc: "Upload and download vector files. Only logged-in users can access download links.",
      tech: ["React", "Tailwind", "Node", "Mongoose"],
      link: "https://yourdomain.com"
    },
    {
      img: myproject3,
      title: "AI Chatbot Assistant",
      desc: "AI-based emotional companion assistant using speech-to-text and GPT integration.",
      tech: ["React", "OpenAI", "Node.js", "Socket.io"],
      link: "#"
    },
  ];

  return (
    <>
      <Navbar/>
      <div className="bg-gradient-to-b from-gray-900 to-black text-white py-12 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold mb-10 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectList.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-2xl transition duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={project.img} alt={project.title} className="rounded mb-4" /> 
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-cyan-600 text-white px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md transition"
                >
                  View Project
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Projects;
