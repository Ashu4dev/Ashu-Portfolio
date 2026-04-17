import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Github, ExternalLink, Database, BarChart3, PieChart, Cpu } from 'lucide-react';

const CATEGORY_ICONS: Record<string, any> = {
  analysis: <PieChart className="w-4 h-4" />,
  dashboard: <BarChart3 className="w-4 h-4" />,
  sql: <Database className="w-4 h-4" />,
  ml: <Cpu className="w-4 h-4" />,
};

interface ProjectCardProps {
  project: Project;
  key?: React.Key;
}

function ProjectCard({ project }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative aspect-video overflow-hidden"
      >
        <img 
          src={`https://picsum.photos/seed/${project.id}/800/450`} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 glass p-2 rounded-lg text-white">
          {CATEGORY_ICONS[project.category]}
        </div>
      </div>

      <div 
        style={{ transform: "translateZ(30px)" }}
        className="p-8 flex-grow flex flex-col"
      >
        <h3 className="text-xl font-bold mb-3 dark:text-white">{project.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t: string) => (
            <span key={t} className="text-[10px] font-mono px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded dark:text-gray-300">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors">
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
          <a href={project.link} className="flex items-center space-x-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors">
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<'all' | string>('all');
  const categories = ['all', ...new Set(PROJECTS.map(p => p.category))];

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <div className="inline-block px-3 py-1 rounded bg-indigo-500/10 text-indigo-500 text-xs font-mono font-bold uppercase mb-4">
            03. Portfolio
          </div>
          <h2 className="text-4xl font-bold tracking-tight dark:text-white">Selected Projects</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all ${
                filter === cat 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'glass text-gray-500 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
