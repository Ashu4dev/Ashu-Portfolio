import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = PERSONAL_INFO.tagline;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  const moveX = useTransform(springX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-40, 40]);
  const moveY = useTransform(springY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-40, 40]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
      {/* Interactive Background blobs */}
      <motion.div 
        style={{ x: moveX, y: moveY }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" 
      />
      <motion.div 
        style={{ x: useTransform(moveX, x => x * -1.5), y: useTransform(moveY, y => y * -1.5) }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10" 
      />
      
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-2 rounded-full glass text-xs font-mono uppercase tracking-widest text-primary">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {PERSONAL_INFO.name.split(' ').map((word, i) => (
            <span key={i} className="inline-block mr-4">
              {word === 'Ashutosh' ? word : <span className="text-gradient">{word}</span>}
            </span>
          ))}
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl font-mono text-gray-600 dark:text-gray-400 mb-8 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {text}<span className="animate-bounce">_</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a href="#projects" className="px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all transform hover:scale-105">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-4 rounded-full glass dark:text-white font-medium hover:bg-white/10 transition-all transform hover:scale-105">
            Contact Me
          </a>
        </motion.div>

        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-500 hover:text-primary transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
}
