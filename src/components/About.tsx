import { motion } from 'motion/react';
import { PERSONAL_INFO, SKILLS } from '../constants';
import * as Icons from 'lucide-react';
import SkillsChart from './SkillsChart';
import Ashu from "../images/Ashu.jpeg";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="inline-block px-3 py-1 rounded bg-primary/10 text-primary text-xs font-mono font-bold uppercase">
            01. About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white">
            Transforming Data into <span className="text-primary italic">Strategy</span>.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {PERSONAL_INFO.about}
          </p>
          <div className="pt-4">
            <a 
              href={PERSONAL_INFO.resume} 
              className="inline-flex items-center space-x-2 text-primary font-bold border-b-2 border-primary hover:pb-1 transition-all"
            >
              <span>Download Full Resume</span>
              <Icons.ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden glass p-1">
            <img 
              src={Ashu} 
              alt="Ashutosh Kumar" 
              className="w-full h-full object-cover rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative stats */}
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl shadow-xl hidden sm:block">
            <div className="text-3xl font-bold text-primary">3+</div>
            <div className="text-xs font-mono uppercase text-gray-500">Years Learning</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded bg-secondary/10 text-secondary text-xs font-mono font-bold uppercase mb-4"
          >
            02. My Toolkit
          </motion.div>
          <h2 className="text-4xl font-bold tracking-tight dark:text-white">The Tech Behind the Analysis</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SKILLS.map((skill, idx) => {
            const IconComponent = (Icons as any)[skill.icon] || Icons.Code;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group p-6 glass rounded-2xl hover:bg-white/5 transition-all text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-1 dark:text-white">{skill.name}</h3>
                <p className="text-xs text-gray-500 uppercase tracking-tighter">{skill.category}</p>
                <div className="mt-4 h-1 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-primary"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <SkillsChart />
      </div>
    </section>
  );
}
