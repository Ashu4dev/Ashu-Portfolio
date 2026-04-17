import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export default function Contact() {
  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', value: 'ashutosh-kumar', href: PERSONAL_INFO.linkedin },
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', value: 'Ashu4dev', href: PERSONAL_INFO.github },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-black/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded bg-primary/10 text-primary text-xs font-mono font-bold uppercase mb-4">
            04. Get In Touch
          </div>
          <h2 className="text-4xl font-bold dark:text-white">Let's Talk About Data</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Available for freelance opportunities or full-time roles in Data Science and Analytics. 
            Shoot me a message and I'll get back to you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <div className="flex flex-col justify-center items-center lg:items-start space-y-8">
            <div className="flex space-x-6">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: 'spring' }}
                  className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-primary hover:bg-white/5 transition-all shadow-lg"
                  title={info.label}
                >
                  {info.icon}
                </motion.a>
              ))}
            </div>
            <div className="hidden lg:block space-y-4">
              <p className="text-sm font-mono text-gray-400">
                Ready to collaborate? <br />
                Reach out on any of these platforms.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass p-8 md:p-12 rounded-3xl"
          >
            <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-bold dark:text-gray-300">Name</label>
                <input 
                  type="text" 
                  className="w-full p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-transparent focus:border-primary/50 focus:outline-none transition-all dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold dark:text-gray-300">Email</label>
                <input 
                  type="email" 
                  className="w-full p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-transparent focus:border-primary/50 focus:outline-none transition-all dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold dark:text-gray-300">Message</label>
                <textarea 
                  rows={4}
                  className="w-full p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-transparent focus:border-primary/50 focus:outline-none transition-all dark:text-white"
                  placeholder="Your message here..."
                />
              </div>
              <button 
                className="md:col-span-2 flex items-center justify-center space-x-2 w-full py-5 rounded-2xl bg-primary text-white font-bold hover:bg-primary/90 transition-all active:scale-95"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-gray-100 dark:border-white/5 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold font-mono tracking-tighter dark:text-white">
          ASHUTOSH<span className="text-primary">.</span>
        </div>
        
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Ashutosh Kumar. All rights reserved.
        </div>

        <div className="flex space-x-4">
          <a href={PERSONAL_INFO.github} className="p-2 glass rounded-full hover:text-primary transition-colors dark:text-gray-400">
            <Github className="w-5 h-5" />
          </a>
          <a href={PERSONAL_INFO.linkedin} className="p-2 glass rounded-full hover:text-primary transition-colors dark:text-gray-400">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
